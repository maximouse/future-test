<template>
    <div class="card">
       <span>Выбран пользователь: <b>{{info.firstName}} {{info.lastName}}</b></span>
       <br>
       <span>Описание: </span>
       <br>
       <textarea readonly="readonly" v-model="info.description">
       </textarea>
       <br>
       <span>Адрес проживания: <b>{{info.address.streetAddress}}</b></span>
       <br>
       <span>Город: <b>{{info.address.city}}</b></span>
       <br>
        <span>Провинция/Штат: <b>{{info.address.state}}</b></span>
       <br>
        <span>Индекс: <b>{{info.address.zip}}</b></span>
    </div>
</template>

<script>
    export default{
        name: "infoCard",
        props: {
            info: Object
        }
    }
</script>
<style scoped>
.card{
    display: block;
    border: 1px solid black;
    border-radius: 5px;
    min-width: 350px;
    width: fit-content;
    margin-top: 10px;
    padding: 10px;
}
span{
    margin: 5px;
}
 textarea{
      border: 2px solid black;
      border-radius: 5px;
      resize: none;
      width: 300px;
      height: 150px;
      max-height: 200px;
      margin: 5px;
    }

</style>