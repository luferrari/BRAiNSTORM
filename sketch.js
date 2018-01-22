var rg, md, bd;
var b0, b1, b2, b3, b4;

// for additional details on the functions, view the auxiliary files:
//  - assets/aux_design.js
//  - assets/aux_random.js

function preload() {
  rg = loadFont('./assets/fonts/RobotoMono-Regular.ttf');
  md = loadFont('./assets/fonts/RobotoMono-Medium.ttf');
  bd = loadFont('./assets/fonts/RobotoMono-Bold.ttf');
  b0 = loadImage('./assets/images/b0.png');
  b1 = loadImage('./assets/images/b1.png');
  b2 = loadImage('./assets/images/b2.png');
  b3 = loadImage('./assets/images/b3.png');
  b4 = loadImage('./assets/images/b4.png');
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
}

function draw() {
  background(209, 210, 211);
  push();
  img(b0);
  filter(GRAY);
  pop();

  design();
  roll();
}

function mousePressed() {
  loop();
}

function keyPressed() {
  if (keyCode == 32) {
    loop();
  }
}