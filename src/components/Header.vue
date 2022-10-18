<template>
  <div id="header">
    <div class="sidebar-header">
      <span>nombre</span>
    </div>
    <div class="sidebar-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="sidebar-footer">
      <span>footer</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
body {
  background-color: aqua;
}
</style>
