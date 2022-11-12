<script setup>
import { onBeforeMount } from "vue";
import { userProductsStore } from "../stores/products";
import Product from "../components/Product.vue";
import Header from "../components/Header.vue";




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
  <Header></Header>
  <h2 class="edit-product">Añade o Resta Cantidad, Modifica o Elimina El Producto</h2>
  <div class="home">
    <Product v-for="(product, index) in productStore.products" :key="index" :id="product.id" :name="product.name"
      :cantidad="product.cantidad" :referencia="product.referencia" />
  </div>

</template>
<style scoped>
.edit-product{
    display: flex;
    justify-content: center;
    padding-top: 1%;
}
</style>