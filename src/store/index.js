import { createStore } from 'vuex'

export default createStore({
  state: { // 프로젝트에서 공통으로 사용할수 있는 변수
      counter: 10,
      number : 0
  },
  getters:{
      time2(state){
          return state.counter *2;
      }
  },
  mutations: { // state를 변경시키는 역할, 비동기처리 x -> 동기처리
      setCouter(state, value){
          state.counter = value;
      }
  },
  actions: { // mutations를 실행시키는 역할 , 비동기처리 o 
    
  },
  modules: {
  }
})


// 컴포넌트에서 dispatch로 action을 발생시킴 
// action 에서 비동기 로직 처리 
// commit으로 mutation을 호출하면 
// mutation에서 동기로직 처리 
// mutation (변이)를 통해서 state가 변경된다. 