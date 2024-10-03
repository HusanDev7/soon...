<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuthStore()

const handelout = async () => {
    const succes = await authStore.logout();
    succes ? router.push({ name: 'auth' }) : console.log("something worng with logout")
}
</script>

<template>
    <div class="settings">
        <div class="settings-info">
            <div class="settings-info-img_box"><img class="settings-info-img_box-img"
                    src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user image"></div>
            <div class="settings-info-who">
                <h3 class="settings-info-who__name">Husan</h3>
                <div class="settings-info-who__ovrflow">
                    <p class="settings-info-who__bio">programer and pentester also trwder!!</p>
                </div>
            </div>
            <div class="settings-btns">
                <button class="settings-btns__change">Change</button>
                <button @click="handelout" class="settings-btns__logout">Logout</button>
            </div>
        </div>
    </div>
</template>