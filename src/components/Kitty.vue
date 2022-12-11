<template>
    <div class = "wrapper">
        <div :id="`${name}`">
            <div class="panel_title">
                {{ title }}
            </div>
            <div class="portrait"
                :style="{backgroundImage: `url('${content}')`}">
                <div id="hearts">
                </div>               
            </div>
            <p class="counter"
                @click="pushHeart">
                AWW:3
            </p>
        </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: "Kitty",
        props: {
            name: String,
            title: String,
            content: String,
            heart: String
        },
        setup(props) {
            let count = 0
            let heartIMG:any = null

            function calcPosition() {
                let randomPositionX = Math.floor(Math.random()*15)
                let randomPositionY = Math.floor(Math.random()*200)
                return {
                    randomPositionX,
                    randomPositionY
                }
            }

            function fireHeart(spot:any, offset:number) {
                let move = null
                let fizpos = spot.getBoundingClientRect().top
                move = - offset + 'px'
                console.log(spot.style.top)
                spot.style.transform = 'translateY('+move+')'
                spot.style.top = fizpos - offset + 'px'
                console.log(move)
                console.log(spot.style.top)
                return spot
            }

            function pushHeart() {
                let gameBox = document.getElementById('hearts')
                let heartPos = gameBox?.getBoundingClientRect().top
                let calc = calcPosition()
                let xpos = calc.randomPositionX*10+10
                let ypos = calc.randomPositionY

                console.log('x: '+xpos)
                console.log('y: '+ypos)

                heartIMG = null
                heartIMG = document.createElement('img')
                heartIMG['src'] = props.heart
                heartIMG.classList.add('heart')
                heartIMG.style.top = heartPos+'px'
                heartIMG.style.left = xpos+'px'
                
                gameBox?.appendChild(heartIMG)
                fireHeart(heartIMG, ypos)
            }

            return {
                count,
                pushHeart
            }
        }
   })    
</script>

<style lang="scss">

.portrait {
    width: 200px;
    height: 200px;
    outline: 1px solid $white;
    background-size: cover;

    #hearts {
        width: 100%;
        height: 100%;
        position: relative;

        .heart {
            position: absolute;
            transition: transform 0.5s;
        }
    }
}
.counter {
    width: 200px;
    font-size: 20px;
    line-height: 26px;
    color: $white;
    text-align: center;
    padding: 8.5px 0;
    background-color: $black;
}

</style>