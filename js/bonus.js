

class Bonus {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.bonusElement =

        this.bonusArray = [{
            id: "heart",
            bonusPosTop: Math.trunc(Math.random() * (650 - 150) + 150),
            bonusPosLeft: Math.trunc(Math.random() * (850 - 0) + 0),
            sizeW: 30,
            sizeH: 40,
            image: "./img/heart.png",
            price: 150,
            

        },
        {
            id: "jagger",
            bonusPosTop: Math.trunc(Math.random() * (650 - 150) + 150),
            bonusPosLeft: Math.trunc(Math.random() * (850 - 0) + 0),
            sizeW: 25,
            sizeH: 40,
            image: "./img/jagger.png",
            price: 225
        },
        {
            id: "hamburger",
            bonusPosTop: Math.trunc(Math.random() * (650 - 150) + 150),
            bonusPosLeft: Math.trunc(Math.random() * (850 - 0) + 0),
            sizeW: 35,
            sizeH: 35,
            image: "./img/hamburger.png",
            price: 230

        }
        ]

    this.init()

    }

    init() {

        
        

        this.bonusArray.forEach((eachbonus) => {

           // let posRandomTop = Math.trunc(Math.random() * ( 650 - 150) + 150)
           // let posRandomleft = Math.trunc(Math.random() * (850 - 0) + 0)

        this.bonusElement = document.createElement('div')
        this.bonusElement = document.createElement('img')
        this.bonusElement.src = `${eachbonus.image}`
        this.bonusElement.id = `${eachbonus.id}`

        this.bonusElement.style.position = "absolute"
        this.bonusElement.style.width = `${eachbonus.sizeW}px`
        this.bonusElement.style.height = `${eachbonus.sizeH}px`
        this.bonusElement.style.left = `${eachbonus.bonusPosLeft}px`
        this.bonusElement.style.top = `${eachbonus.bonusPosTop}px`
        this.bonusElement.style.color = "white"
        this.bonusElement.style.textAlign = "center"

        this.gameScreen.appendChild(this.bonusElement)
         
        })
       

    }
    
    hasPickedUpJagger(){
        return !this.bonusArray.find(bonus => bonus.id === "jagger")
    }

    
}