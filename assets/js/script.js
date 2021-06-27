//card game

let cards = document.getElementsByClassName("memory-card");
let unflippedCard = true;
let lock = false;
let cardOne;
let cardTwo;

for (let card of cards) {
    card.addEventListener("click", flipCard);
    
}

function flipCard() {
    if (lock) return;
    if (this === cardOne) return;

    this.classList.toggle("flip");

    if (unflippedCard) {
        unflippedCard = false;
        cardOne = this;
    }
    else {
        cardTwo = this;
        checkMatches();
    }

}

function checkMatches() {
    let match = cardOne.dataset.name === cardTwo.dataset.name;
    if (match) {
        disableCard();
        cardsWon.push(cardOne, cardTwo); //add cards won
        gameComplete();
    }
    else {
        unflipCard();
    }
}

function disableCard() {
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCard() {
    lock = true;
    setTimeout(() =>{
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    resetBoard();
}, 1500);
}

function resetBoard() {
    lock = false;
    unflippedCard = true;
    cardOne = null;
    cardTwo = null;
}

window.onload = shuffleCards()

function shuffleCards() {
    for (let card of cards) {
        let position = Math.floor(Math.random()*12);
        card.style.order = position;
    }
}

let cardsWon = [];

function gameComplete() {
    setTimeout(() => {
    if (cardsWon.length === cards.length){
        let gameComplete = document.getElementById("game-complete");
        let closeComplete = document.getElementById("close-complete");
        gameComplete.classList.add("show");
        closeComplete.addEventListener("click", function(){
            gameComplete.classList.remove("show");
        })
    }}, 900);
    }

function restart() {
    for (card of cards) {
    card.classList.remove("flip");
    card.addEventListener("click", flipCard);
    card= null;}
    lock= false;
    unflippedCard= true;
    cardsWon = [];
    setTimeout(() =>{shuffleCards();}, 500);
    }

let newGame = document.getElementById("new-game");
newGame.addEventListener("click", function(){
    let gameComplete = document.getElementById("game-complete");
    gameComplete.classList.remove("show");
    restart();
})

let newButton = document.getElementById("new-button");
newButton.addEventListener("click", restart);

//contact form modal popup

let openContact = document.getElementById("contact-us");
openContact.addEventListener("click", function() {
  document.getElementById("contact-popup").classList.add("show");
})

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let emailAddress = document.getElementById("email");
let message = document.getElementById("message")

let closeContact = document.getElementById("close-contact");
closeContact.addEventListener("click", function() {
    document.getElementById("contact-popup").classList.remove("show");
    thanks.classList.remove("show");
    myForm.classList.remove("hide");
    firstName.value = "";
    lastName.value = "";
    emailAddress.value = "";
    message.value = "";
})

let myForm = document.getElementById("contact-form")
let thanks = document.getElementById("thank-you");
myForm.addEventListener("submit", function(event) {
  
    event.preventDefault();
    thanks.classList.add("show");
    myForm.classList.add("hide");
})

//game rules modal popup

let openRules = document.getElementById("open-rules");
openRules.addEventListener("click", function(){
    document.getElementById("game-rules").classList.add("show");
})

let closeRules = document.getElementById("close-rules");
closeRules.addEventListener("click", function(){
    document.getElementById("game-rules").classList.remove("show");
})

// game music

let gameMusic = document.getElementById("game-music");
let musicOff = document.getElementById("music-off");
musicOff.addEventListener("click", function(){
    if (musicOff.classList.contains("fa-volume-mute")){
        gameMusic.play();
        musicOff.classList.remove("fa-volume-mute");
        musicOff.classList.add("fa-volume-up")
    }
    else {
        gameMusic.pause();
        musicOff.classList.add("fa-volume-mute");
        musicOff.classList.remove("fa-volume-up")
    }
})