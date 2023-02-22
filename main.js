const display = document.getElementById("display");
const ghost = document.getElementById("ghost");
const pillarOne = document.getElementById("pillarOne");
const holeOne = document.getElementById("holeOne");
const pillarTwo = document.getElementById("pillarTwo");
const holeTwo = document.getElementById("holeTwo");
const start = document.getElementById("start");
const scoreValue = document.getElementById("score");
const gameOver = document.getElementById("gameOver");

let score = 0;

let ghostBottom = 500
let ghostLeft = 300
let gravity = 2

let pillarOneLeft = 600
let pillarTwoLeft = 800
let holeOneLeft = 600
let holeTwoLeft = 800


function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
    
    if(ghostBottom === 0 || ghostBottom === 520){
        gameEnd();
    }   
}
let timerID = setInterval(startGame, 20)

function movePillars() {
    pillarOneLeft -=2
    pillarTwoLeft -=2
    holeOneLeft -=2
    holeTwoLeft -=2
    pillarOne.style.left = pillarOneLeft + "px"
    pillarTwo.style.left = pillarTwoLeft + "px"
    holeOne.style.left = holeOneLeft + "px"
    holeTwo.style.left = holeTwoLeft + "px"

    if(pillarOneLeft === 250 && holeOneLeft === 250 || pillarTwoLeft === 250 && holeTwoLeft === 250){
        getScore();
    }

}
let pillarID = setInterval(movePillars, 20)

function getScore() {
    score++;
    scoreValue.innerHTML = ("Score :" + score);
}

function fly() {
    ghostBottom += 50
    ghost.style.bottom = ghostBottom + "px"
    console.log(fly)
}
document.addEventListener("click", fly)


function gameEnd() {
    clearInterval(timerID)
    document.removeEventListener("click", fly)
    gameOver.innerHTML = ("Game Over");
}

/*pillars createElement

let pillarsLeft = 800
const pillars = document.createElement("div");
display.appendChild(pillars);
pillars.innerHTML = ("blue");
pillars.style.left = pillarsLeft + "px";
pillars.classList.add("pillars");*/