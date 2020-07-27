<template>
    <div>
        <div v-if="loading"><Loader /></div>
        <div v-else>
            <Search v-model="search" />
            <vtable :search="search" v-on:getInfo="onGetInfo" :cards="allCards" />
        </div>
        <infoCard v-if="info" :info="info" />
    </div>
   
</template>
<script>
    import Loader from '../components/loader.vue'
    import vtable from '../components/table.vue'
    import infoCard from '../components/infoCard.vue'
    import Search from '../components/search.vue' 
    import {mapGetters, mapActions} from 'vuex'
    export default{
        name: "table-min",
        components: {
            Loader,
            vtable,
            infoCard,
            Search
        },
        data: function(){
            return { 
                loading: true,
                info: null,
                search: ""
            }
        },
        props: {
           
        },
        methods: {
            ...mapActions(['fetchCards']),
            onGetInfo: function(entry){
                this.info = entry
            }

           
        },
        computed: {
            ...mapGetters(['allCards']),
            
        },
        async mounted(){
            this.fetchCards().then(()=>{
                this.loading = false
            }
               
            )
            
                // setTimeout(()=> this.loading = false, 1000) 
                // this.loading = false
            
        }
    }
</script>
<style scoped>

    div{
        width: 100%;
        margin: 0 auto;
    }
</style>