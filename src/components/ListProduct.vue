<template>
<table class="table">
  <thead>
    <tr class="table-warning">
      <th scope="col">Nombre Del Producto</th>
      <th scope="col">Cantidad Del Producto</th>
      <th scope="col">Referencia Del Producto</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-warning">
      <td>{{name}}</td>
      <td>{{cantidad}}</td>
      <td>{{referencia}}</td>
    </tr>
  </tbody>
</table>
  </template>
  
  <script setup>


  import { userProductsStore } from "../stores/products";
  import { ref } from 'vue'
  const store = userProductsStore();

  const message = ref('')
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
      type: Number,
      required: true,
    },
    referencia: {
      type: String,
      required: true,
    },
  });
  
  </script>
  
  <style scoped>
  
  
  </style>
  