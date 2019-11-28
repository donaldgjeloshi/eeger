<template>
  <div id="app">
    <!--A functional component that renders the matched component for the given path. 
    Components rendered in <router-view> can also contain its own 
    <router-view>, which will render components for nested paths.-->
    <router-view />
  </div>
</template>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
