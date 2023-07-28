window.onload = function () {

    const startButton = document.getElementById("startButton")
    const restartButton = document.getElementById("restartButton")
    //const restartButton = document.getElementById("restart-button");


    
    

   

    startButton.addEventListener("click", function () {

       
        const startScreen = document.querySelector(".startScreen")
        const gameScreen = document.querySelector(".game-style")
        const scoreScreen = document.querySelector(".score")
        const title = document.querySelector(".title")
        const mongo = document.querySelector(".mongo")


        startScreen.style.display = "none"
        startScreen.style.display = "none"


        gameScreen.style.display = "block"
        scoreScreen.style.display = "block"
        title.style.display = "none"
        mongo.style.display = "none"

        const audioGame = document.createElement("audio")
        audioGame.setAttribute("id", "sound_game")
        audioGame.loop = true
        audioGame.volume = 0.2
        const audioGameSource = document.createElement("source")
        audioGameSource.setAttribute("src", "./sound/sound_game.mp3")
        audioGameSource.setAttribute("type", "audio/mp3")
        
        
        document.body.appendChild(audioGame)
        audioGame.appendChild(audioGameSource)
        audioGame.play()

        Game.init()
    })


    restartButton.addEventListener("click", function () {

        location.reload()


    })

    restartwinButton.addEventListener("click", function () {

        location.reload()


    })


};