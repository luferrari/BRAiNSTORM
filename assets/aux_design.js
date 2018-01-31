function loadingScreen() {
  noStroke();
  fill(71, 40, 54, aleph);
  textAlign(LEFT);
  textSize(10);
  textFont(regular);
  text('loading...', width / 2, height - 10);
  text('loading...', width / 2, 15);
}



function startScreen() {
  booted = true;
  aleph = 0;

  noStroke();
  if (state === 0) {
    fill(209, 210, 211, 255);
    rect(0, 0, width, height);
    fill(71, 40, 54);

    textAlign(CENTER);
    textSize(80);
<<<<<<< HEAD:assets/aux_graphics.js
    textFont(regular);
=======
    textFont(rg);
>>>>>>> 007f02a37c55aede0f70c1eae74c1bab22015064:assets/aux_design.js
    text('BRAiNSTORM', width / 2, height / 2);

    textSize(20);
    textFont(medium);
    text('click or press space to begin', width / 2, height / 2 + 140);
  } else {
    fill(0, 0, 0, 0);
  }
}



function graphics() {
  var caption1 = 'click or press space to reroll';
  var caption2 = 'doing now:';

  textSize(15);
  fill(71, 40, 54);
  textFont(medium);
  textAlign(LEFT);
  text(caption1, 136, 192 - 80);

  textFont(bold);
  textAlign(RIGHT);
  var ol = ['I.', 'II.', 'III.', 'IV.'];
  for (var li = 0; li < ol.length; li++) {
    text(ol[li], 152, 256 - 72 + li * 36);
  }

  text(caption2, 152, 480 - 72);

  brackets();
}



function brackets() {
  noFill();

  stroke(254, 250, 224);
  strokeWeight(2.5);

  beginShape(); // f
  vertex(520, 192);
  vertex(520, 176);
  vertex(528, 176);
  endShape();
  beginShape();
  vertex(520, 320);
  vertex(520, 336);
  vertex(528, 336);
  endShape();

  beginShape(); // p
  vertex(652, 128);
  vertex(652, 120);
  vertex(668, 120);
  endShape();
  beginShape();
  vertex(888, 120);
  vertex(904, 120);
  vertex(904, 128);
  endShape();

  beginShape(); // o
  vertex(968, 268);
  vertex(976, 268);
  vertex(976, 284);
  endShape();
  beginShape();
  vertex(976, 352);
  vertex(976, 368);
  vertex(968, 368);
  endShape();

  beginShape(); // t
  vertex(656, 464);
  vertex(656, 472);
  vertex(672, 472);
  endShape();
  beginShape();
  vertex(892, 472);
  vertex(908, 472);
  vertex(908, 464);
  endShape();

  noStroke();
  textAlign(CENTER);
  textSize(35);
  textFont(regular);
  fill(98, 73, 84);
  text('f', 508, 272);
  text('p', 780, 112);
  text('o', 988, 328);
  text('t', 782, 496);
}
