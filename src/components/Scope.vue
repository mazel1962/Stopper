<template>
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
        <div class="row gY-5">
            <div class="card col-5">
                <div class="small text-white bg-dark">{{vnd.nomvend.substr(0,5)}}</div>
                <div class="small text-dark">VTA</div>
                <div class="small text-dark">PPR</div>
                <div class="small text-dark">COB</div>
            </div>
           <div class="card col-7">
                <div class="small text-white bg-dark">$ & %</div>
                <div class="small text-dark">{{vnd.venta.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
                <div class="small text-dark">{{vnd.institucional.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
                <div class="small text-dark">{{vnd.cobertura.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}}</div>
           </div>
        </div> 
    </div>   
</template>

<script>

export default {
    name:'Scope',
    props:['vnd']
}
</script>
