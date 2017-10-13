<template>
  <div class="project">
    <div class="header">
      <a class="avatar" :href="`https://github.com/${gh.owner}`" target="_blank">
        <img :src="gh.avatar">
      </a>
      <strong class="name"><a href="https://github.com/riyaz-ali/portfolio" target="_blank">{{gh.name}}</a><sup class="language">{{ gh.language }}</sup></strong>
      <span>Created by <a :href="`https://github.com/${gh.owner}`" target="_blank">{{ gh.owner }}</a></span>
      <a class="star" title="Star the project on Github" :href="`https://github.com/${gh.owner}/${gh.name}`" target="_blank"><i class="fa fa-star"></i></a>
    </div>

    <div class="description">
      <p>{{ gh.description }}</p>
    </div>

    <div class="footer">
      <span class="status" :title="`${gh.forks} forks`"><i class="fa fa-code-fork"></i> {{gh.forks}}</span>
      <span class="status" :title="`${gh.stars} stars`"><i class="fa fa-star"></i> {{gh.stars}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gh: Object
  }
}
</script>

<style lang="scss">
.project {
  width: 300px;
  height: 160px;
  margin: 15px 0;
  //height: 80px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border: 1px solid #ddd;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .header {
    padding: 10px;
    padding-left: 65px;
    position: relative;

    .avatar {
      position: absolute;
      top: 10px;
      left: 10px;
      height: 48px;
      width: 48px;
    }

    .name {
      display: block;
      color: rgba(0,0,0,0.8);

      .language {
        color: rgba(0,0,0,0.5);
        margin: 0 5px;
      }
    }

    .star {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .description {
    padding: 5px 15px;
    overflow: hidden;
  }

  .footer {
    position: absolute;
    bottom:  0;
    width: 100%;
    padding: 5px 15px;
    background: rgba(0,0,0,0.1);

    .status {
      margin: 0 5px;

      &:first-child { margin-left: 0; }
      &:last-child { margin-right: 0; }
    }
  }
}
</style>
