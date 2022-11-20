<template>
    <div id="todos">
        <ul class="listing">
            <li v-for="stage in list">
                {{ stage.content }}
            </li> 
        </ul>
    </div>
</template>

<script lang="ts">

import { defineComponent, PropType, ref } from "vue"
import ToDo from "../types/todo"

export default defineComponent ({
    name: 'ToDos',
    props: [
        list
    ]
})




</script>