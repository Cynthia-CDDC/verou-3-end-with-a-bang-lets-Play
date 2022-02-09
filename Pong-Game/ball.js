const initialVelocity = 0.05;
const velocityIncrease = 0.000004;

let isCollision = (rect1, rect2) => {
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    );
};

export default class Ball {
    constructor(ballElement) {
        this.ballElement = ballElement;
        // When we create a ball, make sure it is reset to the center
        this.reset();
    }

    get ballX() {
        // Change our css number into a JS number which we can use
        return parseFloat(
            getComputedStyle(this.ballElement).getPropertyValue("--ball-x")
        );
    }

    set ballX(value) {
        this.ballElement.style.setProperty("--ball-x", value);
    }

    get ballY() {
        // Change our css number into a JS number which we can use
        return parseFloat(
            getComputedStyle(this.ballElement).getPropertyValue("--ball-y")
        );
    }

    set ballY(value) {
        this.ballElement.style.setProperty("--ball-y", value);
    }

    // Add wall bounce
    rect() {
        return this.ballElement.getBoundingClientRect();
    }

    // When we create a ball, make sure it is in the center
    reset() {
        this.ballX = 50;
        this.ballY = 50;

        // Add movement direction
        this.direction = { x: 0 };

        // Make sure the angle of the ball won't be too horizontal or vertical
        while (
            Math.abs(this.direction.x) <= 0.3 ||
            Math.abs(this.direction.x) >= 0.85
        ) {
            // Create random number between 0 and 1, where you
            let randomNumberBetween = (min, max) => {
                return Math.random() * (max - min) + min;
            };

            // With using 2*Math.PI we get the circumference of our circle with radius 1
            const headingDirection = randomNumberBetween(0, 2 * Math.PI * 1);
            this.direction = {
                x: Math.cos(headingDirection),
                y: Math.sin(headingDirection),
            };
            this.velocity = initialVelocity;
        }
    }

    // Add movement to our ball, and check if it hits a paddle or wall
    update(delta, paddleRects) {
        this.ballX += this.direction.x * this.velocity * delta;
        this.ballY += this.direction.y * this.velocity * delta;

        // Check for wall bounce
        const rect = this.rect();

        // Check for collision
        if (rect.bottom >= window.innerHeight - 1 || rect.top <= 1) {
            this.direction.y *= -1;
        }

        if (paddleRects.some((r) => isCollision(r, rect))) {
            this.direction.x *= -1;
        }

        //Speed up ball with time
        this.velocity += velocityIncrease * delta;
    }
}
