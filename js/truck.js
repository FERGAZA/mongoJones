class Truck {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
    
        this.truckSize ={
            w: 196,
            h: 60
        }

        this.truckPos ={
            left: this.gameSize.w,
            top: this.gameSize.h - 155

        }

        this.truckVel = {
            left: 2
        }

        this.truckBackgroundPos = {
            x: 0,
            y: 0
        }

        this.truckSprite = {
            backgroundPositionX: 0,
            totalFrames: 3,
            currentFrame: 1,
            frameSpeed: 4
        }


        this.init()
    }   

    init() {
        this.truckElement = document.createElement('div')

        this.truckElement.style.position = "absolute"
        this.truckElement.style.width = `${this.truckSize.w}px`
        this.truckElement.style.height = `${this.truckSize.h}px`
        this.truckElement.style.left = `${this.truckPos.left}px`
        this.truckElement.style.top = `${this.truckPos.top}px`

        this.truckElement.style.backgroundImage = `url(./img/truck.png)`
        this.truckElement.style.backgroundSize = `590x 60px`

        this.truckElement.style.overflow = "hidden"
        this.truckElement.style.backgroundRepeat = "no-repeat"
        this.truckElement.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.truckElement)

    }

    move(framesIndex) {
        this.animateSprite(framesIndex)
        this.truckPos.left -= this.truckVel.left
        this.updatePosition()
    }
    
    animateSprite(framesIndex) {

        if (framesIndex % this.truckSprite.frameSpeed == 0) {
            this.truckSprite.currentFrame++
        }
        if (this.truckSprite.currentFrame >= this.truckSprite.totalFrames) {
            this.truckSprite.currentFrame = 0
        }

        this.truckSprite.backgroundPositionX = -this.truckSize.w * this.truckSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.truckElement.style.backgroundPositionX = `${this.truckSprite.backgroundPositionX}px`
    }

    updatePosition() {
        this.truckElement.style.left = `${this.truckPos.left}px`
        this.truckElement.style.top = `${this.truckPos.top}px`
    }



    updatePosition() {
        this.truckElement.style.left = `${this.truckPos.left}px`


    }






}