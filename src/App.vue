<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">PC</router-link> |
      <router-link to="/about">Mobile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

#nav {
  padding: .3rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #8C40FF;
    }
  }
}
</style>
