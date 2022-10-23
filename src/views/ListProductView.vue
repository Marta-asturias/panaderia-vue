<script setup>
import { onBeforeMount } from "vue";
import { userProductsStore } from "../stores/products";
import ListProduct from '@/components/ListProduct.vue'




//store
const productStore = userProductsStore();

//ciclo de vida
onBeforeMount(() => {
  getProduts();

});


//metodos
const getProduts = async () => {
  await productStore.fetchProducts();
};

</script>

<template>
  <div class="home">
    <ListProduct
      v-for="(product, index) in productStore.products"
      :key= "index"
      :id= "product.id"
      :name = "product.name"
      :cantidad = "product.cantidad"
      :referencia = "product.referencia"
    /> 

  </div>
</template>
<style scoped>
body {
  background-color: aqua;
}
</style>