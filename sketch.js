// for additional details, view the auxiliary files:
//  - code/aux_!globals.js
//  - code/aux_mapScreen.js
//  - code/aux_graphics.js
//  - code/aux_mix.js
//  - code/aux_glitchScreen.js

function preload() {
  regular = loadFont('./assets/fonts/RobotoMono-Regular.ttf');
  medium = loadFont('./assets/fonts/RobotoMono-Medium.ttf');
  bold = loadFont('./assets/fonts/RobotoMono-Bold.ttf');
  brain0 = loadImage('./assets/images/brain0.png');
  brain1 = loadImage('./assets/images/brain1.png');
  brain2 = loadImage('./assets/images/brain2.png');
  brain3 = loadImage('./assets/images/brain3.png');
  brain4 = loadImage('./assets/images/brain4.png');
  glitched = loadGif('./assets/images/glitched.gif');
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
}



function draw() {
  loadingScreen();

  if (glitched.loaded()) {
    booted = true;
    if (state < 10) {
      if (state % 2 === 0) {
        glitchScreen();
      }
      startScreen();
    } else {
      glitchScreen();
      hangScreen();
    }
  }
}



function mousePressed() {
  changeState();
}

function keyPressed() {
  if (keyCode == 32) {
    changeState();
  }
}