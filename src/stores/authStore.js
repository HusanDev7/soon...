import { defineStore } from 'pinia'
import { account, ID } from '@/lib/appwrite';

export const useAuthStore = defineStore('Auth', {
  state: () => ({
    email: '',
    password: '',
    name: '',
    loggedInUser: null,
    currentBanner: null,
  }),
  actions: {
    async login() {
      try {
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        await account.createEmailPasswordSession(this.email, this.password);
        this.loggedInUser = this.email;  // Устанавливаем текущего пользователя после успешного входа
      } catch (e) {
        console.error(e, 'something is wrong with login');
      }
    },

    async register() {
      try {
        console.log('name:', this.name);
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        await account.create(ID.unique(), this.email, this.password, this.name);
        await this.login();
      } catch (e) {
        console.error(e, 'something wrong with register');
      }
    },

    async logout() {
      try {
        await account.deleteSession('current');
        this.loggedInUser = null; 
        return true;
      } catch (e) {
        console.error(e, 'something worng with logout ');
        return false;
      }
    },

    setBanner(banner) {
      this.currentBanner = banner
    }
  },
  getters: {}
});

