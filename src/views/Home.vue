<template>
    <div class="container bg-light">
        <div class="row bg-light">
            <Scope       
                v-for="vnd of vendedor" :key="vnd.vencod" 
                :vnd=vnd
            />
            <Scope_Total
                :venta_neta=venta_neta
                :venta_institucional=venta_institucional
                :cobertura=cobertura
            />
        </div>
    </div>
</template>

<script>

import Scope from '@/components/Scope.vue' 
import {useStore}  from 'vuex'
import {computed, onMounted} from 'vue'
import Scope_Total from '@/components/Scope_Total.vue'

export default {
    name: 'Home',
    components:{
      Scope,
      Scope_Total
    },
    setup(){
      const store = useStore()
      onMounted(()=>{
        store.dispatch('fetchData')
      })
      const vendedor = computed(()=>store.state.vendedor)
      const venta_neta = computed(()=>store.state.venta_neta)
      const venta_institucional = computed(()=>store.state.venta_institucional)
      const cobertura = computed(()=>store.state.cobertura)
      
      return {vendedor,venta_neta,venta_institucional,cobertura}
    }

}
</script>
