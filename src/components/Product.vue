<template>
  <div class="detallesproduct">
    <span :class="'product-badge status-' + (props.cantidad, props.name)">
      <input v-model="obj.name" />
      <input v-model="obj.cantidad" />
      <input v-model="obj.referencia" />
    </span>
    <Button @click="store.putData(obj, id)" class="btn btn-danger">edit</Button>
    <Button @click="store.deleteData(props)" class="btn btn-danger">Borrar</Button>
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
