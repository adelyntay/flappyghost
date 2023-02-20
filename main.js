const display = document.getElementById("display");
const ghost = document.getElementById("ghost");
const pillars = document.getElementById("pillars");
const hole = document.getElementById("hole");
const start = document.getElementById("start");

let score = 0;
let gameOver = false;


let ghostBottom = 500
let ghostLeft = 500
let gravity = 2


function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
    
    if(ghostBottom === 150 || ghostBottom === 700){
        gameEnd();
    }
}
let timerID = setInterval(startGame, 20)

function movePillars() {
    hole.addEventListener("animationiteration", () => {
        let random = -((Math.random()*300)+250);
        hole.style.top = random + "px";

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
    gameOver = true
    document.removeEventListener("click", fly)
    alert("Game Over")
}