<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { account } from '@/lib/appwrite';

const router = useRouter();
const email = ref('');
const password = ref('');
const name = ref('');
const isLogin = ref(true); // Переменная, чтобы отслеживать режим логина или регистрации

const login = async () => {
    try {
        await account.createEmailPasswordSession(email.value, password.value);
        // После успешного входа перенаправляем на главную страницу
        router.push({ name: 'home' });
    } catch (error) {
        console.error('Ошибка при входе:', error);
        alert('Ошибка входа. Проверьте данные.');
    }
};

const register = async () => {
    try {
        await account.create(ID.unique(), email.value, password.value, name.value);
        await login(); // После успешной регистрации выполняем вход
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        alert('Ошибка при регистрации.');
    }
};

const toggleAuth = () => {
    isLogin.value = !isLogin.value; // Переключаем режим (логин/регистрация)
};
</script>

<template>
    <div class="auth">
        <h4>{{ isLogin ? 'Login' : 'Register' }}</h4>

        <form class="auth__form" @submit.prevent="isLogin ? login() : register()">
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
            <input v-if="!isLogin" type="text" placeholder="Name" v-model="name" required />

            <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
        </form>

        <p @click="toggleAuth" class="auth__toggle">
            {{ isLogin ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.' }}
        </p>
    </div>
</template>
