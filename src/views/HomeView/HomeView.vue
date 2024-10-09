<script setup>
import { inject } from "vue";

// import Icons here
import IconDot from '@/components/UI/icons/IconDot.vue';
import IconSearch from '@/components/UI/icons/IconSearch.vue';
import IconPlus from '@/components/UI/icons/IconPlus.vue';

const mode = inject('mode');

</script>

<template>
    <div class="chatList" :class="mode ? 'light-mode' : 'dark-mode'">
        <!-- here user avatar and icon -->
        <div class="chatList__avatar">
            <div class="chatList__avatar-infos">
                <img class="chatList__avatar-img"
                    src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="">

                <div class="chatList__avatar-info">
                    <h5 class="chatList__avatar-name">Carner Done</h5>
                    <p class="chatList__avatar-desc">Web Developer</p>
                </div>
            </div>
            <div class="chatList__avatar-dots">
                <IconDot />
            </div>
        </div>
        <!-- here search friends -->
        <span class="chatList__line"></span>
        <div class="chatList__search-box">
            <IconSearch :size="25" />
            <input class="chatList__search-box-inp" type="text" placeholder="People and massages">
            <IconPlus :size="20" />
        </div>
        <span class="chatList__line"></span>

        <!-- here user chatList -->
        <div class="chatList__user">
            <div>
                <div class="chatList__user-users">
                    <div class="chatList__user-users-info">
                        <img class="chatList__user-users-info_img"
                            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="">
                        <div>
                            <h6 class="chatList__user-users-info_name">Abram Culhane</h6>
                        </div>
                    </div>

                    <div class="chatList__notf">
                        <span class="chatList__notf-sms">4</span>
                    </div>
                </div>
                <span class="chatList__line"></span>
            </div>
        </div>
    </div>
</template>