<script setup>
import { provide, ref, watch } from "vue";
import { useAuthStore } from "./stores/authStore";
import HeaderLayout from "./layout/HeaderLayout.vue";
import default_banner from "./assets/img/default_banner.jpg";

const authStore = useAuthStore()

const mode = ref(false);
provide('mode', mode);
provide('toggle_mode', () => { mode.value = !mode.value; });

const currentBanner = ref(authStore.currentBanner || default_banner);

watch(() => authStore.currentBanner, (newBanner) => {
  currentBanner.value = newBanner || default_banner;
});
</script>

<template>
  <div class="banner" :style="{ backgroundImage: `url(${currentBanner})` }">
    <div class="wrapper">
      <HeaderLayout />
      <div :class="mode ? 'light-mode' : 'dark-mode'">
        <RouterView />
      </div>
    </div>
  </div>
</template>
