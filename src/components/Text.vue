<template>
    <div :id="`${name}`"
        class="text_block">
        <div class="panel_title">
            {{ title }}
        </div>
        <p v-html="content"
            class="content"></p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Text",
    props: {
        name: String,
        title: String,
        content: String
    },
    setup(props) {

        }
    })

    </script>

<style lang="scss">
.text_block {
    width: 550.12px;
}
</style>