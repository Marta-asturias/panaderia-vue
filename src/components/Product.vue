<template>
  <div class="conjunto-edit-delete">
    <div class="input-group">
      <label for="basic-url" class="form-label">Modifica El Nombre
        <input class="form-control" v-model="obj.name" />
      </label>
      <label for="basic-url" class="form-label">cantidad total
        <input class="form-control"  v-model.number="obj.cantidad" type="number"/>
      </label>
      <label for="basic-url" class="form-label">Añade Cantidad
        <input class="form-control" v-on:input="sumacantidad()" v-model.number="obj.cantidadasumar" type="number"/>
      </label>
      <label for="basic-url" class="form-label">Resta Cantidad
        <input class="form-control" v-on:input="restacantidad()" v-model.number="obj.cantidadarestar" type="number"/>
      </label>
      <label for="basic-url" class="form-label">ModificaLa Referencia
        <input class="form-control" v-model="obj.referencia" />
      </label>
      <div class="boton-crear"> 
        <button @click="store.putData(obj, id)" class="btn btn-outline-dark">Salvar
        </button>
      </div>
      <div class="boton-crear">
        <button @click="store.deleteData(props)" class="btn btn-outline-dark">Eliminar</button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from "vue";
import { userProductsStore } from "../stores/products";
const store = userProductsStore();
const message = ref('')
const obj = reactive({
  id: props.id,
  name: props.name,
  cantidad: props.cantidad,
  referencia: props.referencia,
  cantidadasumar: 0,
  cantidadarestar: 0,
});
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
 
  const sumacantidad = function() {
   return obj.cantidad= ( parseInt(props.cantidad) + parseInt(obj.cantidadasumar))
   }
   const restacantidad = function() {
   return obj.cantidad= ( parseInt(props.cantidad) - parseInt(obj.cantidadarestar))
   }
 
</script>

<style scoped>
.boton-crear {
  margin-top: 24px;
  height: 10px;
  margin-left: 1%;
}

.conjunto-edit-delete {
  display: flex;
  justify-items: center;
  margin-top: 2%;
  margin-left: 6%;
}


</style>
