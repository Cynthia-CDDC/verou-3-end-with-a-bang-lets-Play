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

for (let i = 0; i < images.length; i++) {
    const card = document.createElement("div"); //create at least one element to use template literal.
    card.className = "card";
    card.innerHTML = `
        <div class="inner-card" id="inner-card">
            <div class="card-front">
                <img class="front-img" src="./cynthia-images/cheshire-cat.jpg" alt="Cheshire Cat">
            </div>
            <div class="card-back">
                <img class="card-head" src= ${imagesShuffled[i].img}>
                <h3 class="card-body"> ${imagesShuffled[i].character}</h3>
            </div>
        </div>`;

    // Add source attribute
    card.setAttribute("src", "./cynthia-images/cheshire-cat.jpg");
    // Add index attribute
    card.setAttribute("index", i);
    const container = document.querySelector(".container");
    container.appendChild(card);
    console.log(i)

    function imageClicked() {
        console.log(card)

        card.classList.toggle("flipCard");
        console.log(card)
        console.log(card.children);// = inner-card
        console.log(card.children[0])// array with 1 item = html element

        card.children[0].classList.toggle("inner-card");//change the class of the cards childNode to trigger other css
    }
    card.addEventListener('click', imageClicked)
}

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