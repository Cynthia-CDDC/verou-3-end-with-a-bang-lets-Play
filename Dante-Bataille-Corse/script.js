import Deck from './deck.js'
let playerDeck, computerDeck
// assign values to cards
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

const computerCardSlot = document.querySelector('.computer-card-slot')
const playerCardSlot = document.querySelector('.player-card-slot')
const computerDeck = document.querySelector('.computer-deck')
const playerDeck = document.querySelector('.player-deck')
const text = document.querySelector('.text')

startgame()
function startgame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards /2)
    playerDeck = new Deck(deck.cards.slice(0,deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

    cleanBeforeRound()
    }

function cleanBeforeRound() {
    computerCardSlot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innerText = ''
    updateDeckCount()
}

function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innertext = playerDeck.numberOfCards
}
