<template>
    <Transition name="slide">
        <div class="box">
            <div class="control" @click="show=!show">
                <div class="arrow">
                    <svg width="27" 
                        height="22" 
                        viewBox="0 0 27 22" 
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.959961 11.1432L11.6568 0.446411H14.272L4.85784 10.1373H26.299L26.299 12.329H4.85784L14.272 21.8401H11.6568L0.959961 11.1432Z" fill="#D9D9D9" />
                    </svg>
                </div>
                <div class="title">
                    <p>{{ title }}</p>
                </div>
            </div>
            <div class="panel">
                
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">

import { defineComponent, defineProps, type PropType, ref } from 'vue'
import ToDo from "../types/todo"

export default defineComponent({
    name: "Panel",
    props: {
        type: String,
        title: String,
        content: Object as PropType<ToDo>,
    },
    setup(props) {
        const show = ref(true)
        console.log(props.type)
    }  
})

</script>

<style lang="scss">
.box {
    position: absolute;
    display: block;
    width: 600px;
    height: 470px; 
    left: 0;
    top: 0;
    background: #929292;

    .control {
        z-index: 100;

        .title {            
            font-weight: 400;
            font-size: 30px;
            line-height: 39px;
        }
    }
}
</style>