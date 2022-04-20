<template>
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 mb-3 mb-3">
        <div class="row gY-5">
            <div class="card col-5">
                <div class="small bg-dark text-white">TFIN</div>
                <div class="small text-dark">VTA</div>
                <div class="small text-dark">PPR</div>
                <div class="small text-dark">COB</div>
            </div>
           <div class="card col-7">
                <div class="small bg-dark text-white">$ & %</div>
                <div class="small text-dark">{{venta_neta.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
                <div class="small text-dark">{{venta_institucional.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
                <div class="small text-dark">{{cobertura.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
           </div>
        </div> 
    </div>  
</template>

<script>

export default {
    name:'Scope_Total',
    props:{venta_neta:0,
    venta_institucional:0,
    cobertura:0}
}
</script>
