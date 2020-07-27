<template>
    <div>
       Выбран пользователь: <b>{{info.firstName}} {{info.lastName}}</b>
       <br>
       Описание: 
       <br>
       <textarea v-model="info.description">
       </textarea>
       <br>
       Адрес проживания: <b>{{info.address.streetAddress}}</b>
       <br>
       Город: <b>{{info.address.city}}</b>
       <br>
        Провинция/Штат: <b>{{info.address.state}}</b>
       <br>
        Индекс: <b>{{info.address.zip}}</b>
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