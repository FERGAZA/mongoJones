class Jones {

  constructor(gameScreen, gameSize) {

    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.jonesSize = {
      w: 40,
      h: 60
    }
    this.jonesId = "jones"

    this.jonesPos = {
      left: gameSize.w / 2 - this.jonesSize.h / 2,
      top: gameSize.h - this.jonesSize.h
    }

    this.jonesVel = {
      left: 5,
      top: 5
    }

    this.jonesLifes = {
      life: [1, 2, 3]
    }

    this.jonesBackgroundPos = {
      x: 0,
      y: 0
    }

    this.jonesSprite = {
      backgroundPositionX: 98,
      backgroundPositionY: 60,
      totalFrames: 3,
      currentFrame: 1,
      frameSpeed: 1
    }

    this.init()

  }

  init() {

    this.jonesElement = document.createElement('div')

    this.jonesElement.style.position = "absolute"
    this.jonesElement.style.width = `${this.jonesSize.w}px`
    this.jonesElement.style.height = `${this.jonesSize.h}px`
    this.jonesElement.style.left = `${this.jonesPos.left}px`
    this.jonesElement.style.top = `${this.jonesPos.top}px`
    this.jonesElement.id = `${this.jonesId}`


    this.jonesElement.style.backgroundImage = `url(./img/jones.png)`
    this.jonesElement.style.backgroundSize = `240px 120px`

    this.jonesElement.style.overflow = "hidden"
    this.jonesElement.style.backgroundRepeat = "no-repeat"
    this.jonesElement.style.backgroundPositionX = "0px"
    this.jonesElement.style.backgroundPositionY = "-60px"




    this.gameScreen.appendChild(this.jonesElement)
  }


  move() {
    //this.animateSprite(framesCounter)
    this.updatePosition()
  }
  
  animateSpriteLeft(framesCounter) {

    this.jonesElement.style.backgroundPositionY = "-60px"


    if (framesCounter % this.jonesSprite.frameSpeed == 0) {
      this.jonesSprite.currentFrame++
    }
    if (this.jonesSprite.currentFrame >= this.jonesSprite.totalFrames) {
      this.jonesSprite.currentFrame = 0
    }

    this.jonesSprite.backgroundPositionX = -this.jonesSize.w * this.jonesSprite.currentFrame





    

    this.updateSprite()
  } 


  animateSpriteTop(framesCounter) {

    this.jonesElement.style.backgroundPositionY = "0px"

    this.jonesSprite.jonesBackgroundPosY = 0


    if (framesCounter % this.jonesSprite.frameSpeed == 0) {
      this.jonesSprite.currentFrame++
    }
    if (this.jonesSprite.currentFrame >= this.jonesSprite.totalFrames) {
      this.jonesSprite.currentFrame = 0
    }

    this.jonesSprite.backgroundPositionX = -this.jonesSize.w * this.jonesSprite.currentFrame




    this.updateSprite()
  } 

  animateSpriteRight(framesCounter) {

    this.jonesElement.style.backgroundPositionY = "-60px"

    console.log("right", this.jonesSprite.jonesBackgroundPosY)

    this.jonesSprite.jonesBackgroundPosX = -80


    if (framesCounter % this.jonesSprite.frameSpeed == 0) {
      this.jonesSprite.currentFrame++
    }
    if (this.jonesSprite.currentFrame >= this.jonesSprite.totalFrames) {
      this.jonesSprite.currentFrame = 0
    }

    this.jonesSprite.backgroundPositionX = (-this.jonesSize.w * this.jonesSprite.currentFrame) - 80






    this.updateSprite()
  }

  animateSpriteDown(framesCounter) {

    this.jonesElement.style.backgroundPositionY = "0px"

    if (framesCounter % this.jonesSprite.frameSpeed == 0) {
      this.jonesSprite.currentFrame++
    }
    if (this.jonesSprite.currentFrame >= this.jonesSprite.totalFrames) {
      this.jonesSprite.currentFrame = 0
    }

    this.jonesSprite.backgroundPositionX = (-this.jonesSize.w * this.jonesSprite.currentFrame) - 80
    
    this.updateSprite()
  }
  
  moveLeft(framesCounter) {
   
    this.animateSpriteLeft(framesCounter)

    const steps = document.createElement("audio")
    steps.src = "./sound/steps.mp3"
    steps.volume = 0.2
    steps.play()
  
    if(this.jonesPos.top > 70){
      if (this.jonesPos.left < this.jonesSize.w) {
        this.jonesPos.left = 0
      } else {
        if (this.jonesPos.left > 0) {
          this.jonesPos.left -= this.jonesVel.left
        }
    }
    
    }
  }

  moveRight(framesCounter) {
    

    this.animateSpriteRight(framesCounter)

    const steps = document.createElement("audio")
    steps.src = "./sound/steps.mp3"
    steps.volume = 0.2
    steps.play()

    if (this.jonesPos.top > 70){
      if (this.jonesPos.left > this.gameSize.w - this.jonesSize.w) {
        this.jonesPos.left = this.gameSize.w - this.jonesSize.w
      } else {
        if (this.jonesPos.left < this.gameSize.w - this.jonesSize.w) {
          this.jonesPos.left += this.jonesVel.left
        }
      }
    }
       
  }

  moveTop(framesCounter) {

    // const steps = document.createElement("audio"); steps.src = "./sound/steps.mp3"; steps.play()

    this.animateSpriteTop(framesCounter)

    const steps = document.createElement("audio")
    steps.src = "./sound/steps.mp3"
    steps.volume = 0.2
    steps.play()

    if (this.jonesPos.top > 95) {
      
        this.jonesPos.top -= this.jonesVel.top
      
        } else if (this.jonesPos.left > 30 && this.jonesPos.left < 90 && this.jonesPos.top > 50){
            
            this.jonesPos.top -= this.jonesVel.top

        } else if (this.jonesPos.left > 200 && this.jonesPos.left < 270 && this.jonesPos.top > 50) {

          this.jonesPos.top -= this.jonesVel.top
          
        } else if (this.jonesPos.left > 400 && this.jonesPos.left < 470 && this.jonesPos.top > 50) {

            this.jonesPos.top -= this.jonesVel.top
        }

        else if (this.jonesPos.left > 600 && this.jonesPos.left < 650 && this.jonesPos.top > 50) {

            this.jonesPos.top -= this.jonesVel.top
        }

        else if (this.jonesPos.left > 800 && this.jonesPos.left < 850 && this.jonesPos.top > 50) {

            this.jonesPos.top -= this.jonesVel.top
        }
  }
  moveDown(framesCounter) {
    const steps = document.createElement("audio")
    steps.src = "./sound/steps.mp3"
    steps.volume = 0.2
    steps.play()
    

    this.animateSpriteDown(framesCounter)

      if (this.jonesPos.top < this.gameSize.h - this.jonesSize.h)
        this.jonesPos.top += this.jonesVel.top
    }

  updateSprite() {
    this.jonesElement.style.backgroundPositionX = `${this.jonesSprite.backgroundPositionX}px`

  }

    updatePosition() {
      this.jonesElement.style.left = `${this.jonesPos.left}px`
      this.jonesElement.style.top = `${this.jonesPos.top}px`
    }
  }
