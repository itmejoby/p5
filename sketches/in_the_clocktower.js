let dim;
var t = 0;
var particleArray = [];
function setup() {
  createCanvas(400, 400);
  frameRate(10)
}

function draw() {
  background(0);

  y = width / 2 + random(80, 160) * sin(3 * t + PI / 2);
  x = height / 2 + random(80, 160) * sin(1 * t);

  r = random(0, 20)
  h = random(0, 360)

  particleArray.push(new Particle(x, y, t, r, h));

  for (i = 0; i < particleArray.length; i++) {
    particleArray[i].show(t);
  }

  //keep the array short, otherwise it runs very slow
  if (particleArray.length > 800) {
    particleArray.shift();
  }

  t += .01;
}

function Particle(x, y, t, r, h) {
  this.x = x;
  this.y = y;
  this.t = t;
  this.r = r;
  this.h = h;

  this.show = function (currentT) {
    var _ratio = t / currentT;
    _alpha = map(_ratio, 0, 1, 0, 255); //points will fade out as time elaps
    // fill(255, 255, 255, _alpha);
    // ellipse(x, y, 5, 5);

    // let radius = dim / (random(2,5));
    // let h = random(0, 360);
    // for (let r = radius; r > 0; --r) {
    fill(h, 255, 255, _alpha);
    ellipse(x, y, r, r);
    // h = (h + 1) % 360;
    // }
  }
}

function drawGradient(x, y, a) {
  let radius = dim / (random(2, 5));
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 90, 90, a);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}