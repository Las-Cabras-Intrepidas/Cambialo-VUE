<template>
  <NavBar />

  <router-view />

  <FooterBar />
</template>

<script>
import { mapActions } from 'vuex'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavBar, FooterBar
  },
  methods: {
    ...mapActions(['cargarLocalStorage'])
  },
  created () {
    this.cargarLocalStorage()
  }
}
</script>

<style lang="scss">
:root {
  --main-color: #012bb3;
  --placeholder-gray: #cccaca;
  --darker-gray: #5e5e5e;
  --shadow-color: #81818113;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
