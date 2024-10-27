<script setup>
// import icons
import IconSearch from '@/components/UI/icons/IconSearch.vue';
import IconDotes from '@/components/UI/icons/IconDotes.vue';
import IconClip from '@/components/UI/icons/IconClip.vue';
import IconSticker from '@/components/UI/icons/IconSticker.vue';
import IconSend from '@/components/UI/icons/IconSend.vue';
</script>

<template>
    <div class="chat">
        <!-- it's chat's head -->
        <div>
            <div class="chat__box">
                <div class="chat__box-mini__first">
                    <div class="chat__box-mini__first-img">
                        <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="">
                    </div>
                    <div class="chat__box-mini__first-info">
                        <h4>Abram Culhane</h4>
                    </div>
                </div>
                <div class="chat__box-mini__second">
                    <div class="chat__box-mini__second-progrees">
                        <IconSearch :size="25" />
                    </div>
                    <div class="chat__box-mini__second-pointer">
                        <IconDotes :size="25" />
                    </div>
                </div>
            </div>
            <span class="chat__line"></span>
        </div>
        <!-- it's chat's head -->

        <!-- it's chat's body -->
        <div>
            <div class="chat__body">

                <!-- <div class="chat__body-welcome">
                    <h4>Start Chatting Welcome to Chat by | Husan</h4>
                </div> -->

                <!-- User Message (align left) -->
                <div class="left">
                    <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="User Avatar"
                        class="chat__avatar chat__avatar--left">
                    <div class="chat__message chat__message--left">
                        <span>User: Hello</span>
                    </div>
                </div>

                <!-- Self Message (align right) -->
                <div class="right">
                    <div class="chat__message chat__message--right">
                        <span>Hello me</span>
                    </div>
                    <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="Self Avatar"
                        class="chat__avatar chat__avatar--right">
                </div>
            </div>
        </div>
        <!-- it's chat's body -->

        <!-- it's chat's footer -->
        <div>
            <span class="chat__line"></span>
            <div class="chat__footer">
                <IconClip :size="28" class="chat__footer-clip" />
                <input type="text" placeholder="Write a message ..." required>
                <div class="chat__footer-box">
                    <IconSticker :size="25" class="chat__footer-sticker" />
                    <IconSend :size="25" class="chat__footer-send" />
                </div>
            </div>
        </div>
    </div>
</template>