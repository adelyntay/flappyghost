const display = document.querySelector(".display");
const ghost = document.getElementById("ghost");
const start = document.getElementById("start");
const scoreValue = document.getElementById("score");
const gameOver = document.getElementById("gameOver");

let score = 0;
let stopGame = false 

let ghostBottom = 500
let ghostLeft = 300
let gravity = 2


function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
    
    if(ghostBottom === 0 || ghostBottom === 520){
        gameEnd();
    }   
}
let timerID = setInterval(startGame, 20)

function generatePillar(){
    let pillarLeft = 800

    let randomHeight= Math.floor(Math.random() * 200) + 150;
    const pillar = document.createElement("div")
    pillar.classList.add("pillar")
    display.appendChild(pillar)
    pillar.style.left = pillarLeft + "px"
    pillar.style.height = randomHeight + "px"
    
    let randomHeightTwo = Math.floor(Math.random() * 200) + 100;
    const pillarTwo = document.createElement("div")
    pillarTwo.classList.add("pillarTwo")
    display.appendChild(pillarTwo)
    pillarTwo.style.left = pillarLeft + "px"
    pillarTwo.style.height = randomHeightTwo + "px"

    function movePillar() {
        pillarLeft -=2
        pillar.style.left = pillarLeft + "px"
        pillarTwo.style.left = pillarLeft + "px"

        if (pillarLeft === -50) {
            display.removeChild(pillar)
        }
        if (pillarLeft === 250) {
            getScore()
        }
        
    }
    setInterval(movePillar, 20)
    setTimeout(generatePillar, 2000)
}
generatePillar()

function getScore() {
    if (!stopGame) {
    score++;
    scoreValue.innerHTML = ("Score :" + score);
    }
}

function fly() {
    ghostBottom += 50
    ghost.style.bottom = ghostBottom + "px"
    console.log(fly)
}
document.addEventListener("click", fly)


function gameEnd() {
    clearInterval(timerID)
    stopGame = true
    document.removeEventListener("click", fly)
    gameOver.innerHTML = ("Game Over");
}
