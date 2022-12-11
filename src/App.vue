<template>
  <div class="main">
    <div class="left">
      <div class="top">
        <Panel
          name="shopping"
          :type="shoppingList.type" 
          :title="shoppingList.title" 
          :content="shoppingList.content" />
      </div>
      <div class="bottom">
        <Panel
          name="text"
          :type="textBlock.type"
          :title="textBlock.title"
          :content="textBlock.content" />
      </div>      
    </div>
    <div class="right">
      <div class="top">
        <Panel
          name="Kitty"
          :type="kittyGame.type"
          :title="kittyGame.title"
          :content="kittyGame.content"
          :heart="kittyGame.heart" />
      </div>
      <div class="bottom">
        <Panel
          name="reading"
          :type="readingList.type" 
          :title="readingList.title" 
          :content="readingList.content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
/* Все секции (панели) обрабатываются одним компонентом с анимацией появления/исчезновения */
import Panel from "@/components/Panel.vue"

/* Формируем массив данных, имитируем backend 
  Первую и четвёртую панель объединяем в один тип, "список", условно todo, и используем одни интерфейс
  остальные е группируются, интерфейсы для них избыточны */
  
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
const kittyGame = {
  type: "game",
  title: "KITTY",
  content: "src/kitty.png",
  heart: "src/heart-svg.svg"
}
const textBlock = {
  type: "text",
  title: "MAMAAA OOOO",
  content: "<p>THIS ONE IS NOT A LIST - JUST SOME PLAIN OL’ TEXT.</p>"+"<p>IS THIS THE REAL LIFE</br>IS THIS JUST FANTASY</br>CAUGHT IN A LANDSIDE</br>NO ESCAPE FROM REALITY</p>"+"<p>BY THE WAY IF THERE WAS A REALLY LONG LINE, I’M PRETTY SURE AT SOME POINT IT WOULD WRAP TO THE NEXT LINE. JUST LIKE THE OTHER ELEMENTS ON THIS PAGE, THIS ONE HAS A PRE-DEFINED MAX-WIDTH</p>" 
}

export default defineComponent({
  name: "App",
  components: {
    Panel
  },
  /* Титульная страница на option api, для composition мало функционала */
  data () {
    return {
      shoppingList: shoppingList,
      readingList: readingList,
      kittyGame: kittyGame,
      textBlock: textBlock
    }
  }
})

</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Lucida Sans', sans-serif ;
}
.main {
  background: $dark;
  width: 100%;
  height: 100vh;
  padding: 12.3vh 0;
  font-size: 20px; 
  font-family: sans-serif;
  text-transform: uppercase;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  .arrow {
    width: 45px;
    height: 45px;

    svg {
      margin: 11px;
    }
  }

  .top {
    width: 100%;
    position: relative;
  }

  .bottom {
    width: 100%;
    position: relative;
    top: 75vh;
  }

  .left {
    width: 50%;
    position: absolute;
    left: 0;

    .box {
      left: 0;

      &.closed {
        transform: translateX(-100%);

        .arrow {
          svg {
            transform: scaleX(-1);
          }

          .title {
            font-size: 20px;
            writing-mode: sideways-rl;
            font-size: 20px;
            writing-mode: sideways-rl;
            display: inline-block;
            background-color: #1E1E1E;
            border: 1px solid #929292;
            border-top: 1px solid transparent;
            padding: 10px 0;
          }
        }
      }
    }
    .arrow {
      left: 100%;
      svg {
        transform: scaleX(1);
      }
    }
  }
  .right {
    width: 50%;
    position: absolute;
    right: 0;

    .box {
      right: 0;

      &.closed {
        transform: translateX(100%);
        
        .arrow {
          svg {
            transform: scaleX(1);
          }
          .title {
            font-size: 20px;
            writing-mode: sideways-rl;
            display: inline-block;
            background-color: #1E1E1E;
            border: 1px solid #929292;
            border-top: 1px solid transparent;
            padding: 10px 0;
          }
        }
      }
    }
    .arrow {
      right: 100%;
      svg {
        transform: scaleX(-1);
      }
    }
  }  
  .panel_title {         
      width: max-content;   
      font-weight: 400;
      font-size: 30px;
      line-height: 39px;
      margin: 0 0 4.7vh;
  }
}
</style>
