<template>
  <header class="header">

    
    <div class="products">
    <RouterLink class="listado" to="/Products">Listado</RouterLink>
    </div>
    <div class="cont-header">
      <h1 class="h1-header">Contabilidad Panaderia</h1>
    </div>
    <div class="añadir">
      <RouterLink class="listado" to="/IngresarProducto">Añadir</RouterLink>
    </div>
 

  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background-color: black;
  border: 6px solid #FBC02D;
}
.añadir{
padding-top: 3%;
margin-right: 2%;
}
.h1-header{
display: flex;
 justify-content: center;
  padding-top: 15%;
  color: gold;
}
.products{
padding-top: 3%;
margin-left: 2%;
}
.listado{
  color: #FBC02D;
}
</style>
