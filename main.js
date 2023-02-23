const display = document.querySelector(".display")
const ghost = document.querySelector(".ghost")
const scoreValue = document.getElementById("score")
const gameOver = document.getElementById("gameOver")

let ghostBottom = 200
let ghostLeft = 220
let gravity = 2
let gap = 430
let score = 0
let stopGame = false 

function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
}
let timerID = setInterval(startGame, 20)

function fly() {
    ghostBottom += 50
    ghost.style.bottom = ghostBottom + "px"
}
document.addEventListener("click", fly)

function generatePillar(){
    let pillarLeft = 700
    let randomHeight = Math.floor(Math.random() * 60)
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
        if (
            pillarLeft > 200 && pillarLeft < 280 && ghostLeft === 220 &&
            (ghostBottom < pillarBottom + 153 || ghostBottom > ghostBottom + gap -200) ||
            ghostBottom === 0
            ) {
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