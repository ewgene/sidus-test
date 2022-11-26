<template>
    <div class="box">
        <div class="control">
            <div class="arrow"
                @click="swapPanel($event)">
                <svg width="27" 
                    height="22" 
                    viewBox="0 0 27 22" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.959961 11.1432L11.6568 0.446411H14.272L4.85784 10.1373H26.299L26.299 12.329H4.85784L14.272 21.8401H11.6568L0.959961 11.1432Z" fill="#D9D9D9" />
                </svg>
            </div>
            <div class="title"
                v-if="!show">
                <p>{{ title }}</p>
            </div>
        </div>
        <div class="panel">
            <div v-if="isList">
                <ToDos :name="name" :title="title" :list="panelContent" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, type PropType, ref } from 'vue'
import ToDos from './ToDos.vue'
import { ToDo } from '../types/todo'

export default defineComponent({
    name: "Panel",
    components: {
        ToDos
    },
    props: {
        name: String,
        type: String,
        title: String,
        content: Object as PropType<ToDo>,
    },
    setup(props) {
        const show = ref(true)
        let panelName
        let panelSource
        let panelContent
        let isList = false

       if(props.type === 'list') {
            panelSource = 'ToDos'
            panelName = props.name
            panelContent = JSON.parse(JSON.stringify(props.content))
            isList = true
        }
        return {
            show,
            panelSource, 
            panelName,
            panelContent,
            isList
        }
    },
    methods: {
        swapPanel() {
            let elem = null
            elem = event.target.parentNode.parentNode.parentNode
            console.log(elem)
            elem.classList.toggle('closed')
            elem = null
        }
    }  
})

</script>

<style lang="scss">
.box {
    position: absolute;
    display: block;
    padding: 4vh 2vw;
    top: 0;
    background: $light;
    transition: transform 0.5s;

    .control {
        z-index: 100;

        .arrow {
            position: absolute;
            cursor: pointer;
            top: 0;
            background-color: $black;
            border: 1px solid $light;
        }
    }
}
</style>