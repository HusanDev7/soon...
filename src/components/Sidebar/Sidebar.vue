<script setup>
import { ref } from "vue";

// icons import here!
import IconChat from "@/components/UI/icons/IconChat.vue";
import IconPeople from "@/components/UI/icons/IconPeople.vue";
import IconSettings from "@/components/UI/icons/IconSettings.vue";
import IconDark from "@/components/UI/icons/IconDark.vue";
import IconLight from "@/components/UI/icons/IconLight.vue";

const logo = ref("H.");
const active = ref(1);

// array's links
const links = ref([
    { icon: IconPeople },
    { icon: IconChat },
    { icon: IconSettings },
]);

const toggle = (index) => {
    active.value = index;
};
</script>


<template>
    <div class="sidebar">
        <div class="sidebar__box">
            <div class="sidebar__logo">
                <h3 class="sidebar__logo-txt">{{ logo }}</h3>
            </div>

            <div>
                <ul class="sidebar__list">
                    <li v-for="(item, index) in links" :key="item.index" class="sidebar__item" @click="toggle(index)">
                        <RouterLink to="/" class="sidebar__link">
                            <component :is="item.icon" :size="25" :class="{ active: active === index }" />
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div class="sidebar__mode">
                <span v-if="false">
                    <IconDark :size="25" />
                </span>
                <span v-else>
                    <IconLight :size="25" />
                </span>
            </div>
        </div>
    </div>
</template>
