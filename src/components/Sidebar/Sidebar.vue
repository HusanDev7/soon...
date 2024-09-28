<script setup>
import { ref, inject } from "vue";
import IconChat from "@/components/UI/icons/IconChat.vue";
import IconPeople from "@/components/UI/icons/IconPeople.vue";
import IconSettings from "@/components/UI/icons/IconSettings.vue";
import IconDark from "@/components/UI/icons/IconDark.vue";
import IconLight from "@/components/UI/icons/IconLight.vue";

const logo = ref("H.");
const active = ref(1);
const mode = inject('mode');
const toggle_mode = inject('toggle_mode');

const links = ref([
    { icon: IconPeople, link: '/peoples/' },
    { icon: IconChat, link: '/' },
    { icon: IconSettings, link: '/settings/' },
]);

const toggle = (index) => { active.value = index; };
</script>

<template>
    <div class="sidebar" :class="mode ? 'light-mode' : 'dark-mode'">
        <div class="sidebar__box">
            <div class="sidebar__logo">
                <h3 class="sidebar__logo-txt">{{ logo }}</h3>
            </div>

            <div>
                <ul class="sidebar__list">
                    <li v-for="(item, index) in links" :key="index" class="sidebar__item" @click="toggle(index)">
                        <RouterLink :to="item.link" class="sidebar__link" :class="{ active: active === index }">
                            <component :is="item.icon" :size="25" />
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div class="sidebar__mode" @click="toggle_mode">
                <span v-if="mode">
                    <IconDark :size="25" />
                </span>
                <span v-else>
                    <IconLight :size="25" />
                </span>
            </div>
        </div>
    </div>
</template>
