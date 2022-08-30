let dim;

function setup() {
  createCanvas(400, 400);
  dim = width / 2;
  background(0);
  colorMode(HSL, 360, 100, 100); // HSB RGB HSL
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
  // background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(random(0, width), random(0, height));
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
