<template>
  <div class="container">
    <div class="row holder bg-white">
        <!-- Topbar -->
        <topbar />

        <!-- Content Area -->
        <content-holder>
          <h2 style="text-align: center; margin: 30px 0 20px;">Hello, my name is Riyaz. I'm a Fullstack Developer from India</h2>

          <!-- google map here -->
          <google-map />

        </content-holder>
    </div>

    <!-- Footer -->
    <f-footer style="height: 30px; line-height: 30px;"/>
  </div>
</template>

<script>
// components
import Topbar from "./components/Topbar.vue";
import ContentHolder from "./components/ContentHolder.vue";
import GoogleMap from "./components/GoogleMap.vue";
import FFooter from "./components/Footer.vue";

// utils
import lipsum from "./util/lipsum.js";

export default {
  components: {
    Topbar,
    ContentHolder,
    GoogleMap,
    FFooter
  },
  data: () => ({
    lipsum
  })
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
  height: calc(100% - 30px);
  border-radius: 1px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

  > .whole.column {
    height: 100%;
  }
}
</style>
