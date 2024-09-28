<script setup>
import { provide, ref } from "vue";
import HeaderLayout from "./layout/HeaderLayout.vue";

const mode = ref(false);
provide('mode', mode);
provide('toggle_mode', () => {
  mode.value = !mode.value;
});
</script>

<template>
  <div class="banner">
    <div class="wrapper">
      <HeaderLayout />
      <div :class="mode ? 'light-mode' : 'dark-mode'">
        <RouterView />
      </div>
    </div>
  </div>
</template>
