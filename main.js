const display = document.getElementById("display");
const ghost = document.getElementById("ghost");
const pillars = document.getElementById("pillars");
const hole = document.getElementById("hole");
const start = document.getElementById("start");


let gameOver = false;


let ghostBottom = 500
let ghostLeft = 500
let gravity = 2


function startGame() {
    ghostBottom -= gravity
    ghost.style.bottom = ghostBottom + "px"
    ghost.style.left = ghostLeft + "px"
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
}
document.addEventListener("click", fly)

