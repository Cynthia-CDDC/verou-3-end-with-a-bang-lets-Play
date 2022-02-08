const initialVelocity = 0.04;
const velocityIncrease = 0.0000005;

export default class ball {
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

            Math.abs(this.direction.x) <= 0.25 ||
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
    update(delta) {

        this.ballX += this.direction.x * this.velocity * delta;
        this.ballY += this.direction.y * this.velocity * delta;

        // Check for wall bounce
        const rect = this.rect();

        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            this.direction.y *= -1;
        }
        if (rect.right >= window.innerWidth || rect.left <= 0) {
            this.direction.x *= -1;
        }

        //Speed up ball with time
        this.velocity += velocityIncrease * delta;
    }
}
