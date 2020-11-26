<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase |to-lowercase }}</p>
        <hr />
        <button @click="fruits.push('Berries')">Add New Item</button>
        <input type="text" v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
//global created -> 
// main.js -> vue instance got executed
// app.vue -> global
// list.vue-> global
//created got call 2nd because app.vue calling fruitMixin (local)
// List.vue got called last because it was another component inside the instance
// mixin scope mencakup 1 template saja, apabila dipanggil ditempat lain maka mixin akan disalin secara bersih tanpa adanya parameter dari template lama 
import List from "./List.vue";

import { fruitMixin } from "./fruitsMixin.js"
export default {
  mixins:[ fruitMixin ],
  components: {
    appList: List,
  },
  data() {
    return {
      text: "Hello World ",
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style></style>
