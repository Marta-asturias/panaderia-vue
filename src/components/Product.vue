<template>
  <div class="detallesproduct">
    <h2>{{ id }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ cantidad }}</h2>
 <button @click="store.deleteData(props)" class="btn btn-danger">x</button>
  </div>
  <div>
<v-model></v-model>

  </div>
  
    
  
</template>

<script setup>
import { userProductsStore } from "../stores/products";
const store = userProductsStore();

const props = defineProps({
  index: {
    type: Number
  },

  id: {
    type: Number,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  cantidad: {
    type: String,
    required: true,
  },
});



</script>

<style scoped></style>
