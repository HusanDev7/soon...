<script setup>
import IconSearch from '@/components/UI/icons/IconSearch.vue';
</script>

<template>
    <div class="people">
        <div class="people-info">
            <h5 class="people-info__title">Find your friends</h5>
            <div class="people-info__search-box">
                <span class="people-info__line"></span>
                <div class="people-info__search">
                    <IconSearch :size="25" />
                    <input type="text" placeholder="find friends..." required>
                </div>
                <span class="people-info__line"></span>

            </div>
        </div>
    </div>
</template>
