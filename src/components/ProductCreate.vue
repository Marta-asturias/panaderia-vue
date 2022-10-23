<template>
  <div class="conjunto-crear">
    <div class="input-group">
      <label for="basic-url" class="form-label">Ingresa El Producto
        <input class="form-control" v-model="obj.name" />
      </label>
      <label for="basic-url" class="form-label">Ingresa La Cantidad
        <input class="form-control" v-model="obj.cantidad" />
      </label>
      <label for="basic-url" class="form-label">Ingresa La Referencia
        <input class="form-control" v-model="obj.referencia" />
      </label>
      <div class="boton-crear">
        <button @click="store.postData(obj)" class="btn btn-outline-dark">Crear Producto</button>
      </div>
    </div>
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
  
<style scoped>
.boton-crear {
  margin-top: 24px;
  height: 10px;
  margin-left: 1%;
}
.conjunto-crear{
  display: flex;
justify-items: center;
  margin-top: 15%;
  margin-left: 25%;
}
</style>