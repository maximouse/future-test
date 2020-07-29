<template>
    <div id="main">
        <div class="info-column">
            <h2>Главная</h2>
            <p>Выберите объем данных.</p>
        </div>
        <div class="link-row">
             <router-link class="link" to="/table-min">Малый</router-link>
            <router-link class="link" to="/table-full">Большой</router-link>
        </div>
       
    </div>
</template>
<style>
#main{
    display: grid;
    justify-content: center;
    width: 800px;
    height: 100%;
    margin: 100px auto;
}
.link-row{
    display: flex;
  
    flex-direction: row;
    justify-content: space-between;
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
