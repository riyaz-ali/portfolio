<template>
  <div v-bar class="row content">
    <div class="whole column">
      <slot>Content goes in here...</slot>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  color: rgba(0,0,0,0.8);
  height: calc(100% - 115px);

  .column {
    padding: 15px;
    box-sizing: border-box!important;
  }
}

@media screen and (min-width: 500px){
  .vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;

    > .vb-dragger-styler {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transform: rotate3d(0,0,0,0);
      transform: rotate3d(0,0,0,0);
      -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
      transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
      background-color: #001F3F;
      margin: 5px 5px 5px 0;
      border-radius: 20px;
      height: calc(100% - 10px);
      display: block;
    }
  }
}
</style>

