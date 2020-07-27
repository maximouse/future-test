<template>
  <div>
    <table :infoo="info">
      <thead>
        <tr>
          <th
            v-for="key in columns"
            :key="key"
            @click="sortBy(key)"
            :class="{ active: sortKey == key }"
          >
            {{ key | capitalize }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr @click="showInfo(entry)" v-for="entry in sorted" :key="sorted[entry]">
          <td v-for="key in columns" :key="key.id">{{entry[key]}}</td>
        </tr>
      </tbody>
    </table>
    <div class="pages">
      <button @click="prevPage">Previous</button>
      <span>Page: {{pageNumber}} of {{pagesAmount}}</span>
      <button @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import Cards from "@/store/modules/table_data.js";
export default {
  name: "vtable",
  data: function () {
    let columns = ["id", "firstName", "lastName", "email", "phone"]
    let sortOrders = {}
    columns.forEach(function (key) {
      sortOrders[key] = 1
    });
    return {
      columns: columns,
      sortKey: "",
      sortOrders: sortOrders,
      perPage: 3,
      pageNumber: 1,
      pagesAmount: 0,
      info: {}
    }
  },
  props: {
    cards: Array,
    search: String
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    prevPage() {
      if (this.pageNumber !== 1) {
        this.pageNumber = this.pageNumber - 1
      }
    },
    nextPage() {
      if (this.pageNumber !== this.pagesAmount) {
        this.pageNumber = this.pageNumber + 1
      }
    },
    showInfo(entry){
        this.$emit('getInfo', entry)
    },
     filterByValue(array, string) {
      return array.filter(o =>
        Object.keys(o).some(k =>
          o.firstName.toLowerCase().includes(string.toLowerCase())
        )
      )
    }
  },
  computed: {
    sorted: function () {
      let pageNumber = this.pageNumber || 1
      let cards = this.cards
      let sortKey = this.sortKey
      let order = this.sortOrders[sortKey] || 1
      
      if (sortKey) {
        cards = cards.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      if (this.search) {
        cards = this.filterByValue(cards, this.search);
      }
      if (pageNumber) {
        let perPage = this.perPage
        let from = pageNumber * perPage - perPage
        let to = pageNumber * perPage
        this.pagesAmount = Math.ceil(cards.length / this.perPage)
        cards = cards.slice(from, to)
        
      }
      
      return cards
    },
  },
  beforeMount: function () {},
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
}
</script>

<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
.pages {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
button {
  margin: 5px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  background-color: lightgrey;
  color: whitesmoke;
  font-size: 1.2rem;
}
button:hover {
  cursor: pointer;
}
span {
  margin: 10px;
}
table {
  border: 2px solid #5a9fc7;
  border-radius: 3px;
  background-color: #fff;
}
th {
  background-color: #5a9fc7;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
td {
  background-color: #f9f9f9;
 
}
th,
td {
  min-width: 100px;
  width: 100%;
  padding: 10px 20px;
  text-align: center;
}
th.active {
  color: #fff;
}
th.active .arrow {
  opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}
.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}
.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>