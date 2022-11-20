<template>
  <div class="main">
    <div class="left">
      <div class="top">
        <Panel
          :type="shoppingList.type" 
          :title="shoppingList.title" 
          :content="shoppingList.content" />
      </div>
      <div class="bottom">
      </div>      
    </div>
    <div class="right">
      <div class="top">
      </div>
      <div class="bottom">
        <Panel 
          :type="readingList.type" 
          :title="readingList.title" 
          :content="readingList.content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
import Panel from "@/components/Panel.vue"

const shoppingList = {
  type: "list",
  title: "SHOPPING LIST",
  content: [
    {
        "content": "MILK",
        "done": false
    },
    {
        "content": "BREAD",
        "done": false
    },
    {
        "content": "HAM",
        "done": false
    },
    {
        "content": "CHEESE",
        "done": false
    },
    {
        "content": "WATER",
        "done": false
    }
  ]
}
const readingList = {
    type: "list",
    title: "BOOKS TO READ",
    content: [
    {
        "content": "SAPIENS BY YUVAL NOAH HARARI",
        "done": false
    },
    {
        "content": "THE THEORY OF EVERYTHING BY STEPHEN HAWKING",
        "done": false
    },
    {
        "content": "A WILD SHEEP CHASE BY HARUKI MURAKAMI",
        "done": false
    },
    {
        "content": "CLEAN CODE BY ROBERT MARTIN",
        "done": false
    }
  ]
}

export default defineComponent({
  name: "App",
  components: {
    Panel
  },
  data () {
    return {
      shoppingList: shoppingList,
      readingList: readingList
    }
  }
})

</script>

<style scoped lang="scss">
.main {
  background: $dark;
  width: 100%;
  height: 100vh;
  font-size: 20px; 
  font-family: sans-serif;
  text-transform: uppercase;
  position: relative;

  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 0;
  }
}
</style>
