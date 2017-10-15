/**
 * A simple webpack plugin to pre-render vue.js application on build
 */

const fs = require('fs');
const path = require('path');
const express = require('express');
const serve = require('serve-static');
const puppeteer = require('puppeteer');

// path to executable
let executable = "/opt/google/chrome-unstable/chrome";

class PrerenderVue {

  /**
   * Create a new Pugin instance
   */
  constructor(root, filename) {
    this.root = root;
    this.filename = filename;
  }

  /**
   * Called by webpack once when it register's the plugin
   *
   * @param {WebpackCompiler} compiler
   */
  apply(compiler) {
    let self = this;

    let log = (...args) => console.log(...args)

    // called after a compilation emits the generated output
    compiler.plugin('after-emit', function(compilation, callback) {
      // create server
      log('creating server')
      let server = express().use(serve(self.root)).listen(8080, function(){
        log('started server listening on 8080')
        // start Puppeteer
        puppeteer.launch({
          executablePath: executable
        }).then(async browser => {
          log('launched puppeteer');

          // open a new tab
          const page = await browser.newPage();
          // open localhost
          await page.goto("http://localhost:8080");
          // get rendered html
          let html =  await page.evaluate(() => {
            // javascript to be evaluated in browser
            // add _xdc_ global variable for Google Maps
            var s = document.getElementsByTagName('script')[0],
              x = document.createElement('script');
            x.innerText = `var _xdc_ = ${JSON.stringify(_xdc_)}`;

            s.parentNode.insertBefore(x, s) // insert patch script
            // wrap rendered output in application-mount
            let mountPoint = document.createElement('div')
            mountPoint.setAttribute('id', 'application-mount')
            // mountPoint.setAttribute('data-server-rendered', 'true')

            // search for element with class .container
            let root = document.querySelector('.container')
            mountPoint.innerHTML = root.outerHTML;

            // swap
            root.replaceWith(mountPoint);

            return new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML
          })

          log('rendered html');

          // write it to file
          fs.writeFileSync(path.resolve(self.root, self.filename), html);

          // done!
          await browser.close()
          // close the server
          server.close()

          log('Done... saved rendered output');
        }).then(x => callback()).catch(e => callback(e))
      });
    });
  }
}

// export
module.exports = PrerenderVue
