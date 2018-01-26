function start() {
  noStroke();
  if (click === 0) {
    fill(209, 210, 211, 255);
    rect(0, 0, width, height);
    fill(71, 40, 54);
    textSize(height / 15);
    textFont(rg);
    textAlign(CENTER);
    text('click or press space to begin', width / 2, height / 2);
  } else {
    fill(0, 0, 0, 0);
  }
}


function img(x) {
  image(x, 520, 56, 480, 480);
}

function design() {
  var f1 = 'click or press space to reroll';
  var f2 = 'action:';

  textSize(15);
  fill(71, 40, 54);
  textFont(md);
  textAlign(LEFT);
  text(f1, 136, 192);

  textFont(bd);
  textAlign(RIGHT);
  var ol = ['I.', 'II.', 'III.', 'IV.'];
  for (var i = 0; i < ol.length; i++) {
    text(ol[i], 152, 256 + i * 36);
  }

  text(f2, 152, 480);

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
  textFont(rg);
  fill(98, 73, 84);
  text('f', 508, 272);
  text('p', 780, 112);
  text('o', 988, 328);
  text('t', 782, 496);
}