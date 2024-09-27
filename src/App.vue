<script setup>
import HeaderLayout from "./layout/HeaderLayout.vue"
</script>

<template>
  <div class="banner">
    <div class="wrapper">
      <HeaderLayout />
      <RouterView />
    </div>
  </div>
</template>