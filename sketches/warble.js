let t = 0; // time variable

let fps = 60
let w = 1440
let h = 2560
let scale = w / 600 // original implemntation was 450 width

function setup() {
    createCanvas(w, h);
    frameRate(fps);
    noStroke();
    fill(40, 120, 80); // 40, 80, 120 and 40, 120, 80 and 80, 80, 80
}

function draw() {
    background(10, 10); // translucent background (creates trails)

    xBase = width / 2
    yBase = height / 2

    range = 100 * scale
    increments = 20 * scale


    // make a x and y grid of ellipses
    for (let x = xBase - range; x <= xBase + range; x = x + increments) {
        for (let y = yBase - range; y <= yBase + range; y = y + 10) {
            // starting point of each circle depends on mouse position
            const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true); //map(mouseX,
            const yAngle = map(0, 0, height, -4 * PI, 4 * PI, true);
            // and also varies based on the particle's location
            const angle = xAngle * (x / width) + yAngle * (y / height);

            // each particle moves in a circle
            const myX = x + 20 * cos(2 * PI * t + angle);
            const myY = y + 20 * sin(2 * PI * t + angle);

            ellipse(myX, myY, 10); // draw particle
        }
    }

    t = t + 0.01; // update time
}
