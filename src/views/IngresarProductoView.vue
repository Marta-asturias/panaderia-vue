<template>
<Header></Header>
<h2 class="añadir-productos">AÑADE PRODUCTOS</h2>
<ProductCreate></ProductCreate>
</template>






<script setup>
import ProductCreate from "../components/ProductCreate.vue";
import Header from "../components/Header.vue";   
  
</script>

<style scoped>
.añadir-productos{
    display: flex;
    justify-content: center;
    padding-top: 1%;
}
</style>
