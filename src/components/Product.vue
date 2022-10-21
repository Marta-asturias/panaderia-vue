<template>
  <div class="detallesproduct">
<!--     <p>{{name}}</p> -->
    <!-- <p>Message is: {{ name }}</p> -->
<!--     <input v-model="name" />
     <input v-model="cantidad"  />  -->
     <span :class="'product-badge status-' + (props.cantidad,  props.name )">
     <input v-model="name" /> <input v-model="cantidad"  /></span>
     <Button @click="store.putData(obj)" class="btn btn-danger">edit</Button>
     <Button  @click="store.deleteData(props)" class="btn btn-danger">Borrar</Button>
  </div>
  
 <!--  <div class="p-fluid">
        <div class="card">
            <h5>Cell Editing</h5>
            <p>Validations, dynamic columns and reverting values with the escape key.</p>
            <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">
                <Column v-for="store of columns" :field="store.field" :header="store.header" :key="store.field" style="width:25%">
                    <template #editor="{ props, field }">
                        <InputText v-model="props[field]" autofocus />
                    </template>
                </Column>
            </DataTable>
        </div>
  </div> -->
  <div>
    


  </div>
  
    
  
</template>

<script setup>
import { ref } from 'vue'
import { reactive } from "vue";
import { userProductsStore } from "../stores/products";
const store = userProductsStore();
const message = ref('')

const obj = reactive({

name: "",
cantidad: 0, 
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
});



</script>

<style scoped></style>
