import Vue from 'vue';
import Vuex from 'vuex';
import Index from './index'


Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    Index
  }
})
export default store

// const a = {
//   state: {
//     count: 0
//   },
//   getters:{
//     myCount(state){
//       return `hi ~ ${state.count}`
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count ++
//     },
//     decrement(state){
//       state.count --
//     }
//   },
//   actions: {
//     myIncrease(context){
//       context.commit('increment')
//     },
//     myDecrement(context){
//       context.commit('decrement')
//     },
//   },
// }

// export default new Vuex.Store({
//   modules:{
//     a
//   }
// });
