import ball from "./ball.js";

const newBall = new ball(document.querySelector(".ball"));

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
    }

    lastTime = time;

    window.requestAnimationFrame(update);
};

window.requestAnimationFrame(update);
