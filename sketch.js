let celestialModel;
let moonModel;
let lineModel;
let beltModel;
let stars = [];

function preload() {
  celestialModel = loadModel('/models/celestial.obj', true);
  moonModel = loadModel('/models/moon.obj', true);
  lineModel = loadModel('/models/lines.obj', true);
  beltModel = loadModel('/models/belt.obj', true);

  moonImg = loadImage('/textures/rock.jpg');
  sunImg = loadImage('/textures/sun.jpg');
  earthImg = loadImage('/textures/earth.jpg');
  mercImg = loadImage('/textures/merc.jpg');
  jupiterImg = loadImage('/textures/jupiter.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0, 0, 2500, 0, 0, 0, 0, 1, 0);

  let fov = PI / 3;
  let aspect = width / height;
  let near = 1;
  let far = 18000;
  perspective(fov, aspect, near, far);

    for (let i = 0; i < 1500; i++) {
    stars.push([
      random(-6000, 6000),
      random(-6000, 6000),
      random(-6000, 6000),
      random(1, 5)
    ]);
  }
  
  pointLight(255,255,255,200,200,-1000);
  directionalLight(255, 255, 255, -1, -1, -1);
  ambientLight(100);
}


function draw(){
  background(0);
  orbitControl(1, 1, 1);
  
  push();
  noStroke();
  fill(255);
  for (let star of stars) {
    push();
    translate(star[0], star[1], star[2]);
    sphere(star[3]);
    pop();
  }

  normalMaterial();
  fill(255,255,255,100);
  push();
  scale(20);
  translate(0, -20, -200);
  model(celestialModel);
  pop();
  
  push();
  translate(0, 250, 850);
  scale(5);
  texture(sunImg);
  model(moonModel);
  pop();

  push();
  translate(0, 1400, 850);
  scale(50);
  fill(30,3,70,100);
  model(beltModel);
  pop();

  push();
  translate(1810, 800, 2250);
  scale(0.8);
  texture(earthImg);
  model(moonModel);
  pop();

  push();
  translate(1700, 650, 2550);
  scale(0.3);
  texture(moonImg);
  model(moonModel);
  pop();

  push();
  translate(700, -320, -130);
  scale(1);
  texture(mercImg);
  model(moonModel);
  pop();

  push();
  translate(-4000, 280, 1050);
  scale(2);
  texture(jupiterImg);
  model(moonModel);
  pop();

  push();
  translate(-3900, 350, 1350);
  scale(0.5);
  texture(moonImg);
  model(moonModel);
  pop();

  push();
  translate(-4100, 450, 1250);
  scale(0.2);
  texture(moonImg);
  model(moonModel);
  pop();

  push();
  translate(0, 250, 850);
  scale(40);
  fill(255);
  model(lineModel);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}