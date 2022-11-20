<template>
    <div id="box">
        <div class="control" @click="show=!show">
            <div class="arrow">
                <svg width="27" 
                    height="22" 
                    viewBox="0 0 27 22" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.959961 11.1432L11.6568 0.446411H14.272L4.85784 10.1373H26.299L26.299 12.329H4.85784L14.272 21.8401H11.6568L0.959961 11.1432Z" fill="#D9D9D9"/>
                </svg>
            </div>
            <div class="title">

            </div>
        </div>

        <Transition name="slide">
            <div class="panel">
            
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const show = ref(true)

</script>

<style lang="scss">
.panel {
    position: absolute;
    max-width: 600px;
    max-height: 470px; 
    left: 0;
    top: 0;
    background: #929292;
}
</style>