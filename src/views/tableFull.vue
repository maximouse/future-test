<template>
    <div>
        <div v-if="loading"><Loader /></div>
        <p v-else>{{datadata}}</p>
    </div>
</template>

<script>
    import Loader from '../components/loader.vue'
    export default{
        name: "tableFull",
        components: {
            Loader
        },
        data: function(){
            return{
                datadata: "",
                loading: true
            }
        },
        mounted: function() {
           this.$nextTick(function(){
               setTimeout(()=>{
                   this.datadata = "Hello"
                   this.loading = false
                   }, 5000)
           })
        }
    }
</script>