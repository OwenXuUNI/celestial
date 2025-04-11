let circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
}


function draw() {
  circleSize = random(100,800);
  
  r= random(255);
  g= random(255);
  b = random(255);
  
  fill(r,g,b, 20);
  textSize(300);
  text("hello world", mouseX, mouseY);
  circle(width/2, height/2, circleSize);
  
}