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

//imagesShuffled is now the images array shuffled.
const imagesShuffled = images.sort((a, b) => 0.5 - Math.random());

const clickedItems = [];
const equalPick = [];

    for (let i = 0; i < imagesShuffled.length; i++) {
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
        
        function imageClicked(event) {
            const clickedCard = event.currentTarget;
            clickedCard.classList.toggle("flipCard");
            clickedCard.children[0].classList.toggle("inner-card");//change the class of the cards childNode to trigger other css
            
            clickedItems.push(clickedCard)//after toggles for classList to be correct
            console.log(clickedItems) //works for item not for index (undifined)
            
            if (clickedItems.length === 2) {
                conditions ()
            }
            function conditions () {
                if (clickedItems[0].outerText !== clickedItems[1].outerText) {
                    //not the same
                    const myTimeout = setTimeout(() => {
                        for (let clickedItem of clickedItems) {
                            clickedItem.classList.toggle("flipCard");
                            clickedItem.children[0].classList.toggle("inner-card");
                            clickedItem.addEventListener('click', imageClicked, { once: true });
                        }
                        emptyArray () // ok   
                    }, 1000);
                    
                } else if(clickedItems[0].outerText === clickedItems[1].outerText) {
                    //the same
                    //cards stay visible: ok.
                    equalPick.push(clickedCard)
                    fiveEqualPicks ()
                    emptyArray ()// ok 
                } 
                function emptyArray () {
                    clickedItems.length = 0;
                    console.log(clickedItems)
                }
                function fiveEqualPicks () {
                    if (equalPick.length === 5) {
                        const button = document.createElement('button');
                        button.type = 'button';
                        button.className = 'playAgain-button';
                        button.innerHTML = 'Play Again';
                        const presentation = document.querySelector('.presentation');
                        presentation.appendChild(button);
                        function startGame() {
                            location.reload();
                        }
                    button.addEventListener('click', startGame)
                    }
                }
            }
        }
    card.addEventListener('click', imageClicked, { once: true })
}


