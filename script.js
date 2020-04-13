let playArea = {};
let player = {};
let gameObj;

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

//event fires when all the DOM contents loads..
document.addEventListener("DOMContentLoaded", getData);
//function which fetchs the data
function getData() {
    try {
        fetch("https://cors-anywhere.herokuapp.com/https://api.myjson.com/bins/gungm").then(function (rep) {
            if (!rep.ok) throw new Error(rep.statusText);
            return rep.json();
        }).then(function (data) {
            console.log(data);
            gameObj = data.data;
            console.log(gameObj);
        })
    } catch (error) {
        console.log("it's not fetching the data please check the API and make sure the code is running succesfully..")
    }

    console.log("DOM loaded");
}

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