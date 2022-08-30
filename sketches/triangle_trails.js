let t = 0; // time variable

function setup() {
    createCanvas(600, 600);
    noStroke();
    fill(40, 100, 100);

}

function draw() {
    background(10, 10); // translucent background (creates trails)

    // make a x and y grid of ellipses
    let h = random(0, 100);
    for (let x = 0; x <= width; x = x + 30) {
        for (let y = 0; y <= height; y = y + 30) {
            // starting point of each circle depends on mouse position
            const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
            const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
            // and also varies based on the particle's location
            const angle = xAngle * (x / width) + yAngle * (y / height);

            // each particle moves in a circle
            const myX = x + 20 * (2 * PI * t + angle);
            const myY = y + 20 * (2 * PI * t + angle);

            // ellipse(myX, myY, 10); // draw particle
            triangle(myX, myY, myX + 10, myY + 10, myX + 10, myY)
            // h = (h + 1) % 100;
        }
    }

    t = t + 0.01; // update time
}
