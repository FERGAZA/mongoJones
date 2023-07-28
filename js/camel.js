class Camel {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.camelSize = {
            w: 125,
            h: 50
        }

        this.camelPos = {
            left: 0 - this.camelSize.w,
            top: this.gameSize.h - 690

        }

        this.camelVel = {
            left: 2.5
        }

        this.camelBackgroundPos = {
            x: 0,
            y: 0
        }

        this.camelSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }

        this.init()
    }

    init() {
        this.camelElement = document.createElement('div')

        this.camelElement.style.position = "absolute"
        this.camelElement.style.width = `${this.camelSize.w}px`
        this.camelElement.style.height = `${this.camelSize.h}px`
        this.camelElement.style.left = `${this.camelPos.left}px`
        this.camelElement.style.top = `${this.camelPos.top}px`

        this.camelElement.style.backgroundImage = `url(./img/camel.png)`
        this.camelElement.style.backgroundSize = `375px 50px`

        this.camelElement.style.overflow = "hidden"
        this.camelElement.style.backgroundRepeat = "no-repeat"
        this.camelElement.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.camelElement)

    }

    move(framesIndex) {
        this.animateSprite(framesIndex)
        this.camelPos.left += this.camelVel.left
        this.updatePosition()
    }

    animateSprite(framesIndex) {

        if (framesIndex % this.camelSprite.frameSpeed == 0) {
            this.playerSprite.currentFrame++
        }
        if (this.camelSprite.currentFrame >= this.camelSprite.totalFrames) {
            this.camelSprite.currentFrame = 0
        }

        this.camelSprite.backgroundPositionX = -this.camelSize.w * this.camelSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.camelElement.style.backgroundPositionX = `${this.camelSprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.camelElement.style.left = `${this.camelPos.left}px`
        this.camelElement.style.top = `${this.camelPos.top}px`
    }



    updatePosition() {
        this.camelElement.style.left = `${this.camelPos.left}px`


    }







}