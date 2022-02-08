import Deck from './deck.js'

const computerCardslot = document.querySelector('.pccard-slot')
const playerCardSlot = document.querySelector('.plcard-slot')
const playerDeckElement = document.querySelector('.playerDeck')
const computerDeckElement = document.querySelector('.pcDeck')
const text = document.querySelector('.text')

let playerDeck, computerDeck, inRound

document.addEventListener('click', () => {
    if (inRound) {
        cleanBeforeRound()
    } else {
        flipCards()
    }
})

startgame()
function startgame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false


    cleanBeforeRound()
}

function cleanBeforeRound() {
    inRound = false
    computerCardslot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innertext = ''

    updateDeckCount()
}

function flipCards() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardslot.appendChild(computerCard.getHTML())
}

function updateDeckCount() {
    computerDeckElement.innerHTML = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}



// const deck = new Deck();
// deck.shuffle();
// console.log(deck.cards);

// computerCardslot.appendChild(deck.cards[0].getHTML())