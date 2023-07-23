let t = 0; // time variable

let fps = 60
let w = 1440
let h = 2560
let scale = w / 600 // original implemntation was 600 width

function randomRange(lowerLimit, upperLimit) {
    return Math.round(Math.random() * (upperLimit - lowerLimit) + lowerLimit)
}

function setup() {
    createCanvas(w, h);
    frameRate(fps);
    noStroke();
    fill(randomRange(0, 255), randomRange(0, 255), randomRange(0, 255));
}

bg1 = randomRange(0, 50)
bg2 = randomRange(0, 50)

range = Math.min(randomRange(100, 500) * scale, h)
increments = randomRange(1, 50) * scale // 20 * scale

angleMod = randomRange(0.1, 10)
movementMod = randomRange(10, 100)
movementSpeedMod = randomRange(0.1, 3)



/* Refreshes every frame */
function draw() {
    // background(10, 10) // translucent background (creates trails)
    background(bg1, bg2);

    xBase = width / 2
    yBase = height / 2


    // make a x and y grid of ellipses
    for (let x = xBase - range; x <= xBase + range; x = x + increments) {
        for (let y = yBase - range; y <= yBase + range; y = y + 10) {
            const xAngle = map(0, 0, width, -angleMod * PI, angleMod * PI, true);
            const yAngle = map(0, 0, height, -angleMod * PI, angleMod * PI, true);

            const angle = xAngle * (x / width) + yAngle * (y / height);

            // each particle moves in a circle
            const myX = x + movementMod * cos(movementSpeedMod * PI * t + angle);
            const myY = y + movementMod * sin(movementSpeedMod * PI * t + angle);

            ellipse(myX, myY, 10); // draw particle
        }
    }

    t = t + 0.01; // update time
}
