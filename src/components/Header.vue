<template>
  <header class="header">
    <div class="cont-header">
      <h1 class="h1-header">Contabilidad Panaderia</h1>
    </div>
    <div class="cont-link">
      <div class="home">
        <RouterLink class="listado" to="/listProduct">Listado</RouterLink>
      </div>

      <div class="home">
        <RouterLink class="listado" to="/IngresarProducto">Añadir</RouterLink>
      </div>
      <div class="home">
        <RouterLink class="listado" to="/">Home</RouterLink>
      </div>
      <div class="home">
        <RouterLink class="listado" to="/Products">Modificar</RouterLink>
      </div>

    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  width: 100%;
  height: 150px;
  background-color: black;
  border: 6px solid #FBC02D;
}

.cont-link {
  display: flex;
  justify-content: space-around;
  height: 45px;
  align-items: flex-end;
}

.cont-header {
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: flex-end;
  margin-top: 3%;
}



.h1-header {
  display: flex;
  justify-content: center;
  color: gold;

}



.listado {
  color: #FBC02D;
}


</style>
