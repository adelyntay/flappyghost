const display = document.getElementById("display");
const ghost = document.getElementById("ghost");
const pillars = document.getElementById("pillars");
const hole = document.getElementById("hole");
const start = document.getElementById("start");
const scoreValue = document.getElementById("score");
const gameOver = document.getElementById("gameOver");

let score = 0;

let ghostBottom = 500
let ghostLeft = 500
let gravity = 2


function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
    
    if(ghostBottom === 150 || ghostBottom === 680){
        gameEnd();
    }
}
let timerID = setInterval(startGame, 20)

function movePillars() {
    hole.addEventListener("animationiteration", () => {
        let random = -((Math.random()*300)+250);
        hole.style.top = random + "px";
        
        score ++
        scoreValue.innerHTML = ("Score :" + score);
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
    pillars.style.animation = "paused";
    hole.style.animation = "paused";
    gameOver.innerHTML = ("Game Over");
}