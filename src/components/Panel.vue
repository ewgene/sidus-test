<template>
    <div class="box">
        <div class="control">
            <div class="arrow"
                @click="swapPanel">
                <svg width="27" 
                    height="22" 
                    viewBox="0 0 27 22" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.959961 11.1432L11.6568 0.446411H14.272L4.85784 10.1373H26.299L26.299 12.329H4.85784L14.272 21.8401H11.6568L0.959961 11.1432Z" fill="#D9D9D9" />
                </svg>
                <p class="title"
                    :class="`${name}`"
                    v-if="!show">
                    {{ title }}<span v-if="isList">[{{ count }}/{{ total }}]</span>

                </p>
            </div>
        </div>
        <div class="panel">
            <div v-if="isList">
                <ToDos 
                    :name="name" 
                    :title="title" 
                    :list="panelContent"
                    @count="count++" />
            </div>
            <div v-if="isGame">
                <Kitty
                    :name="name"
                    :title="title"
                    :content="panelContent"
                    :heart="panelHeart" />
            </div>
            <div v-if="isText">
                <Text
                    :name="name"
                    :title="title"
                    :content="panelContent" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, type PropType, ref } from 'vue'
/* Загружаем модули трёх типов: 
    list -- список с возможностью отметки пунктов
    game -- фото с динмически появляющимися анимированными объектами
    text -- простой текстовый блок */
import Kitty from './Kitty.vue'
import Text from './Text.vue'
import ToDos from './ToDos.vue'
// Загружаем интерфейс для списочного объекта
import { ToDo } from '../types/todo'

export default defineComponent({
    name: "Panel",
    components: {
        ToDos, // list
        Kitty, // game
        Text // text
    },
    props: {
        name: String, // имя компонента для внутреннего пользования
        type: String, // тип
        title: String, // заголовок для панели
        content: Object as PropType<ToDo>, // типизированное содержание
        heart: String // адрес картинки для анимированного элемента в типе game
    },
    setup(props) {
        const show = ref(true)
        let panelName // универсальное имя для панели любого типа. служит для id корневого эемента dom
        let panelSource // имя компонента панели
        let panelContent // содержание панели
        let panelHeart // url анимированного элемент для панели типа 'game'
        let isList = false 
        let isGame = false
        let isText = false
        // счётчики для панелей типа 'todo'
        let count = 0 
        let total

        // выбор наполнение панелей в зависимости от типа
       if(props.type === 'list') {
            panelSource = 'ToDos'
            panelName = props.name
            panelContent = JSON.parse(JSON.stringify(props.content))
            total = props.content.length
            isList = true
        }
        if(props.type === 'game') {
            panelSource = 'Kitty'
            panelContent = props.content
            panelName = props.name
            panelHeart = props.heart
            isGame = true
        }
        if(props.type === 'text') {
            panelSource = 'Text'
            panelContent = props.content
            panelName = props.name
            isText = true
        }

        return {
            show,
            panelSource, 
            panelName,
            panelContent,
            panelHeart,
            isList,
            isGame,
            isText,
            count,
            total
        }
    },
    methods: {
        // механизм показа/скрытия панелей
        swapPanel() {
            let elem = null
            elem = event.currentTarget.parentNode.parentNode
            elem.classList.toggle('closed')
            this.show = !this.show
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

        .title {
            font-size: 20px;
            line-height: 45px;
            white-space: nowrap;
            margin: 0;
            padding: 0;
            color: $light;
        }
    }
    .panel {
        position: relative;
    }
}
</style>