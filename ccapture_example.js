const fps = 60
let capturer = new CCapture({ format: "png", framerate: fps });
let btn;
let div;

// ... sketch setup ... //

function draw() {
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

    // ... sketch ... //

    capturer.capture(document.getElementById("defaultCanvas0"));
    div.html(`${floor(frameCount / fps)} seconds recorded`);
    if (frameCount > fps * 60) {
        // after 60 seconds recorded
        createDiv("Recording stopped!");
        capturer.stop();
        noLoop();
    }
}
