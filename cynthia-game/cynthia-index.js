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

let clickedItems = [];

const compareCards = (clickedItems) => {

    if(clickedItems.length === 2 && clickedItems[0].id !== clickedItems[1].id) {
        setTimeout(function () {
            for (let i = 0; i < clickedItems.length; i++) {
                toggleCard(clickedItems[i])
            }
            clickedItems = [];
            console.log(clickedItems)
            console.log("dog")

        }, 1000);

        //TODO fix else if statement to empty clickedItems list
    } else if (clickedItems.length === 2 && clickedItems[0].id === clickedItems[1].id) {
        clickedItems = [];
        console.log(clickedItems)
        console.log("cat")

    } else {
        console.log(clickedItems)
        console.log("cow")
    }
    return clickedItems;
}

const toggleCard = (card) => {
    console.log(card)
    card.classList.toggle("flipCard");
    //
    // console.log(card)
    // console.log(card.children);// = inner-card
    // console.log(card.children[0])// array with 1 item = html element

    card.children[0].classList.toggle("inner-card");//change the class of the cards childNode to trigger other css

} 

for (let i = 0; i < images.length; i++) {
    const card = document.createElement("div"); //create at least one element to use template literal.
    card.className = "card";
    card.id = imagesShuffled[i].character;
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

    // Add index attribute
    card.setAttribute("index", i);
    const container = document.querySelector(".container");
    container.appendChild(card);
    // console.log(i)

    function imageClicked(event) {
        // console.log(card)
        toggleCard(card)

        if(clickedItems.length <= 1) {
            clickedItems.push(card)

            compareCards(clickedItems);

            console.log('bull')
            console.log(clickedItems);
        }
        // TODO: else statement on when clicked items is more than 2 -> reset

        // if (clickedItems.length == 2 && clickedItems[0] !== clickedItems[1]) {
        //         //not the same
        //     console.log(clickedItems)
        //
        //     for (let i = 0; i < clickedItems.length; i++) {
        //         toggleCard(clickedItems[i])
        //         console.log(clickedItems)
        //     }
        //     console.log('kow')
        //     // - if the two img are not the same the img dissapears after a few seconds and clicks are possible again
        // } else if (clickedItems.length == 2 && clickedItems[0] == clickedItems[1]) {
        //     //the same
        //     console.log(clickedItems)
        //     console.log('horse')
        // } else {
        //
        // }
        
    }
    card.addEventListener('click', imageClicked, {once: true})
}

//TODO: // - when two cards are clicked:
            // - other cards no longer clicable until after comparison was made between the two 
        // - compare images:
            // - if the two img are the same they stay visible and clicks are possible again (add message to player)
            
            // - if all the img are visible the game is done