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
import { ToDo } from "../types/todo"

export default defineComponent ({
    name: 'ToDos',
    props: {
        name: String,
        title: String,
        list: Object as PropType<ToDo>
    },
    setup(props, context) {
        const count = ref(0)
        const total = ref(props.list.length)

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