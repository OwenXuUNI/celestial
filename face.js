let color1, color2, color3, color4, color5, color6, color7, color8
let animateColors = false;
let returnButton;

function setup() {
  createCanvas(windowWidth * 3, windowHeight);
  
  frameRate(24);
  
  color1 = color(0);
  color2 = color(0);
  color3 = color(155,141,101);
  color4 = color(255,192,245);
  color5 = color(255);
  color6 = color(255);
  color7 = color(255,0,0);
  color8 = color(0);
  color9 = color(255);

  returnButton = createButton("Are you satisfied");
  returnButton.position(1400, 500);
  returnButton.mousePressed(() => {
    window.location.href = "nextpage.html";
  });
}


function draw() {
   background(color1);
   
   if(animateColors) {
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
    color3 = color(random(255), random(255), random(255));
    color4 = color(random(255), random(255), random(255));
    color5 = color(random(255), random(255), random(255));
    color6 = color(random(255), random(255), random(255));
    color7 = color(random(255), random(255), random(255));
    color8 = color(random(255), random(255), random(255));
    color9 = color(random(255), random(255), random(255));
}
  
   fill(color2);
   quad(100,200,700,200,500,50,200,50);
   rect(100,200,100,200);
   
   fill(color3);
   noStroke();
   triangle(200,200,600,200,200,900);
   
   fill(color4);
   noStroke();
   triangle(400,400,400,700,600,700);
   
   fill(color5);
   strokeWeight(2);
   stroke(51);
   rect(250,700,200,100);
   
   line(250,750,450,750);
   line(325,700,325,800);
   line(350,700,350,800);
   line(375,700,375,800);
   line(400,700,400,800);
   line(425,700,425,800);
   line(275,700,275,800);
   line(300,700,300,800);
   
   fill(color6);
   strokeWeight(1);
   circle(250,300,80);
   circle(450,300,80);
   
   fill(color7);
   circle(250,300,50);
   circle(450,300,50);
   
   fill(color8);
   circle(250,300,20);
   circle(450,300,20);
   
   fill(color9)
   text('Generate MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', 700,350);
   textSize(100);
   textFont('Shadows Into Light');
}

  function mousePressed() {
    animateColors = !animateColors;
}