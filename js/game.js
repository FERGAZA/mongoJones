const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: 900,
    h: 800
  },
  framesCounter: 0,
  
  score: 0,
  jones: undefined,
  trophys: undefined,
  bonus: undefined,
  trucks: [],
  bikes: [],
  cars: [],
  boggies: [],
  tanks: [],
  camels: [],

  truckDensity: 300,
  bikeDensity: 150,
  carDensity: 100,
  boggieDensity: 350,
  tankDensity: 175,
  camelDensity: 200,
  

  

  keys: {
    LEFT: { arrow: 'ArrowLeft', state: false },
    RIGHT: { arrow: 'ArrowRight', state: false },
    TOP: { arrow: 'ArrowUp', state: false },
    DOWN: { arrow: 'ArrowDown', state: false }
    
  },

  init() {
    this.setDimensions()



    
    //this.setEventListeners()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },


  

  setEventListeners() {

    document.onkeyup = event => {
      switch (event.code) {
        case this.keys.LEFT.arrow:
          this.keys.LEFT.state = false
          break;
        case this.keys.RIGHT.arrow:
          this.keys.RIGHT.state = false
          break;
        case this.keys.TOP.arrow:
          this.keys.TOP.state = false
          break;
        case this.keys.DOWN.arrow:
          this.keys.DOWN.state = false
          break;
      }
    }

    document.onkeydown = event => {
      switch (event.code) {
        case this.keys.LEFT.arrow:
          this.keys.LEFT.state = true
          break;
        case this.keys.RIGHT.arrow:
          this.keys.RIGHT.state = true
          break;
        case this.keys.TOP.arrow:
          this.keys.TOP.state = true
          break;
        case this.keys.DOWN.arrow:
          this.keys.DOWN.state = true
          break;
      }
    }
      
    
  },

  start() {
    this.createElements()
    this.gameLoop()
  },

  createElements() {
    this.jones = new Jones(this.gameScreen, this.gameSize, this.keys, this.jonesLife)
    this.trophys = new Trophy(this.gameScreen, this.gameSize)
    this.bonus = new Bonus(this.gameScreen, this.gameSize)
    this.trucks = []
    this.bikes = []
    this.cars = []
    this.boggies = []
    this.tanks = []
    this.camels = []
  },

  gameLoop() {
    this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

    const hasJagger = this.bonus.hasPickedUpJagger()

    if (this.keys.LEFT.state) {
      if(hasJagger){
        this.jones.moveRight(this.framesCounter)
      }else{
        this.jones.moveLeft(this.framesCounter)
      }
    }

    if (this.keys.RIGHT.state) {
      if (hasJagger) {
        this.jones.moveLeft(this.framesCounter)
      }else{
        this.jones.moveRight(this.framesCounter)
      }
    }
    if (this.keys.TOP.state) {
      if (hasJagger){
        this.jones.moveDown(this.framesCounter)
      }else{
        this.jones.moveTop(this.framesCounter)
      }
    }
    if (this.keys.DOWN.state) {
      if(hasJagger){
        this.jones.moveTop(this.framesCounter)
      }else{
        this.jones.moveDown(this.framesCounter)
      }
    }

    if (this.framesCounter > 200) {
      this.setEventListeners()
      
    }

    

    this.drawAll()
    this.clearAll()
    this.generateTruck()
    this.generateBike()
    this.generateCar()
    this.generateBoggie()
    this.generateTank()
    this.generateCamel()

    this.isCollision()
    

    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.jones.move()
    this.trucks.forEach(eachTruck => eachTruck.move())
    this.bikes.forEach(eachBike => eachBike.move())
    this.cars.forEach(eachCar => eachCar.move())
    this.boggies.forEach(eachBoggie => eachBoggie.move())
    this.tanks.forEach(eachTank => eachTank.move())
    this.camels.forEach(eachCamel => eachCamel.move())
  },

  generateTruck() {
    if (this.framesCounter % this.truckDensity === 0) {
      this.trucks.push(new Truck(this.gameScreen, this.gameSize))
    }
  },

  generateBike() {
    if (this.framesCounter % this.bikeDensity === 0) {
      this.bikes.push(new Bike(this.gameScreen, this.gameSize))
    }
  },

  generateCar() {
    if (this.framesCounter % this.carDensity === 0) {
      this.cars.push(new Car(this.gameScreen, this.gameSize))
    }
  },

  generateBoggie() {
    if (this.framesCounter % this.boggieDensity === 0) {
      this.boggies.push(new Boggie(this.gameScreen, this.gameSize))
    }
  },

  generateTank() {
    if (this.framesCounter % this.tankDensity === 0) {
      this.tanks.push(new Tank(this.gameScreen, this.gameSize))
    }
  },

  generateCamel() {
    if (this.framesCounter % this.camelDensity === 0) {
      this.camels.push(new Camel(this.gameScreen, this.gameSize))
    }
  },




  clearAll() {
    
    //Limpiamos array trucks
    this.trucks.forEach((eachTruck, idx) => {
      if (eachTruck.truckPos.left + eachTruck.truckSize.w <= 0) {
        eachTruck.truckElement.remove()
        this.trucks.splice(idx, 1)
      }
    })
    //Limpiamos array bikes
    this.bikes.forEach((eachBike, idx) => {
      if (eachBike.bikePos.left + eachBike.bikeSize.w <= 0) {
        eachBike.bikeElement.remove()
        this.bikes.splice(idx, 1)
      }
    })

    //Limpiamos array cars
    this.cars.forEach((eachCar, idx) => {
      if (eachCar.carPos.left + eachCar.carSize.w <= 0) {
        eachCar.carElement.remove()
        this.cars.splice(idx, 1)
      }
    })

    //Limpiamos array boggies
    this.boggies.forEach((eachBoggie, idx) => {
      if (eachBoggie.boggiePos.left >= this.gameSize.w + eachBoggie.boggieSize.w) {
        eachBoggie.boggieElement.remove()
        this.boggies.splice(idx, 1)
      }
    })

    //Limpiamos array tanks
    this.tanks.forEach((eachTank, idx) => {
      if (eachTank.tankPos.left >= this.gameSize.w + eachTank.tankSize.w) {
        eachTank.tankElement.remove()
        this.tanks.splice(idx, 1)
      }
    })

    //Limpiamos array camels
    this.camels.forEach((eachCamel, idx) => {
      if (eachCamel.camelPos.left >= this.gameSize.w + eachCamel.camelSize.w) {
        eachCamel.camelElement.remove()
        this.camels.splice(idx, 1)
      }
    })
  },


  UpdateScore(price) {

    this.score += price
    document.getElementById("score").innerText = this.score
    

  },

  startPosition() {
    this.jones.jonesPos.top = this.gameSize.h - this.jones.jonesSize.h
    this.jones.jonesPos.left = this.gameSize.w / 2 - this.jones.jonesSize.h / 2
  },


  removeTrophy(item) {

    const img = document.getElementById(item.id)
    img.remove()
    this.startPosition()

  },

  removeBonus(bonus) {
    
    const img = document.getElementById(bonus)
    
    img.remove()
    
  },


  loseLife() {
    
    const lifes = document.querySelector('#lifes li')
    

    if (this.jones.jonesLifes.life.length > 0) {
      lifes.remove()
      this.jones.jonesLifes.life.pop()
    
      
      
      this.startPosition()
    } else {

    
      this.gameOver()
    }
      
  },



  isCollision() {



    // Colisiones Enemigo Truck
    
    
    for (let i = 0; i < this.trucks.length; i++) {

      if
        (this.jones.jonesPos.left <= this.trucks[i].truckPos.left + this.trucks[i].truckSize.w &&
        this.jones.jonesPos.left + this.jones.jonesSize.w >= this.trucks[i].truckPos.left &&
        this.jones.jonesPos.top <= this.trucks[i].truckPos.top + this.trucks[i].truckSize.h &&
        this.jones.jonesPos.top + this.jones.jonesSize.h >= this.trucks[i].truckPos.top) {

        const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/impact.mp3"; audioPrice.play()

        this.loseLife()

      }

    }
  //   // Colisiones muerte Bikes

    for (let i = 0; i < this.bikes.length; i++) {
      if
        (
        this.jones.jonesPos.left <= this.bikes[i].bikePos.left + this.bikes[i].bikeSize.w &&
        this.jones.jonesPos.left + this.jones.jonesSize.w >= this.bikes[i].bikePos.left &&
        this.jones.jonesPos.top <= this.bikes[i].bikePos.top + this.bikes[i].bikeSize.h &&
        this.jones.jonesPos.top + this.jones.jonesSize.h >= this.bikes[i].bikePos.top
      ) {

        const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/impact.mp3"; audioPrice.play()

        this.loseLife()
      }


    }

  //   // Colisiones muerte Coches

    for (let i = 0; i < this.cars.length; i++) {
      if
        (
        this.jones.jonesPos.left <= this.cars[i].carPos.left + this.cars[i].carSize.w &&
        this.jones.jonesPos.left + this.jones.jonesSize.w >= this.cars[i].carPos.left &&
        this.jones.jonesPos.top <= this.cars[i].carPos.top + this.cars[i].carSize.h &&
        this.jones.jonesPos.top + this.jones.jonesSize.h >= this.cars[i].carPos.top
      ) {

        const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/impact.mp3"; audioPrice.play()
        
        this.loseLife()
      }
    }

  //     // Colisiones muete Boggies

      for (let i = 0; i < this.boggies.length; i++) {
        if
          (
          this.jones.jonesPos.left <= this.boggies[i].boggiePos.left + this.boggies[i].boggieSize.w &&
          this.jones.jonesPos.left + this.jones.jonesSize.w >= this.boggies[i].boggiePos.left &&
          this.jones.jonesPos.top <= this.boggies[i].boggiePos.top + this.boggies[i].boggieSize.h &&
          this.jones.jonesPos.top + this.jones.jonesSize.h >= this.boggies[i].boggiePos.top
        ) {

          const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/impact.mp3"; audioPrice.play()
        
          this.loseLife()
        }


      }

  //     // Colisiones muerte Tanques

      for (let i = 0; i < this.tanks.length; i++) {
        if
          (
          this.jones.jonesPos.left <= this.tanks[i].tankPos.left + this.tanks[i].tankSize.w &&
          this.jones.jonesPos.left + this.jones.jonesSize.w >= this.tanks[i].tankPos.left &&
          this.jones.jonesPos.top <= this.tanks[i].tankPos.top + this.tanks[i].tankSize.h &&
          this.jones.jonesPos.top + this.jones.jonesSize.h >= this.tanks[i].tankPos.top
        ) {

          const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/impact.mp3"; audioPrice.play()
          this.loseLife()
          }
      }

  //       // Colisiones muerte Camellos


        for (let i = 0; i < this.camels.length; i++) {
          if
            (
            this.jones.jonesPos.left <= this.camels[i].camelPos.left + this.camels[i].camelSize.w &&
            this.jones.jonesPos.left + this.jones.jonesSize.w >= this.camels[i].camelPos.left &&
            this.jones.jonesPos.top <= this.camels[i].camelPos.top + this.camels[i].camelSize.h &&
            this.jones.jonesPos.top + this.jones.jonesSize.h >= this.camels[i].camelPos.top
          ) {
            const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/impact.mp3"; audioPrice.play()
            this.loseLife()
          }
        } 

        //   // Colisiones para ganar trofeos

        for (i = 0; i < this.trophys.trophyArray.length; i++) {

    

          if (this.jones.jonesPos.left <= this.trophys.trophyArray[i].trophyPosLeft + this.trophys.trophyArray[i].sizeW &&
            this.jones.jonesPos.left + this.trophys.trophyArray[i].sizeW >= this.trophys.trophyArray[i].trophyPosLeft &&
            this.jones.jonesPos.top <= this.trophys.trophyArray[i].trophyPosTop + this.trophys.trophyArray[i].sizeH &&
            this.jones.jonesPos.top + this.jones.jonesSize.h >= this.trophys.trophyArray[i].trophyPosTop) {
        

            const audioPrice = document.createElement("audio"); audioPrice.src = "./sound/price.mp3"; audioPrice.play()
            
            this.trophys.trophyArray[i]

            this.UpdateScore(this.trophys.trophyArray[i].price)
            this.removeTrophy(this.trophys.trophyArray[i])
            this.trophys.trophyArray.splice(i, 1)

           if (this.trophys.trophyArray.length < 1) {
              this.winScreen()
            } 

            

          }
        }

        //Colisiones para Bonus
    
            for (i = 0; i < this.bonus.bonusArray.length; i++) {

        

              if (this.jones.jonesPos.left <= this.bonus.bonusArray[i].bonusPosLeft + this.bonus.bonusArray[i].sizeW &&
                this.jones.jonesPos.left + this.bonus.bonusArray[i].sizeW >= this.bonus.bonusArray[i].bonusPosLeft &&
                this.jones.jonesPos.top <= this.bonus.bonusArray[i].bonusPosTop + this.bonus.bonusArray[i].sizeH &&
                this.jones.jonesPos.top + this.jones.jonesSize.h >= this.bonus.bonusArray[i].bonusPosTop) {
                this.bonus.bonusArray[i]
            
                // if (this.bonus.bonusArray[i].id === 'jagger') {

                //   const jonesW = document.getElementById(this.jonesId)
                //   const jonesH = document.getElementById(this.jonesId)


                //   jonesW.style.width = "60px"
                //   jonesH.style.height = "60px"
            
              
                // }

                const gameBonusAudio = document.createElement("audio"); gameBonusAudio.src = "./sound/eating.mp3"; gameBonusAudio.play()

                this.UpdateScore(this.bonus.bonusArray[i].price)
                this.removeBonus(this.bonus.bonusArray[i].id)
                this.bonus.bonusArray.splice(i, 1)
              
            
              }
            }
      
  },
   
  winScreen() {
    
    document.body.querySelector("#sound_game").pause()

    const gameOverAudio = document.createElement("audio"); gameOverAudio.src = "./sound/victory.mp3"; gameOverAudio.play()


    const gameOverScreen = document.querySelector('#winScreen')

    document.querySelector(".score").style.display = "none"

    gameOverScreen.style.display = "block"

    this.startPosition()

  },

  gameOver() {

    document.body.querySelector("#sound_game").pause()

   const gameOverAudio = document.createElement("audio"); gameOverAudio.src = "./sound/jakie_laugh.mp3"; gameOverAudio.play()

    
   const gameOverScreen = document.querySelector('#gameOverScreen')

    document.querySelector(".score").style.display = "none"
      
   gameOverScreen.style.display = "block"
      
   this.startPosition()

 }
}
  