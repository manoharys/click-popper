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

function handleBtn() {
    console.log("Hello you just clicked button brow!!!");
}