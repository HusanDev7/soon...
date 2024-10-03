<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore()
const isLogin = ref(true); 

const toggleAuth = () => { isLogin.value = !isLogin.value; };
</script>

<template>
    <div class="auth">
        <h4 class="auth-title">{{ isLogin ? 'Login' : 'Register' }}</h4>

        <form class="auth__form" @submit.prevent="isLogin ? authStore.login() : authStore.register()">
            <input type="email" placeholder="Email" v-model="authStore.email" required />
            <input type="password" placeholder="Password" v-model="authStore.password" required />
            <input v-if="!isLogin" type="text" placeholder="Name" v-model="authStore.name" required />

            <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
        </form>

        <p @click="toggleAuth" class="auth__toggle">
            {{ isLogin ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.' }}
        </p>
    </div>
</template>
