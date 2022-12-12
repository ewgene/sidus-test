<template>
    <div :id="`${name}`">
        <div class="panel_title">
            <p>{{ title }}[{{ count }}/{{ total }}]</p>
        </div>
        <ul class="listing"
            :ref="`${name}`">
            <li v-for="(stage, index) in list" 
                :key="index"
                :class="`${name}`"
                @click="markDone(stage, $event)">
                {{ stage.content }}
            </li> 
        </ul>
    </div>
</template>

<script lang="ts">

import { defineComponent, PropType, ref, watch } from "vue"
// импортирум интерфейс списочного элемента
import { ToDo } from "../types/todo"

export default defineComponent ({
    name: 'ToDos',
    props: {
        name: String, // используется как id для dom списка
        title: String, // заголовок панели
        list: Object as PropType<ToDo> //список элементов
    },
    setup(props, context) {
        const count = ref(0) // колчество отмеченных
        const total = ref(props.list.length) // общее количество

        // отправляем колиество отмеченных родителю для заголовка в свёрнутом состоянии
        watch(count, () => {
            context.emit('count', count.value) 
        })

        return {
            count,
            total
        }
    },
    methods: {
        markDone(stage) {
            stage.done = true
            this.count++
            let sel = null
            sel = event.target
            sel.classList.add('done')
        }
    }
})

</script>

<style lang="scss">
.listing {
    width: max-content;

    .done {
        text-decoration: line-through;
    }
}
</style>