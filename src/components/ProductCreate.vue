<template>

    <div>
	   <input v-model="obj.name" placeholder="mete el producto" />
     <input v-model="obj.cantidad" placeholder="mete la cantidad" />
     <input v-model="obj.referencia" placeholder="mete la referencia" />
      <button @click="store.postData(obj)" class="btn btn-danger">x</button> 
    </div>
    
    
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import { userProductsStore } from "../stores/products";


  const store = userProductsStore();
  const obj = reactive({

    name: "",
    cantidad: 0,
    referencia: 0, 
    }); 

  

  
  
  
  </script>
  
  <style scoped></style>