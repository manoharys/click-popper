let playArea = {};
let player = {};


playArea.game = document.querySelector(".game");

playArea.main = document.querySelector(".main");

playArea.page = document.querySelector(".page");

playArea.btn = Array.from(document.querySelectorAll(".btn"));

playArea.page = document.querySelectorAll(".page")

playArea.status = document.querySelector(".status");
console.log(playArea);

player.score = 0;
player.items = 3;

console.log(player);

//looping through the button and setting up the eventListnerss..

playArea.btn.forEach(function (item) {
    console.log(item);
    item.addEventListener('click', handleBtn);
});

//function which handles the action for certain button clicks..
function handleBtn(e) {
    if (e.target.classList.contains("newGame")) {
        startGame();
    }
}

function startGame() {
    console.log("Game started dude!!!");
}