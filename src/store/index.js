const index = {
  state: {
    count: 0
  },
  getters:{
    myCount(state){
      return `hi ~ ${state.count}`
    }
  },
  mutations: {
    increment (state) {
      state.count ++
    },
    decrement(state){
      state.count --
    }
  },
  actions: {
    myIncrease(context){
      context.commit('increment')
    },
    myDecrement(context){
      context.commit('decrement')
    },
  },
}
export default index
