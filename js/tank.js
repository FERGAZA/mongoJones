class Tank {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.tankSize = {
            w: 150,
            h: 60
        }

        this.tankPos = {
            left: 0 - this.tankSize.w,
            top: this.gameSize.h - 620

        }

        this.tankVel = {
            left: 2.5
        }

        this.tankBackgroundPos = {
            x: 0,
            y: 0
        }

        this.tankSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }

        this.init()
    }

    init() {
        this.tankElement = document.createElement('div')

        this.tankElement.style.position = "absolute"
        this.tankElement.style.width = `${this.tankSize.w}px`
        this.tankElement.style.height = `${this.tankSize.h}px`
        this.tankElement.style.left = `${this.tankPos.left}px`
        this.tankElement.style.top = `${this.tankPos.top}px`

        this.tankElement.style.backgroundImage = `url(./img/tank.png)`
        this.tankElement.style.backgroundSize = `450px 60px`

        this.tankElement.style.overflow = "hidden"
        this.tankElement.style.backgroundRepeat = "no-repeat"
        this.tankElement.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.tankElement)

    }

    move(framesIndex) {
        this.animateSprite(framesIndex)
        this.tankPos.left += this.tankVel.left
        this.updatePosition()
    }


    animateSprite(framesIndex) {

        if (framesIndex % this.tankSprite.frameSpeed == 0) {
            this.tankSprite.currentFrame++
        }
        if (this.tankSprite.currentFrame >= this.tankSprite.totalFrames) {
            this.tankSprite.currentFrame = 0
        }

        this.tankSprite.backgroundPositionX = -this.tankSize.w * this.tankSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.tankElement.style.backgroundPositionX = `${this.tankSprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.tankElement.style.left = `${this.tankPos.left}px`
        this.tankElement.style.top = `${this.tankPos.top}px`
    }



    updatePosition() {
        this.tankElement.style.left = `${this.tankPos.left}px`


    }
    






}