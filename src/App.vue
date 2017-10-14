<template>
  <div class="container">
    <div class="row holder bg-white">
        <!-- Topbar -->
        <topbar />

        <!-- Content Area -->
        <content-holder class="content">
          <h2 style="text-align: center; margin: 30px 0 20px;">Hello, my name is Riyaz. I'm a Fullstack Developer from India</h2>

          <!-- google map here -->
          <google-map class="embed-map" />

          <!-- some bio -->
          <p class="bio">
            I am a <span class="highlight">maker</span> and <span class="highlight">student</span> based in India. <br /><br />
            I code in HTML/CSS/JavaScript for the <span class="highlight">web</span>, Python/Node.js for <span class="highlight">backends</span> and Java for <span class="highlight">mobiles</span>. <br /><br />
            I worked as an <span class="highlight">intern at <a target="_blank" href="https://my.homecampus.com.sg">HomeCampus</a></span><br /><br />
            I am also one of the amazing mainteners of <span class="highlight"><a href="https://github.com/esfiddle/esfiddle" target="_blank">ESFiddle</a></span>
          </p>

          <!-- highlight some projects -->
          <div class="projects">
            <h2>Here are some of my open source projects </h2>
            <div>
              <github-project v-for="gh in github" :key="gh.name" :gh="gh" />
            </div>
          </div>

          <!-- network profiles -->
          <div class="social">
            <h2>Social</h2>
            <p>
              You can always find my writings on my <a href="javascript:swal('Under Construction!', 'Hey there! Thanks for your interest but my blog is still under construction! I\'ll update the link soon. Sorry for the random surprise ;)', 'warning')">Blog</a>, my thoughts on <a href="https://twitter.com/riyaz2302" target="_blank">Twitter</a> and my code on <a href="https://github.com/riyaz-ali" target="_blank">Github</a>
            </p>

            <h3>&dash; Or you can find me on &dash;</h3>
            <div class="links">
              <div>
                <a class="stackoverflow" href="https://stackoverflow.com/users/6611700/riyaz-ali" target="_blank"><i class="fa fa-stack-overflow"></i> Stackoverflow</a>
                <a class="twitter" href="https://twitter.com/riyaz2302" target="_blank"><i class="fa fa-twitter"></i> Twitter</a>
              </div>
              <div>
                <a class="github" href="https://github.com/riyaz-ali" target="_blank"><i class="fa fa-github"></i> Github</a>
                <a class="email" href="mailto:hey@iamriyaz.com?subject=Hey" target="_blank"><i class="fa fa-envelope"></i> Email</a>
              </div>
            </div>
          </div>

          <!-- interested in project? mail me at hey@iamriyaz.com -->
          <div class="interstitial bg-silver">
            <h2>Interested in a project?</h2>
            <a class="bg-navy" href="mailto:hey@iamriyaz.com?subject=Project+offer" target="_blank"><i class="fa fa-reply"></i> Contact me</a>
          </div>

        </content-holder>
    </div>

    <!-- Footer -->
    <!--<f-footer style="height: 30px; line-height: 30px;"/>-->
  </div>
</template>

<script>
// components
import Topbar from "./components/Topbar.vue";
import ContentHolder from "./components/ContentHolder.vue";
import GoogleMap from "./components/GoogleMap.vue";
import GithubProject from "./components/GithubProject.vue";
import FFooter from "./components/Footer.vue";

// utils
import lipsum from "./util/lipsum.js";

export default {
  components: {
    Topbar,
    ContentHolder,
    GoogleMap,
    GithubProject,
    FFooter
  },
  data: () => ({
    lipsum,
    github: [

    ]
  }),

  mounted(){
    let user = "riyaz-ali";

    let mapRepoToObject = repo => ({
      owner: repo.owner.login,
      avatar: repo.owner.avatar_url + '&s=48',
      name: repo.name,
      language: repo.language,
      description: repo.description,
      forks: repo.forks_count,
      stars: repo.stargazers_count,

    });

    // get repo data from github
    fetch(`https://api.github.com/users/${user}/repos?type=all&sort=pushed`)
      .then(response => response.json())
      .then(repos => repos.slice(0, 5))
      .then(repos => repos.map(mapRepoToObject))
      .then(repoObjects => {
        this.github = repoObjects;
      })
  }
}
</script>

<style lang="scss">
/* variables */
$container-bg: #F44336; //rgba(0,0,0,0.5);

/* set base height*/
html,
body { height: 100%; font-family: "Karla", sans-serif; }

.container {
  height: 100%;
  border: 10px solid $container-bg;
  background: $container-bg;
}

.holder {
  height: 100%;//calc(100% - 30px);
  border-radius: 1px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

  > .whole.column {
    height: 100%;
  }
}

.content {
  .embed-map {
    margin-right: -20px;
    margin-left: -20px;
  }
  .bio {
    font-size: 1.5em;
    text-align: center;

    &, & > .highlight { transition: 0.2s; }

    .highlight {
      a {
        color: inherit;
        text-decoration: underline;
        text-decoration-style: dotted;
      }
    }
    &:hover {
      color: rgba(0,0,0,0.65);
      & > .highlight {
        color: #001F3F;
      }
    }
  }

  .projects {
    margin: 80px 0 0;

    h2 {
      text-align: center;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      padding-bottom: 15px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .social {
    margin: 80px 0 0;

    h2 {
      text-align: center;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      padding-bottom: 15px;
    }

    h3 {
      text-align: center;
      margin: 35px 0 20px;
    }

    p {
      text-align: center;
      font-size: 1.3em;
      a {
        color: inherit;
      }
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;

      @media screen and (min-width: 500px) {
        width: 50%;
      }

      > div {
        flex: 1;
        //padding: 15px;
        //border: 1px solid red;
      }

      a {
        display: block;
        width: 220px;
        height: 68px;
        margin: 15px auto 0;
        text-align: center;
        padding: 25px 25px 25px 50px;
        justify-content: space-around;
        color: #fff;
        font-weight: bold;
        font-size: 1em;
        letter-spacing: 2px;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 2px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        position: relative;
        transition: box-shadow 0.2s;

        i {
          position: absolute;
          top: 0;
          left: 0;
          height: 68px;
          line-height: 68px;
          width: 40px;
          background: rgba(0,0,0,0.6);
          text-align: center;
          font-size: 1.2em;
        }

        &:hover {
          box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.6);
        }

        &.stackoverflow { background-color: #f48024; }
        &.twitter { background-color: #1da1f2; }
        &.github { background-color: #24292e; }
        &.email { background-color: #ea4335; }
      }
    }
  }


  .interstitial {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 50px -20px -15px;
    height: 200px;

    h2 {
      text-align: center;
      font-size: 2em;
      text-transform: uppercase;
    }

    a {
      margin: 0 auto;
      padding: 25px 25px 25px 50px;
      display: block;
      width: 200px;

      color: #fff;
      //background: #ea4335;
      text-decoration: none;
      text-align: center;
      font-weight: bold;
      font-size: 1em;
      letter-spacing: 2px;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 2px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
      position: relative;
      transition: box-shadow 0.2s;

      i {
        position: absolute;
        top: 0;
        left: 0;
        height: 68px;
        line-height: 68px;
        width: 40px;
        background: rgba(0,0,0,0.6);
        text-align: center;
        font-size: 1.2em;
      }

      &:hover {
        box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.6);
      }
    }
  }
}
</style>
