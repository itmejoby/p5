let t = 0; // time variable


function setup() {
    buffer = 20
    createCanvas(450 + buffer, 800 + buffer);
    noStroke();
    fill(200, 200, 100);
}

function draw() {
    background(10, 100); // translucent background (creates trails)


    xBase = width / 2
    yBase = height / 2

    ellipse(xBase, yBase, 100); // draw particle


    range = 75
    increments = 10

    x = xBase
    y = yBase

    // each particle moves in a circle
    const myX = x + 50 * cos(2 * PI * t + 0);
    const myY = y + 50 * sin(2 * PI * t + 0);


    for (let i = 0; i <= range; i = i + increments) {
        rayX = x + 65 * cos(2 * PI * t + 15 * i);
        rayY = y + 65 * sin(2 * PI * t + 15 * i);
        triSize = 5
        triangle(rayX, rayY + triSize, rayX - triSize, rayY - triSize, rayX + triSize, rayY - triSize)
    }

    t = t + 0.004; // update time
}
