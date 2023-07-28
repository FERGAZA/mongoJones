class Car {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.carSize = {
            w: 100,
            h: 50
        }

        this.carPos = {
            left: this.gameSize.w,
            top: this.gameSize.h - 410

        }

        this.carVel = {
            left: 5
        }

        this.carBackgroundPos = {
            x: 0,
            y: 0
        }

        this.carSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }

        this.init()
    }

    init() {
        this.carElement = document.createElement('div')

        this.carElement.style.position = "absolute"
        this.carElement.style.width = `${this.carSize.w}px`
        this.carElement.style.height = `${this.carSize.h}px`
        this.carElement.style.left = `${this.carPos.left}px`
        this.carElement.style.top = `${this.carPos.top}px`

        this.carElement.style.backgroundImage = `url(./img/taxi.png)`
        this.carElement.style.backgroundSize = `300x 50px`

        this.carElement.style.overflow = "hidden"
        this.carElement.style.backgroundRepeat = "no-repeat"
        this.carElement.style.backgroundPositionX = "0px"


        this.gameScreen.appendChild(this.carElement)

    }

    move(framesIndex) {
        this.animateSprite(framesIndex)
        this.carPos.left -= this.carVel.left
        this.updatePosition()
    }

    updatePosition() {
        this.carElement.style.left = `${this.carPos.left}px`


    }

    animateSprite(framesIndex) {

        if (framesIndex % this.carSprite.frameSpeed == 0) {
            this.carSprite.currentFrame++
        }
        if (this.carSprite.currentFrame >= this.carSprite.totalFrames) {
            this.carSprite.currentFrame = 0
        }

        this.carSprite.backgroundPositionX = -this.carSize.w * this.carSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.carElement.style.backgroundPositionX = `${this.carSprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.carElement.style.left = `${this.carPos.left}px`
        this.carElement.style.top = `${this.carPos.top}px`
    }



    updatePosition() {
        this.carElement.style.left = `${this.carPos.left}px`


    }







}