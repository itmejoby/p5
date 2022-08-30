let t = 0; // time variable

function setup() {
    createCanvas(600, 600);
    noStroke();
    fill(40, 200, 40);
}

function draw() {
    background(10, 10); // translucent background (creates trails)

    xBase = width / 2
    yBase = height / 2

    range = 50
    increments = 10


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


    //   // starting point of each circle depends on mouse position
    //   const xAngle = 0//map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    //   const yAngle = 0//map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    //   // and also varies based on the particle's location
    //   const angle = xAngle * (x / width) + yAngle * (y / height);

    //   // each particle moves in a circle
    //   const myX = x + 20 * cos(2 * PI * t + angle);
    //   const myY = y + 20 * sin(2 * PI * t + angle);

    //   ellipse(myX, myY, 10); // draw particle


    //   // and also varies based on the particle's location
    //   angle2 = 30 * (x / width) + 10 * (y / height);

    //   // each particle moves in a circle
    //   myX2 = x + 20 * cos(2 * PI * t + angle2);
    //   myY2 = y + 20 * sin(2 * PI * t + angle2);
    //   ellipse(myX2, myY2, 10)

    t = t + 0.01; // update time
}
