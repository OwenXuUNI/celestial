let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('error-fake.png');
  topImg = loadImage('error-back.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
  topImg.resize(width, height);
  bottomImg.resize(width,height);
  image(bottomImg, 0, 0, width, height);
}

function draw() {

}

function windowReszied() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  copy(topImg, mouseX, mouseY, 20, 20, mouseX, mouseY, 20, 20);
}
  