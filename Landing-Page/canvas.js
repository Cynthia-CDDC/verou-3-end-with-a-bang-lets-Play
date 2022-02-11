const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create variable for context
const c = canvas.getContext("2d");

// Create mouse object
const mouse = {
    x: undefined,
    y: undefined,
};

// Add mouse hover effect
window.addEventListener("mousemove", (event) => {
    console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
});

const hoverEffect = (event) => {};

// Create Circle object (OOP)
class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "#15616d";
            c.fillStyle = this.color;
            c.stroke();
            c.fill();
        };

        // // Add reset functionality
        // this.reset = (dx, dy) => {
        //     this.x = dx;
        //     this.dy = dy;
        // };

        // Add update function for our Circle object
        this.update = () => {
            // Add wall bounce
            if (
                this.x + this.radius * 2 > window.innerWidth ||
                this.x - this.radius * 2 < 0
            ) {
                this.dx = -this.dx;
            }

            if (
                this.y + this.radius * 2 > window.innerHeight ||
                this.y - this.radius * 2 < 0
            ) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            // Add hover effect
            let hoverAreaX = mouse.x - this.x;
            let hoverAreaY = mouse.y - this.y;

            if (
                hoverAreaX < 35 &&
                hoverAreaY < 35 &&
                hoverAreaX > -35 &&
                hoverAreaY > -35
            ) {
                this.dx *= 1.01;
                this.dy *= 1.01;
                this.radius += 0.2;
                this.color = "hsl(325, 25%, 40%)";
            }

            this.draw();
        };
    }
}

// Create array to store all different circles
let circleArray = [];

// Create loop for creating new Circle objects
for (let i = 0; i < 3500; i++) {
    // Create variable for radius
    let radius = Math.random() * 30;
    // Create variable outside of function for x-axis and y-axis
    let x = Math.random() * (window.innerWidth + radius * 2) - radius;
    let y = Math.random() * (window.innerHeight + radius * 2) - radius;
    // Create variables for velocity
    let dx = (Math.random() - 0.5) * 0.8; // Create random velocity between -5 and +5
    let dy = (Math.random() - 0.5) * 0.8;
    // Create variable for color
    let color = "hsl(333, 19%, 44%)";

    // Add all random circles to the array
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
}

// Create infinite loop for animation
let animateBackground = () => {
    requestAnimationFrame(animateBackground);

    // Reset canvas for each frame
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};

animateBackground();
