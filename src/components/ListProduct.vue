<template>
    <div class="detallesproduct">
      
        <h2>{{name}}</h2>
        <h2>{{cantidad}}</h2>
        <h2>{{referencia}}</h2>
      

    </div>
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
  