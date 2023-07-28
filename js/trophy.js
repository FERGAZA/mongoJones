

class Trophy {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.trophyElement =

        this.trophyArray = [{
            id: "js",
            trophyPosLeft: this.gameSize.w - this.gameSize.w + 60,
            trophyPosTop: this.gameSize.h - this.gameSize.h + 45,
            sizeW: 35,
            sizeH: 37,
            image: "./img/js.png",
            price: 150,
            

        },
        {
            id: "html",
            trophyPosLeft: this.gameSize.w - this.gameSize.w + 245,
            trophyPosTop: this.gameSize.h - this.gameSize.h + 45,
            sizeW: 35,
            sizeH: 37,
            image: "./img/html.png",
            price: 225
        },
        {
            id: "react",
            trophyPosLeft: this.gameSize.w - this.gameSize.w + 432,
            trophyPosTop: this.gameSize.h - this.gameSize.h + 45,
            sizeW: 35,
            sizeH: 37,
            image: "./img/react.png",
            price: 230

         },
        {
            id: "mongo",
            trophyPosLeft: this.gameSize.w - this.gameSize.w + 635,
            trophyPosTop: this.gameSize.h - this.gameSize.h + 45,
            sizeW: 35,
            sizeH: 37,
            image: "./img/mongo.png",
            price: 500

        },
        
        {
            id: "css",
            trophyPosLeft: this.gameSize.w - this.gameSize.w + 820,
            trophyPosTop: this.gameSize.h - this.gameSize.h + 45,
            sizeW: 35,
            sizeH: 37,
            image: "./img/css.png",
            price: 1000,

        },]

    this.init()

    }

    init() {

        this.trophyArray.forEach((eachTrophy) => {

        this.trophyElement = document.createElement('div')
        this.trophyElement = document.createElement('img')
        this.trophyElement.src = `${eachTrophy.image}`
        this.trophyElement.id = `${eachTrophy.id}`

        this.trophyElement.style.position = "absolute"
        this.trophyElement.style.width = `${eachTrophy.sizeW}px`
        this.trophyElement.style.height = `${eachTrophy.sizeH}px`
        this.trophyElement.style.left = `${eachTrophy.trophyPosLeft}px`
        this.trophyElement.style.top = `${eachTrophy.trophyPosTop}px`
        this.trophyElement.style.color = "white"
        this.trophyElement.style.textAlign = "center"

        this.gameScreen.appendChild(this.trophyElement)
         
        })
       

    }
}