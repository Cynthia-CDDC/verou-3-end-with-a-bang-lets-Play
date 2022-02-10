const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create variable for context
const c = canvas.getContext("2d");

// Create Circle object (OOP)
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "#15616d";
            c.fillStyle = "#845a6d";
            c.stroke();
            c.fill();
        };

        // Add update function for our Circle object
        this.update = () => {
            // Add wall bounce
            if (
                this.x + this.radius > window.innerWidth ||
                this.x - this.radius < 0
            ) {
                this.dx = -this.dx;
            }

            if (
                this.y + this.radius > window.innerHeight ||
                this.y - this.radius < 0
            ) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        };
    }
}

// Create array to store all different circles
let circleArray = [];

// Create loop for creating new Circle objects
for (let i = 0; i < 5000; i++) {
    // Create variable for radius
    let radius = Math.random() * 30;
    // Create variable outside of function for x-axis and y-axis
    let x = Math.random() * (window.innerWidth + radius * 2) - radius;
    let y = Math.random() * (window.innerHeight + radius * 2) - radius;
    // Create variables for velocity
    let dx = (Math.random() - 0.5) * 0.8; // Create random velocity between -5 and +5
    let dy = (Math.random() - 0.5) * 0.8;

    // Add all random circles to the array
    circleArray.push(new Circle(x, y, dx, dy, radius));
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
