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
  audio0.loop(0, 1, ON);
  audio1.loop(0, 1, OFF);
  audio2.loop(0, 1, OFF);
  audio3.loop(0, 1, OFF);
  audio4.loop(0, 1, OFF);
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