let mg;
let rSpeed = 0.01;

function setup() {
  colorMode(HSL);
  createCanvas(windowWidth, windowHeight, WEBGL);
  ambientLight(42, 100, 50);
  pointLight(0, 0, 150, 0, -height / 2, 400);
  noStroke();
  let size = height / 4;
  mg = new MengerSponge(0, 0, 0, size);
}

function draw() {
  background(250);
  rotateY(frameCount * rSpeed);
  rotateX(frameCount * rSpeed);
  mg.show();
}

function mouseClicked() {
  mg.generate();
}
