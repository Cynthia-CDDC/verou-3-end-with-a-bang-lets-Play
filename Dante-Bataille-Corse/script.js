import Deck from './deck.js'
const cardValueMap = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14
}

const computerCardslot = document.querySelector('.pccard-slot')
const playerCardSlot = document.querySelector('.plcard-slot')
const playerDeckElement = document.querySelector('.playerDeck')
const computerDeckElement = document.querySelector('.pcDeck')
const text = document.querySelector('.text')
let playerMoves = 1
let pcMoves = 0

let playerDeck, computerDeck, inRound, stop

if (playerMoves > 0){ document.getElementById("plDeck").addEventListener('click', () => {
    if (stop) {
        startgame();
        return;
    }
    if (inRound) {
        cleanBeforeRound()
    } else {
        flipPlayerCard()
        setTimeout(flipPcCard, 800);
    }
})
}

startgame()
function startgame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false

    cleanBeforeRound()
}

function cleanBeforeRound() {
    inRound = false
    computerCardslot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innertext = ''

    updateDeckCount()
}

function flipPlayerCard() {
    inRound = true
    const playerCard = playerDeck.pop()
    playerCardSlot.appendChild(playerCard.getHTML())
    pcMoves ++
    playerMoves --
    console.log(playerMoves)
    updateDeckCount()
}


function flipPcCard() {
    inRound = true
    const pcCard = computerDeck.pop()
    computerCardslot.appendChild(pcCard.getHTML())
    playerMoves ++
    pcMoves --
    updateDeckCount()

    if (isRoundWinner(playerCard, pcCard)){
        text.innertext("You won this round")
        playerDeck.push(playerCard)
        playerDeck.push(pcCard)
    } else if (isRoundWinner (pcCard, playerCard)) {
        text.innertext("You lost this Round")
        computerDeck.push(playerCard)
        computerDeck.push(pcCard)
    } 

    if (isGameOver(playerDeck)) {
        text.innertext = "You lose!!"
        stop = true
    } else if (isGameOver(computerDeck)) {
        text.innertext = "You Win!!!"
        stop = true
    }
}

function updateDeckCount() {
    computerDeckElement.innerHTML = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}


function isRoundWinner(cardOne, cardTwo) {
    return cardValueMap[cardOne.value] > cardValueMap[cardTwo.value]
}

function isGameOver(deck) {
    return deck.numberOfCards === 0
}

function markedCard(){

}

/*todo: middle stack
todo: turn based
todo: same card tap rule 
todo: normal win mode 
todo: new round button*/