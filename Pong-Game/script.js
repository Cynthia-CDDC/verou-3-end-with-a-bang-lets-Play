import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

// Add ball from module
const newBall = new Ball(document.querySelector(".ball"));

// Add paddle from module
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

// Add variables for scores
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

// Determine how much time has passed from the previous frame to the new frame
let lastTime = "";

// Create infinite loop which will update animations every time the screen is allowed to change
const update = (time) => {
    // In the beginning lastTime will be null, so we need to avoid calculating the delta in this case
    if (lastTime != null) {
        // Every time our code updates we subtract our lastTime from the current time
        const delta = time - lastTime;

        // Add movement to our ball, and make sure it takes framerate drops into account
        newBall.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);

        // Add movement to computer paddle
        computerPaddle.update(delta, newBall.ballY);

        // Change background color based on playfield area
        const hueBackground = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--hue-background"
            )
        );

        document.documentElement.style.setProperty(
            "--hue-background",
            hueBackground + delta * 0.03
        );

        // Change paddles color based on playfield area
        const huePaddles = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--hue-paddles"
            )
        );

        document.documentElement.style.setProperty(
            "--hue-paddles",
            huePaddles + delta * 0.05
        );

        // Change ball color based on playfield area
        const hueBall = parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--hue-ball"
            )
        );

        document.documentElement.style.setProperty(
            "--hue-ball",
            hueBall + delta * 0.05
        );

        // Add functions for when someone loses
        if (isLose()) {
            handleLose();
        }
    }

    lastTime = time;

    window.requestAnimationFrame(update);
};

window.requestAnimationFrame(update);

// Create functions for when someone loses
let isLose = () => {
    const rect = newBall.rect();
    return rect.right >= window.innerWidth - 3 || rect.left <= 3;
};

let handleLose = () => {
    const rect = newBall.rect();
    if (rect.right >= window.innerWidth - 3) {
        playerScoreElement.textContent =
            parseInt(playerScoreElement.textContent) + 1;
    } else if (rect.left <= 3) {
        computerScoreElement.textContent =
            parseInt(computerScoreElement.textContent) + 1;
    }

    newBall.reset();
    computerPaddle.reset();
};

// Add eventlistener for player paddle (mouse movement)
document.addEventListener("mousemove", (e) => {
    // Convert pixel value to percentage
    playerPaddle.position = (e.y / window.innerHeight) * 85;
});

// // Add eventlistener for player paddle (arrow keys)
// document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 38) {
//         if (playerPaddle.position > 4) {
//             playerPaddle.position -= 5;
//         }
//     } else if (e.keyCode === 40) {
//         if (playerPaddle.position < 81) {
//             playerPaddle.position += 5;
//         }
//     }
// });
