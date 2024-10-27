import { defineStore } from 'pinia';
import { account, ID } from '@/lib/appwrite';

export const useAuthStore = defineStore('Auth', {
  state: () => ({
    email: '',
    password: '',
    name: '',
    loggedInUser: null,
    currentBanner: null
  }),
  actions: {
    async login() {
      try {
        await account.createEmailPasswordSession(this.email, this.password);
        const user = await account.get();
        this.loggedInUser = { name: user.name || this.name };
      } catch (e) {
        console.error(e.message || e, 'что-то пошло не так при входе');
      }
    },

    async register() {
      try {
        await account.create(ID.unique(), this.email, this.password, this.name);
        await this.login();
      } catch (e) {
        console.error(e.message || e, 'что-то пошло не так при регистрации');
      }
    },

    async logout() {
      try {
        await account.deleteSession('current');
        this.loggedInUser = null;
      } catch (e) {
        console.error(e.message || e, 'что-то пошло не так при выходе');
      }
    },

    setBanner(banner) {
      this.currentBanner = banner;
    }
  },
  getters: {
    getUserName() {
      return this.loggedInUser ? this.loggedInUser.name : this.name || "Anonymous";
    }
  },

  persist: true

});