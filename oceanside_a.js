// start capture
const fps = 60
let capturer = new CCapture({ format: "png", framerate: fps });
let btn;
let div;
// end capture

let t = 0; // time variable

let input = ""

let w = 1440
let h = 2560
let scale = w / 450 // original implemntation was 450 width

function setup() {
    createCanvas(w, h);
    frameRate(fps);
    noStroke();
    fill(50, 100, 150);
}

function draw() {
    // start capture
    if (frameCount === 1) {
        // start the recording on the first frame
        // this avoids the code freeze which occurs if capturer.start is called
        // in the setup, since v0.9 of p5.js
        capturer.start();
        createDiv("Recording!")
        div = createDiv("0 seconds recorded!")
        btn = createButton("Save").mousePressed(function () {
            capturer.save();
        });
        createDiv("You need Chrome for this to work.");
    }
    // end capture  

    background(75, 75);

    const borderOverlap = 20 * scale

    const xUpperLimit = height + borderOverlap
    const xLowerLimit = 0 - borderOverlap
    const yUpperLimit = width + borderOverlap
    const yLowerLimit = 0 - borderOverlap

    // make a x and y grid of ellipses
    let xMod = 10 * scale // 10 and 50
    let yMod = 10 * scale // 10 and 50
    let h = random(0, 100);
    for (let x = xLowerLimit; x <= xUpperLimit; x = x + xMod) {
        for (let y = yLowerLimit; y <= yUpperLimit; y = y + yMod) {
            // starting point of each circle depends on mouse position
            const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
            const yAngle = map(0, 0, height, -4 * PI, 4 * PI, true);
            // and also varies based on the particle's location
            const angle = xAngle * (x / width) + yAngle * (y / height);

            // each particle moves in a circle
            const myX = 1 * y + 20 * scale * cos(2 * PI * t + angle); // * (2 * PI * t + angle);
            const myY = 1 * x + 20 * scale * sin(2 * PI * t + angle); // * (2 * PI * t + angle);

            fill(50, 0 + (y % yUpperLimit), 255);
            triangle(myX, myY, myX + (15 * scale), myY + (15 * scale), myX + (15 * scale), myY)
        }
    }

    t = t + .005; // update time .001 and .005

    // start capture
    capturer.capture(document.getElementById("defaultCanvas0"));
    div.html(`${floor(frameCount / fps)} seconds recorded`);
    if (frameCount > fps * 60) {
        // after 60 seconds recorded
        createDiv("Recording stopped!");
        capturer.stop();
        noLoop();
    }
    // end capture
}
