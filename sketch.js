var same, i;
var chosen = [];
var reg, med, bld;
var b0, b1, b2, b3, b4;

function preload() {
  reg = loadFont('./assets/fonts/RobotoMono-Regular.ttf');
  med = loadFont('./assets/fonts/RobotoMono-Medium.ttf');
  bld = loadFont('./assets/fonts/RobotoMono-Bold.ttf');
  b0 = loadImage('./assets/images/b0.png');
  b1 = loadImage('./assets/images/b1.png');
  b2 = loadImage('./assets/images/b2.png');
  b3 = loadImage('./assets/images/b3.png');
  b4 = loadImage('./assets/images/b4.png');
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
}

function img(x) {
  image(x, 520, 56, 480, 480);
}

function draw() {
  background(209, 210, 211);
  img(b0);
  img(b1);
  img(b2);
  img(b3);
  img(b4);
  noStroke();

  frame();
  slots();
}



function frame() {
  var f1 = 'click or press space to reroll';
  var f2 = 'action:';

  textSize(15);
  fill(71, 40, 54);
  textFont(med);
  textAlign(LEFT);
  text(f1, 136, 192);

  textFont(bld);
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
  textFont(reg);
  fill(98, 73, 84);
  text('f', 508, 272);
  text('p', 780, 112);
  text('o', 988, 328);
  text('t', 782, 496);
}



function slots() {
  textSize(20);
  textAlign(LEFT);
  textFont(med);
  fill(254, 250, 224);

  var len = 250;
  var Functions = ['motor control', 'problem solving', 'speech', 'smell', 'hearing', 'facial recognition',
    'touch', 'taste', 'body awareness', 'language', 'reading', 'vision', 'coordination',
    '-', '-', '-', '-', '-', '-', '-', '-'
  ]

  for (var j = 0; j < 4; j++) {
    var picked = floor(random() * Functions.length);
    chosen[j] = Functions[picked];
    for (same = 0; same <= j - 1; same++) {
      if (chosen[same] == chosen[j]) {
        j--;
      }
    }
    text(chosen[j], 176, 256 + j * 36);
  }

  text('xxx', 176, 480);

  noLoop();
}

function mousePressed() {
  loop();
}

function keyPressed() {
  if (keyCode == 32) {
    loop();
  }
}