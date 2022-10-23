<template>
  <header class="header">
    <div class="cont-header">
      <h1 class="h1-header">Contabilidad Panaderia</h1>
    </div>
    <div class="link">
      <div class="products">
        <RouterLink class="listado" to="/listProduct">Listado</RouterLink>
      </div>

      <div class="añadir">
        <RouterLink class="listado" to="/IngresarProducto">Añadir</RouterLink>
      </div>
      <div class="home">
        <RouterLink class="listado" to="/">Home</RouterLink>
      </div>
      <div class="editar">
        <RouterLink class="listado" to="/Products">Modificar</RouterLink>
      </div>

    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 150px;
  background-color: black;
  border: 6px solid #FBC02D;
}
.link{
  display: flex;
  justify-content: space-between;
}

.añadir {
  padding-top: 3%;
  margin-right: 2%;
}


.h1-header {
  display: flex;
  justify-content: center;
  padding-top: 15%;
  color: gold;
  
}

.products {
  padding-top: 3%;
  margin-left: 2%;
}

.listado {
  color: #FBC02D;
}
</style>
