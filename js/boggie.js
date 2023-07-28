class Boggie {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.boggieSize = {
            w: 100,
            h: 75
        }

        this.boggiePos = {
            left: 0 - this.boggieSize.w,
            top: this.gameSize.h - 550

        }

        this.boggieVel = {
            left: 1
        }

        this.playerBackgroundPos = {
            x: 0,
            y: 0
        }

        this.boggieSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }


        this.init()
    }

    init() {
        this.boggieElement = document.createElement('div')

        this.boggieElement.style.position = "absolute"
        this.boggieElement.style.width = `${this.boggieSize.w}px`
        this.boggieElement.style.height = `${this.boggieSize.h}px`
        this.boggieElement.style.left = `${this.boggiePos.left}px`
        this.boggieElement.style.top = `${this.boggiePos.top}px`

        this.boggieElement.style.backgroundImage = `url(./img/boggie.png)`
        this.boggieElement.style.backgroundSize = `300px 75px`

        this.boggieElement.style.overflow = "hidden"
        this.boggieElement.style.backgroundRepeat = "no-repeat"
        this.boggieElement.style.backgroundPositionX = "0px"


        

        this.gameScreen.appendChild(this.boggieElement)

    }


    move(framesIndex) {
        this.animateSprite(framesIndex)
        this.boggiePos.left += this.boggieVel.left
        this.updatePosition()
    }


    animateSprite(framesIndex) {

        if (framesIndex % this.boggieSprite.frameSpeed == 0) {
            this.playerSprite.currentFrame++
        }
        if (this.boggieSprite.currentFrame >= this.boggieSprite.totalFrames) {
            this.boggieSprite.currentFrame = 0
        }

        this.boggieSprite.backgroundPositionX = -this.boggieSize.w * this.boggieSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.boggieElement.style.backgroundPositionX = `${this.boggieSprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.boggieElement.style.left = `${this.boggiePos.left}px`
        this.boggieElement.style.top = `${this.boggiePos.top}px`
    }



    updatePosition() {
        this.boggieElement.style.left = `${this.boggiePos.left}px`


    }







}