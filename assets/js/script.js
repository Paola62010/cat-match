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
    }
    else {
        unflipCard();
    }
}

function disableCards {

}

function unflipCard {

}

function resetBoard {

}