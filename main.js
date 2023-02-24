const display = document.querySelector(".display")
const ghost = document.querySelector(".ghost")
const scoreValue = document.getElementById("score")
const gameOver = document.getElementById("gameOver")
const ground = document.querySelector(".ground")

let ghostBottom = 200
let ghostLeft = 220
let gravity = 2
let flyHeight = 50

let gap = 430
let score = 0
let stopGame = false 

let pillarStartingPosition = 500

function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"

    if(ghostBottom === 0 || ghostBottom === 600){
        gameEnd();
    }
}
let timerID = setInterval(startGame, 20)

function fly() {
    ghostBottom += flyHeight
    ghost.style.bottom = ghostBottom + "px"
}
document.addEventListener("click", fly)

function generatePillar(){
    let pillarLeft = pillarStartingPosition
    let randomHeight = Math.floor(Math.random() * 50)
    let pillarBottom = randomHeight
    const pillar = document.createElement("div")
    const topPillar = document.createElement("div")
    if (!stopGame) {
        pillar.classList.add("pillar")
        topPillar.classList.add("topPillar")
    }
    display.appendChild(pillar)
    display.appendChild(topPillar)
    pillar.style.left = pillarLeft + "px"
    topPillar.style.left = pillarLeft + "px"
    pillar.style.bottom = pillarBottom + "px"
    topPillar.style.bottom = pillarBottom + gap + "px"
    
    function movePillar() {
        pillarLeft -=2
        pillar.style.left = pillarLeft + "px"
        topPillar.style.left = pillarLeft + "px"

        if (pillarLeft === -50) {
            display.removeChild(pillar)
            display.removeChild(topPillar)
        }
        if (pillarLeft === 200) {
            getScore()
        }
        if (pillarLeft > 200 && pillarLeft < 280 && ghostLeft === 220 &&
            (ghostBottom < pillarBottom + 250 || ghostBottom > ghostBottom + gap -200) ||
            (pillarBottom + 340 < ghostBottom && pillarLeft === 260)) {
            gameEnd()
            clearInterval(pillarID)
            }
    }   
    let pillarID = setInterval(movePillar, 20)
    if (!stopGame) setTimeout(generatePillar, 3000)
}
generatePillar()

function getScore() {
    if (!stopGame) {
    score++;
    scoreValue.innerHTML = ("Score :" + score);
    }
}

function gameEnd() {
    clearInterval(timerID)
    stopGame = true
    document.removeEventListener("click", fly)
    gameOver.innerHTML = ("Game Over");
}