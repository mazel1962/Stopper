import { createStore } from 'vuex'

export default createStore({
  state: {
    vendedor:[],
    venta_neta:0,
    venta_institucional:0,
    cobertura:0
  },
  mutations: {
    setVendedor(state,payload){
      state.vendedor=payload 
      payload.forEach(function(vnd) {
        state.venta_neta=state.venta_neta+vnd.venta
        state.venta_institucional=state.venta_institucional+vnd.institucional
        state.cobertura=state.cobertura+vnd.cobertura
      
      })
    }  
    },  
  actions: {
    async fetchData({commit}){
      try{
          const res = await fetch('https://192.168.0.122:8443/DarfImperial/rest/vnd/racing',{
            method: 'GET',
            mode: 'cors',
            headers: {"Access-Control-Request-Method": "*"}
          }     
          )
          const data = await res.json()
          commit('setVendedor',data)
      }catch (error){ 
        console.error();
      }
    }
  },
  modules: {
  }
})
