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


function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
    
    if(ghostBottom === 0 || ghostBottom === 550){
        gameEnd();
    }   
}
let timerID = setInterval(startGame, 20)

function movePillars() {
    holeOne.addEventListener("animationiteration", () => {
        let random = ((Math.random()*200)+50);
        holeOne.style.top = random + "px";

    holeTwo.addEventListener("animationiteration", () => {
        let random = ((Math.random()*400)+50);
        holeTwo.style.top = random + "px";
        
        score ++
        scoreValue.innerHTML = ("Score :" + score);
    });

    });

}
movePillars()

function fly() {
    ghostBottom += 50
    ghost.style.bottom = ghostBottom + "px"
    console.log(fly)
}
document.addEventListener("click", fly)


function gameEnd() {
    clearInterval(timerID)
    document.removeEventListener("click", fly)
    pillarOne.style.animation = "paused";
    holeOne.style.animation = "paused";
    pillarTwo.style.animation = "paused";
    holeTwo.style.animation = "paused";
    gameOver.innerHTML = ("Game Over");
}