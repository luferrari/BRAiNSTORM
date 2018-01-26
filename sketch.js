var rg, md, bd;
var b0, b1, b2, b3, b4;
var bg1, bg2, bg3, bg4;
var click = 0;
var parts;

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
  bg1 = loadImage('./assets/images/bg1.gif');
  //bg2 = loadImage('./assets/images/bg2.gif');
  //bg3 = loadImage('./assets/images/bg3.gif');
  bg4 = loadImage('./assets/images/bg4.gif');
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
  print('clicks: ' + click);
}

function draw() { // EVERY FRAME
  start();

  fill(0);
}

function mousePressed() { // ONCE on click
  background(209, 210, 211);
  click++;
  print('clicks: ' + click);
  img(b0);
  roll();
  design();
}

function keyPressed() { // ONCE on keypress
  if (keyCode == 32) {
    background(209, 210, 211);
    click++;
    print('clicks: ' + click);
    img(b0);
    roll();
    design();
  }
}