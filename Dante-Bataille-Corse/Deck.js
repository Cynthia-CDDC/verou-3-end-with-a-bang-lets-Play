const suits = ["♠", "♣", "♥", "♦"];
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards 
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.shift()
    }

    push() {
        this.cards.push(Card)
    }

    shuffle () {
        for (let i = this.numberOfCards -1;i >0; i--) {
            const newIndex = Math.floor(Math.random() * (i +1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
            console.log(this.numberOfCards)
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
    get color() {
        return this.suit === '♠' || this.suit === '♣' ? 'black' : 'red'
    }
    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
}

function freshDeck () {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value)
        })
    })
}