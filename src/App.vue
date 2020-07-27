<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  data: function(){
    return {
      message: "Hello"
    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  display: block;
  width: 800px;
  height: 100%;
  margin: 100px auto;
  
}
</style>
