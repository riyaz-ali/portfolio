<template>
  <nav class="row nav">

    <!-- logo -->
    <div class="column">
      <a href="/">
        <svg class="brand" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect x="5" y="5" width="50" height="50" class="stroke-navy fill-white" style="stroke-width: 10" />
            <text x="15" y="37" width="40" height="40" font-size="20" class="fill-navy">RA</text>
          </g>
        </svg>
      </a>
      <h1 class="name navy">
        Riyaz Ali <small>fullstack developer</small>
      </h1>
    </div>

    <!-- menu options>
    <div class="menu four columns offset by-four">
      <a href="/">Home</a>
      <a href="#projects">Projects</a>
      <a href="javascript:swal('Under Contruction!', 'Hey there! Thanx for showing interest but my blog is still under construction.I\'ll update the link as soon as it goes live 😊😊😊')">Blog</a>
      <a href="#social">Social</a>
    </div-->
  </nav>
</template>

<style lang="scss">
nav.nav {
  //margin: -10px -20px 0;
  // max-width: none!important;
  border-bottom: 1px solid rgba(0,0,0,0.09);
  padding: 15px; //25px 35px; // logo
  svg.brand {
    cursor: pointer;
  }

  // name
  .name {
    display: inline-block;
    margin: 0 10px;
    text-transform: uppercase;
    height: 60px;
    line-height: 60px;
    vertical-align: top;
    position: relative;

    small {
     position: absolute;
     bottom: 5px;
     left: 0;
     line-height: 0;

     font-size: .35em;
     color: rgba(0,0,0,0.5);
    }
  }

  // menu
  .menu {
    //border: 1px solid;
    height: 64px;
    line-height: 64px;
    padding: 0;
    display: flex;

    a {
      border-bottom: 5px solid transparent;
      flex: 1;
      text-align: center;

      color: #001F3F; //rgba(0,0,0,0.8);
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.2s;

      &:hover {
        border-bottom-color: #001F3F; //#F44336;
      }
    }
  }
}
</style>
