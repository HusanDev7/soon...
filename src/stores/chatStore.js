import { defineStore } from 'pinia';
import { databases, ID } from "@/lib/appwrite";

const databaseId = 'chatDB';
const messagesCollectionId = 'messages';

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [],
        userId: null,
        userAvatar: ''
    }),
    actions: {
        async loadMessages() {
            try {
                const response = await databases.listDocuments(databaseId, messagesCollectionId);
                this.messages = response.documents;
            } catch (error) {
                console.error('Ошибка при загрузке сообщений:', error);
            }
        },

        async postMessage(text) {
            if (!this.userId || !this.userAvatar) {
                console.error('Необходимы userId и userAvatar для отправки сообщения');
                return;
            }

            const message = {
                userId: this.userId,
                text,
                avatar: this.userAvatar,
                timestamp: new Date().toISOString(),
            };

            try {
                await databases.createDocument(databaseId, messagesCollectionId, ID.unique(), message);
            } catch (error) {
                console.error('Ошибка при отправке сообщения:', error);
            }
        },

        startPolling() {
            this.loadMessages();
            setInterval(this.loadMessages, 5000);
        },

        setUserInfo(userId, userAvatar) {
            this.userId = userId;
            this.userAvatar = userAvatar;
        },
    },
    getters: {}
});
