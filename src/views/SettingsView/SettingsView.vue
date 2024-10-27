<script setup>
import { useAuthStore } from '@/stores/authStore';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import default_banner from "@/assets/img/default_banner.jpg";
import banner1 from "@/assets/img/banner-1.jpg";
import banner2 from "@/assets/img/banner-2.jpg";
import banner3 from "@/assets/img/banner-3.jpg";
import banner4 from "@/assets/img/banner-4.jpg";
import banner5 from "@/assets/img/banner-5.jpg";

const router = useRouter();
const authStore = useAuthStore();
const active = ref(1);
const banners = ref([
    { banner: default_banner },
    { banner: banner1 },
    { banner: banner2 },
    { banner: banner3 },
    { banner: banner4 },
    { banner: banner5 },
]);

const toggle = (index) => { active.value = index };
const selectBanner = (banner) => { authStore.setBanner(banner) };

const handelogout = async () => {
    const success = await authStore.logout();
    success ? router.push({ name: 'auth' }) : console.log("что-то не так с выходом");
};

const userName = computed(() => authStore.getUserName);

</script>

<template>
    <div class="settings">
        <div class="settings-info">
            <div class="settings-info-img_box">
                <img class="settings-info-img_box-img"
                    src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user image">
            </div>
            <div class="settings-info-who">
                <h3 class="settings-info-who__name">{{ userName }}</h3>
                <div class="settings-info-who__ovrflow">
                    <p class="settings-info-who__bio">programmer and pentester also trader!!</p>
                </div>
            </div>
            <div class="settings-btns">
                <button class="settings-btns__change">Change</button>
                <button @click="handelogout" class="settings-btns__logout">Logout</button>
            </div>
        </div>

        <h4 class="settings__title">Change background</h4>
        <div class="settings__bg">
            <div class="settings__bg-banner" v-for="(item, index) in banners" :key="index"
                @click="selectBanner(item.banner), toggle(index)">
                <img :class="{ active: active === index }" :src="item.banner" alt="banners">
            </div>
        </div>
    </div>
</template>