<template>
    <div :id="`${name}`">
        <div class="title">
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

import { defineComponent, PropType, ref } from "vue"
import { ToDo } from "../types/todo"

//const completed = Object as PropType<ToDo>

export default defineComponent ({
    name: 'ToDos',
    props: {
        name: String,
        title: String,
        list: Object as PropType<ToDo>
    },
    setup(props) {
        const count = ref(0)
        const total = ref(props.list.length)

        console.log()

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
    margin: 4.7vh 0;
    width: max-content;

    .done {
        text-decoration: line-through;
    }
}
.title {         
    width: max-content;   
    font-weight: 400;
    font-size: 30px;
    line-height: 39px;
    margin: 0;
}
</style>