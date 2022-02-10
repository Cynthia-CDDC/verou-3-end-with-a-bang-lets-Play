//THIS IS A MEMORY GAME WITH PAIRS OF IMAGES

//array of objects with images and character name, the twins next to each other
const images = [
    {
        img: "./cynthia-images/alice.jpg",
        character: "Alice",
    },
    {
        img: "./cynthia-images/alice.jpg",
        character: "Alice",
    },
    {
        img: "./cynthia-images/Knave-of-hearts.jpg",
        character: "Knave Of Hearts",
    },
    {
        img: "./cynthia-images/Knave-of-hearts.jpg",
        character: "Knave Of Hearts",
    },
    {
        img: "./cynthia-images/red-queen.jpg",
        character: "Red Queen",
    },
    {
        img: "./cynthia-images/red-queen.jpg",
        character: "Red Queen",
    },
    {
        img: "./cynthia-images/tarrant-hightopp.jpg",
        character: "Tarrant Hightopp",
    },
    {
        img: "./cynthia-images/tarrant-hightopp.jpg",
        character: "Tarrant Hightopp",
    },
    {
        img: "./cynthia-images/white-queen.jpg",
        character: "White Queen",
    },
    {
        img: "./cynthia-images/white-queen.jpg",
        character: "White Queen",
    },
];
const imagesShuffled = images.sort((a, b) => 0.5 - Math.random());
console.log(imagesShuffled)

for (let image of imagesShuffled) {
    console.log(image)
    const card = document.createElement('div');//create at least one element to use template literal.
    card.className = "card";
    card.innerHTML = `
        <div class="inner-card" id="inner-card">
            <div class="card-front">
                <img class="front-img" src="./cynthia-images/cheshire-cat.jpg" alt="Cheshire Cat">
            </div>
            <div class="card-back">
                <img class="card-head" src= ${image.img}>
                <h3 class="card-body"> ${image.character}</h3>
            </div>
        </div>`;

    card.setAttribute('index', image)
    card.addEventListener('click', imageClicked(image))
    console.log(card)
    const container = document.querySelector('.container');
    container.appendChild(card);   
}

function imageClicked(index) {
    console.log(this) //this = window
    return function(){
        console.log(index)
        console.log(index.character) //does gives characters name of the clicked card
        //would need index nr. instead of character name

        const clickedCard = document.querySelector(".card");
        clickedCard.classList.toggle("flipCard");
        console.log('test eventlistener ok')
        console.log(clickedCard)

        // click on whatever card it is allways the first that flips, on second random click the second card flips, ...
        const innerCard = document.querySelector(".inner-card")
        innerCard.classList.toggle("inner-card");
        console.log(innerCard)
    }
}

// const clickedCard = document.querySelector(".card");
//         clickedCard.classList.toggle("flipCard");
//         console.log('test eventlistener ok')
//         console.log(clickedCard)
//         innerCard.classList.toggle("inner-card");
//         console.log(innerCard)
// when card is clicked: flip the card

//TODO: create conditions of the game: see steps further down in doc
        // - if card is clicked: 
        // - if two cards are selected no more clicks possible (add message to player)
        // - compare images:
            // - if the two img are the same they stay visible and two clicks are possible again (add message to player)
            // - if the two img are not the same the img dissapears after a few seconds and clicks are possible again (add message to player)
            // - if all the img are visible the game is done (add message to player)
            // - play again button to start new session

//TODO: create play again button
//TODO: create event listener for button on click