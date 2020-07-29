<template>
    <div>
        <router-link class="link" to="/">Назад</router-link>
        <div class="loading" v-if="loading"><Loader /></div>
        <div class="table-wrapper" v-else-if="!err"> 
            <vtable @getInfo="onGetInfo" :cards="allCards" />
            <infoCard v-if="info" :info="info" />
        </div>
        <div class="error" v-else>
            {{err}}
            <button @click="window.location.reload()">Перезагрузить</button>
        </div>
        
        
        
    </div>
   
</template>
<script>
    import Loader from '../components/loader.vue'
    import vtable from '../components/table.vue'
    import infoCard from '../components/infoCard.vue'
    
    
    import {mapGetters, mapActions} from 'vuex'
    export default{
        name: "table-min",
        components: {
            Loader,
            vtable,
            infoCard,
            
           
        },
        data: function(){
            return { 
                loading: true,
                info: null,
                search: "",
                err: "",
               
            }
        },
        props: {
           
        },
        methods: {
            ...mapActions(['fetchCards']),
            onGetInfo: function(entry){
                this.info = entry
            },
            
        },
        computed: {
            ...mapGetters(['allCards']),
            
        },
        async mounted(){
            let link = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
            this.fetchCards(link).then(()=>{
                this.loading = false
            }).catch(error => {
                this.loading = false
                this.err = error
                console.log(error)
            })
                
    
        }
    }
</script>
<style scoped>

    div{
        width: 100%;
        margin: 0 auto;
    }
    .error{
        display: block;
        height: 200px;
        font-size: 2rem;
        background-color: crimson;
        color: whitesmoke;
        text-align: center;
    }
    .link{
    display: block;
    width: 150px;
    margin: 10px;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    
}
</style>