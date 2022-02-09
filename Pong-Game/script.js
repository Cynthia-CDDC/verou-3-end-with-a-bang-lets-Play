import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

// Add ball from module
const newBall = new Ball(document.querySelector(".ball"));

// Add paddle from module
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

// Determine how much time has passed from the previous frame to the new frame
let lastTime = "";

// Create infinite loop which will update animations every time the screen is allowed to change
const update = (time) => {
    // In the beginning lastTime will be null, so we need to avoid calculating the delta in this case
    if (lastTime != null) {
        // Every time our code updates we subtract our lastTime from the current time
        const delta = time - lastTime;

        // Add movement to our ball, and make sure it takes framerate drops into account
        newBall.update(delta);

        // Add movement to computer paddle
        computerPaddle.update(delta, newBall.ballY);
    }

    lastTime = time;

    window.requestAnimationFrame(update);
};

window.requestAnimationFrame(update);

// Add eventlistener for player paddle (mouse movement)
document.addEventListener("mousemove", (e) => {
    // Convert pixel value to percentage
    playerPaddle.position = (e.y / window.innerHeight) * 85;
});

// Add eventlistener for player paddle (arrow keys)
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 38) {
        if (playerPaddle.position > 4) {
            playerPaddle.position -= 5;
        }
    } else if (e.keyCode === 40) {
        if (playerPaddle.position < 81) {
            playerPaddle.position += 5;
        }
    }
});
