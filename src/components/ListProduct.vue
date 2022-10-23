<template>
<table class="table-warning">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre Del Producto</th>
      <th scope="col">Rantidad Del Producto</th>
      <th scope="col">Referencia Del Producto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
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
      type: String,
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
  