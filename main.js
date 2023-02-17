const display = document.getElementById("display");
const ghost = document.getElementById("ghost");
const reStartButton = document.getElementById("restart");
let fly = 0;
let gameOver = false;

/*function flying() {
    flying = 1;

}*/

reStartButton.addEventListener("click", () => {
    fly = 0; 
    gameOver = false;
})