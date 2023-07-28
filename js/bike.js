class Bike {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.bikeSize = {
            w: 145,
            h: 45
        }

        this.bikePos = {
            left: this.gameSize.w,
            top: this.gameSize.h - 295

        }

        this.bikeVel = {
            left:5
        }

        this.bikeBackgroundPos = {
            x: 0,
            y: 0
        }

        this.bikeSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }

        this.init()
    }

    init() {
        this.bikeElement = document.createElement('div')

        this.bikeElement.style.position = "absolute"

        this.bikeElement.style.width = `${this.bikeSize.w}px`
        this.bikeElement.style.height = `${this.bikeSize.h}px`
        this.bikeElement.style.left = `${this.bikePos.left}px`
        this.bikeElement.style.top = `${this.bikePos.top}px`

        this.bikeElement.style.backgroundImage = `url(./img/bikes.png)`
        this.bikeElement.style.backgroundSize = `435x 45px`

        this.bikeElement.style.overflow = "hidden"
        this.bikeElement.style.backgroundRepeat = "no-repeat"
        this.bikeElement.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.bikeElement)

    }

    move(framesIndex) {
        this.animateSprite(framesIndex)
        this.bikePos.left -= this.bikeVel.left
        this.updatePosition()
    }

    animateSprite(framesIndex) {

        if (framesIndex % this.bikeSprite.frameSpeed == 0) {
            this.bikeSprite.currentFrame++
        }
        if (this.bikeSprite.currentFrame >= this.bikeSprite.totalFrames) {
            this.bikeSprite.currentFrame = 0
        }

        this.bikeSprite.backgroundPositionX = -this.bikeSize.w * this.bikeSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.bikeElement.style.backgroundPositionX = `${this.bikeSprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.bikeElement.style.left = `${this.bikePos.left}px`
        this.bikeElement.style.top = `${this.bikePos.top}px`
    }



    updatePosition() {
        this.bikeElement.style.left = `${this.bikePos.left}px`


    }







}