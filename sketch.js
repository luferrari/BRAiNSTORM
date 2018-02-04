// for additional details, view the auxiliary files:
//  - code/aux_!globals.js
//  - code/aux_control.js
//  - code/aux_graphics.js
//  - code/aux_screens.js

function preload() {
  fonts();
  images();
  sounds();
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
  audio0.loop(0, 1, 0.0001);
  audio1.loop(0, 1, 0.0001);
  audio2.loop(0, 1, 0.0001);
  audio3.loop(0, 1, 0.0001);
  audio4.loop(0, 1, 0.0001);
  audioG.loop(0, 1, 0.0001);
}

function draw() {
  loadingScreen();

  if (brainG.loaded()) {
    booted = true;
    stateCheck();
    if (state == 2) {
      playScreen();
    }
  }
}



function mouseClicked() {
  if (booted) {
    switch (state) {}
    if (state !== 2) {
      state++;
      print(state);
    }
    if (state == 2) {
      interactClick();
    }
  }
}

function keyPressed() {
  for (var arr = 37; arr < 41; arr++) {
    if (keyCode == arr) {
      print(sel[arr - 37]);
    }
  }
}