<template>
  <div id="app">
    <h1>{{count}}</h1>
    <h5>{{myCount}}</h5>
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  computed:{
    ...mapState({
      count: state => {
        return state.Index.count
        },
    }),
    ...mapGetters(['myCount'])
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
