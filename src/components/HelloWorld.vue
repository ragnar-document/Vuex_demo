<template>
  <div class="hello">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods:{
    ...mapMutations(['increment','decrement']),
    ...mapActions(['myIncrement','myDecrement'])
  },
  increment(){
      //可以不加也能调用
      //this.$store.commit('increment')
      //this.increment
      // this.myIncrement
  },
  decrement(){
      //this.$store.commit('decrement')
      //this.decrement
      // this.myDecrement
  }
}
</script>

