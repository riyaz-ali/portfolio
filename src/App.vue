<template>
  <div class="container">
    <div class="row holder bg-white">
        <!-- Topbar -->
        <topbar />

        <!-- Content Area -->
        <content-holder>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
          <p>{{ lipsum.generate(100) }}</p>
        </content-holder>
        <!-- Footer -->
      </div>
  </div>
</template>

<script>
// components
import Topbar from "./components/Topbar.vue";
import ContentHolder from "./components/ContentHolder.vue";

// utils
import lipsum from "./util/lipsum.js";

export default {
  components: {
    Topbar,
    ContentHolder
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
body { height: 100%; font-family: sans-serif; }

.container {
  height: 100%;
  border: 10px solid $container-bg;
  background: $container-bg;
}

.holder {
  height: 100%;
  border-radius: 1px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

  > .whole.column {
    height: 100%;
  }
}

/* override row margins */
.row {
  margin: 0;
  max-width: none;
}
</style>
