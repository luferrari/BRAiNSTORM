// for additional details, view the auxiliary files:
//  - code/aux_!globals.js
//  - code/aux_mapScreen.js
//  - code/aux_graphics.js
//  - code/aux_mix.js
//  - code/aux_glitchScreen.js

function preload() {
  fonts();
  images();
  /*sounds();*/
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
}

/*function draw() {
  loadingScreen();

  if (brainG.loaded()) {
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
}*/

function mousePressed() {
  changeState();
}

function keyPressed() {
  if (keyCode == 32) {
    changeState();
  }
}


function draw() {
  mapScreen();
}