// for additional details, view the auxiliary files:
//  - code/aux_!globals.js
//  - code/aux_mapScreen.js
//  - code/aux_graphics.js
//  - code/aux_mix.js
//  - code/aux_glitchScreen.js

function preload() {
  fonts();
  images();
  sounds();
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
  audio0.loop(0, 1, 0.27);
  audio1.loop(0, 1, 0.0001);
  audio2.loop(0, 1, 0.0001);
  audio3.loop(0, 1, 0.0001);
  audio4.loop(0, 1, 0.0001);
}

function drew() {
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
}

// map screen test
function draw() {
  mapScreen();
}

function mousePressed() {
  changeState();
}

function keyPressed() {
  if (keyCode == 32) {
    changeState();
  }
}