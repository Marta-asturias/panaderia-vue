<template>
  <div class="detallesproduct">
    <h2>{{ id }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ cantidad }}</h2>
    <button @click="emitProduct" class="btn btn-danger"></button>
    <form action="deleteData" method="DELETE">


    </form>
      
   
             
   
  </div>
  
    
  
</template>

<script setup>
const emits = defineEmits(['deleteProduts'])

const props = defineProps({
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
});

const emitProduct = () => {
/*   emits('deleteProduts', props.id , props.name , props.cantidad) */
emits('deleteProduts', props)

}

</script>

<style scoped></style>
