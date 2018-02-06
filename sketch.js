// for additional details, view the auxiliary files:
//  - code/aux_!globals.js
//  - code/aux_control.js
//  - code/aux_graphics.js
//  - code/aux_interaction.js
//  - code/aux_screens.js

function preload() {
  regular = loadFont('./assets/fonts/RobotoMono-Regular.ttf');
  medium = loadFont('./assets/fonts/RobotoMono-Medium.ttf');
  bold = loadFont('./assets/fonts/RobotoMono-Bold.ttf');

  brain0 = loadImage('./assets/images/brain0.png');
  brain1 = loadImage('./assets/images/brain1.png');
  brain2 = loadImage('./assets/images/brain2.png');
  brain3 = loadImage('./assets/images/brain3.png');
  brain4 = loadImage('./assets/images/brain4.png');
  brainG = loadGif('./assets/images/brainG.gif');

  audio0 = loadSound('./assets/sounds/audio0.ogg');
  audio1 = loadSound('./assets/sounds/audio1.ogg');
  audio2 = loadSound('./assets/sounds/audio2.ogg');
  audio3 = loadSound('./assets/sounds/audio3.ogg');
  audio4 = loadSound('./assets/sounds/audio4.ogg');
  audioG = loadSound('./assets/sounds/audioG.ogg');
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
    debug_frames(0);
    debug_play(0);
    debug_int(0);
  }
}



function mouseClicked() {
  if (booted) {
    if (state != 2) {
      state++;
    }
    if (state == 2) {
      interactClick();
    }
  }
}
