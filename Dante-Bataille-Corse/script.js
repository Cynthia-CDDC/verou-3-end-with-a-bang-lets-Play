import Deck from './deck.js'
// assign values to J,Q,K and A cards
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
// global constant vars
const computerCardslot = document.querySelector('.pccard-slot')
const playerCardSlot = document.querySelector('.plcard-slot')
const playerDeckElement = document.querySelector('.playerDeck')
const computerDeckElement = document.querySelector('.pcDeck')
const text = document.querySelector('.text')

// global changeable vars
let playerMoves = 1
let pcMoves = 0
let playerDeck, computerDeck, inRound, stop

// clicker function
document.getElementById("plDeck").addEventListener('click', () => {
    if (playerMoves > 0){
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
    }
})

startgame()
//shuffle and divide card deck
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
// gets rid of littering text
function cleanBeforeRound() {
    inRound = false
    computerCardslot.innerHTML = ''
    playerCardSlot.innerHTML = ''
    text.innertext = ''

    updateDeckCount()
}
// amalgamation of functions
function flipPlayerCard() {
    inRound = true
    const playerCard = playerDeck.pop()
    playerCardSlot.appendChild(playerCard.getHTML())
    normalCardMoves(playerCard, pcMoves, playerMoves)
    markedCard(playerCard, pcMoves, playerMoves)
    updateDeckCount()
}

// another amalgamation of functions
function flipPcCard() {
    if (pcMoves > 0){
        inRound = true
        const pcCard = computerDeck.pop()
        computerCardslot.appendChild(pcCard.getHTML())
        normalCardMoves(pcCard, playerMoves, pcMoves)
        markedCard(pcCard, playerMoves, pcMoves)
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
}
// shows amount of remaining cards in deck
function updateDeckCount() {
    computerDeckElement.innerHTML = computerDeck.numberOfCards
    playerDeckElement.innerHTML = playerDeck.numberOfCards
}
// movement in case of marked cards
function markedCard (cardOne, amountOfMoves, myMoves){
    if (cardValueMap[cardOne.value] === 11){
        myMoves = 0
        amountOfMoves = 1
    }else if (cardValueMap[cardOne.value] === 12){
        myMoves = 0
        amountOfMoves = 2
    }else if (cardValueMap[cardOne.value] === 13){
        myMoves = 0
        amountOfMoves = 3
    }else if (cardValueMap[cardOne.value] === 14){
        myMoves = 0
        amountOfMoves = 4
    } else{}
}
// movement in case of normal cards
function normalCardMoves (cardOne, plusMoves, minusMoves) {
    if (cardValueMap[cardOne.value] === 2 || cardValueMap[cardOne.value] === 3 || cardValueMap[cardOne.value] === 4 || cardValueMap[cardOne.value] === 5 || cardValueMap[cardOne.value] === 6 || cardValueMap[cardOne.value] === 7 || cardValueMap[cardOne.value] === 8 || cardValueMap[cardOne.value] === 9 || cardValueMap[cardOne.value] === 10) {
        plusMoves ++
        minusMoves --
    }
}
//declares a winner
function isRoundWinner(cardOne, cardTwo) {
    return cardValueMap[cardOne.value] > cardValueMap[cardTwo.value]
}

// resets the game
function isGameOver(deck) {
    return deck.numberOfCards === 0
}



function doubleCard(){

}

/*todo: middle stack
todo: turn based X
todo: same card tap rule 
todo: normal win mode 
todo: new round button*/









