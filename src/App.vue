<template>
  <div id="app">
    <header>{{ header }}</header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      header: ''
    }
  },
  mounted: function() {
      this.header = this.getHeader();
  },
  watch: {
    '$route'(to, from) {
      this.header = this.getHeader();
    }
  },
  methods: {
    getHeader(): string {
      if (typeof this.$route.meta?.pathHeader === 'function') {
        return this.$route.meta?.pathHeader(this.$route);
      }
      return this.$route.meta?.pathHeader || '';
    }
  }
});

</script>

<style lang="scss">
:root {
  --fontSize-large: 54px;
  --fontSize-big: 42px;
  --fontSize-medium: 24px;
  --fontSize-small: 16px;
  --fontSize-tiny: 8px;
  --fontColor-default: #2c3e50;
}
header {
  font-size: var(--fontSize-large);
  font-weight: bold;
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--fontColor-default);
  background: #f5fdff;
  padding-bottom: 16px;
}
body {
  padding: 0;
  margin: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 20px;
  padding: 24px 64px;
}

</style>
