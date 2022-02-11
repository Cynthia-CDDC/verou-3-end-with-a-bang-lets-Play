

class Card:

    def __init__(this, qbc, defc):
        this.suit = qbc
        this.value = defc

class Deck:
    cards: list

    def __init__(this, lkejr):
        this.cards = lkejr

    def shuffle_cards(this):
        this.cards = shuffle(this.cards)


card1 = Card("heart", 2)
card2 = Card("heart", 3)

deck1 = Deck([card1, card2])

deck1.shuffle_cards()
