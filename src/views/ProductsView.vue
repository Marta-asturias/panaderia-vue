<script setup>
import { onBeforeMount } from "vue";
import { userProductsStore } from "../stores/products";
import Product from "../components/Product.vue";




//store
const productStore = userProductsStore();

//ciclo de vida
onBeforeMount(() => {
  getProduts();
 /*  creatProduts();
  updatProduts(); */
/*   deletProduts(); */

});


//metodos
const getProduts = async () => {
  await productStore.fetchProducts();
};
/* const creatProduts = async () => {
  await productStore.postData(url = 'http://localhost:8080/api/products', data = {});

};
const updatProduts = async () => {
  await productStore.putData(url = 'http://localhost:8080/api/products/{id}', data = {});

}; */
/* const deletProduts = async () => {
  await productStore.deleteData(url='http://localhost:8080/api/products/delete', data);
  
 

}; */

    
      

    
  
</script>

<template>
  <div class="home">
    <Product
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