<template>
     <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                Добавить запись
              </div>
            
              <div class="modal-body">
                <form @submit.prevent>
                  <input type="number" 
                    placeholder="id" 
                    v-model.trim="id">

                  <input type="text" 
                    placeholder="firstName" 
                    v-model.trim="firstName">

                  <input type="text" 
                    placeholder="lastName" 
                   
                    v-model.trim="lastName">

                  <input type="text" 
                    placeholder="email" 
                    
                    v-model.trim="email">

                  <input type="number" 
                    placeholder="(xxx)xxx-xxxx" 
                   
                    v-model.trim="phone">

                  <input type="text" 
                    placeholder="streetAddress" 
                   
                    v-model.trim="streetAddress">

                  <input type="text" 
                    placeholder="city" 
                   
                    v-model.trim="city">

                  <input type="text" 
                    placeholder="state" 
                    
                    v-model.trim="state">

                  <input type="number" 
                    placeholder="zip" 
                  
                    v-model.trim="zip">

                   <textarea rows="5" cols="40" placeholder="description" 
                   v-model="description"></textarea>
                </form>
              </div>
              <div class="modal-footer">
                  <button class="add" :disabled="$v.$invalid" @click="submit()">Добавить</button>
                  <button class="close" @click="$emit('close')">Отмена</button>     
                 
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {email, required} from 'vuelidate/lib/validators'
    export default{
        name: "addCardModal",
        validations: {
            id: {required},
            firstName: {required},
            lastName: {required},
            phone: {required},
            email: {required},
            description: {required},  
            streetAddress: {required},
            city: {required},
            state: {required},
            zip: {required}
        },
        data: function(){
          return {
            id: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            description: "",  
            streetAddress: "",
            city: "",
            state: "",
            zip: ""
          }
        },
         props: {
          showModal: Boolean
        },
        methods: {
          ...mapMutations(['createCard']),
           submit: function(){
             if (this.$v.$invalid){
               this.$v.$touch()
               return
             }
                  let user = {
                      id: this.id,
                      firstName: this.firstName,
                      lastName: this.lastName,
                      email: this.email,
                      phone: this.phone,
                      description: this.description,
                      address:{
                        streetAddress: this.streetAddress,
                        city: this.city,
                        state: this.state,
                        zip: this.zip
                      }     
                    }
                    console.log(user)
                    this.createCard(user)
                    this.$emit('close')
            },
        },  
  
    }
</script>

<style scoped>

   input, button, textarea{
        margin: 5px;
        border-radius: 5px;
        padding: 5px;
        font-size: 1rem;
    }
    input, textarea{
        width: 100%;
        margin: 5px auto;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    textarea{
      border: 2px solid black;
      resize: vertical;
      height: 100px;
      max-height: 200px;
    }
    button {
  
  width: 100px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background-color: lightgrey;
  color: whitesmoke;
 
}
button:hover{
  cursor: pointer;
}
.add{
  background-color: rgb(76, 205, 50);
}
button:disabled {
  background-color: #ccc;
}
.close{
  background-color: crimson;
}
    .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>