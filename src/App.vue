<template>
  <div class="container">
    <div class="row holder bg-white">
        <!-- Topbar -->
        <topbar />

        <!-- Content Area -->
        <content-holder class="content">
          <h2 style="text-align: center; margin: 30px 0 20px;">Hello, my name is Riyaz. I'm a Fullstack Developer from India</h2>

          <!-- google map here -->
          <google-map />

          <!-- some bio -->
          <p class="bio">
            I am a <span class="highlight">maker</span> and <span class="highlight">student</span> based in India. <br /><br />
            I code in HTML/CSS/JavaScript for the <span class="highlight">web</span>, Python/Node.js for <span class="highlight">backends</span> and Java for <span class="highlight">mobiles</span>. <br /><br />
            I also worked as an <span class="highlight">intern at <a target="_blank" href="https://my.homecampus.com.sg">HomeCampus</a></span><br /><br />
            I am also one of the amazing mainteners of <span class="highlight"><a href="https://github.com/esfiddle/esfiddle" target="_blank">ESFiddle</a></span>
          </p>

          <!-- highlight some projects -->
          <div class="projects">
            <h2>Here are some of my open source projects </h2>
            <div>
              <github-project v-for="gh in github" :key="gh.name" :gh="gh" />
            </div>
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
}
</style>
