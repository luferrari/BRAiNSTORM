// for additional details on the functions, view the auxiliary files:
//  - assets/aux_globals.js
//  - assets/aux_design.js
//  - assets/aux_arch.js
//  - assets/aux_glitch.js

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
  g1 = loadGif('./assets/images/g1.gif');
  g2 = loadGif('./assets/images/g2.gif');
  g3 = loadGif('./assets/images/g3.gif');
  g4 = loadGif('./assets/images/g4.gif');
}



function draw() {
  loader();

  if (g1.loaded() && g2.loaded() && g3.loaded() && g4.loaded()) {
    if (step < 10) {
      if (step % 2 === 0) {
        glitch();
      }
      boot();
    } else {
      hang();
    }
  }
}



function mousePressed() {
  counter();
}

function keyPressed() {
  if (keyCode == 32) {
    counter();
  }
}