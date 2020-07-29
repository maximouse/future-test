<template>
  <form @submit.prevent>
    <input  @focus="onFocus" @blur="onBlur" type="text" :placeholder="lastSearch" v-model="search" />
    <button @click="submit">Найти</button>
  </form>
</template>
<script>
export default {
  name: "searchbar",
  data: function () {
    return {
      search: "",
      lastSearch: "",
      searchHolder: ""
    };
  },
  methods: {
    submit: function () {
      this.$emit("submit", this.search);

      this.lastSearch = this.searchHolder = ""
      
    },
    onFocus() {
        this.lastSearch = ""
    },
    onBlur() {
      this.lastSearch = this.searchHolder;
    },
  },
};
</script>
<style scoped>
input,
button {
  margin: 5px;
  width: fit-content;
  border-radius: 5px;
  padding: 5px;
  font-size: 1rem;
}
input {
  width: 250px;
}
button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background-color: lightgrey;
  color: whitesmoke;
}
button:hover {
  cursor: pointer;
}
</style>