var same, i, reg, med, bld;
var chosen = [];

function preload() {
  reg = loadFont('./assets/fonts/RobotoMono-Regular.ttf');
  med = loadFont('./assets/fonts/RobotoMono-Medium.ttf');
  bld = loadFont('./assets/fonts/RobotoMono-Bold.ttf');
}

function setup() {
  createCanvas(1088, 612);
  background(209, 210, 211);
  noStroke();

}

function draw() {
  background(209, 210, 211);
  frame();
  slots();
}



function frame() {
  var frameTop = 'click to reroll';
  var frameBottom = 'action:';

  textSize(15);
  fill(71, 40, 54);
  textFont(med);
  textAlign(LEFT);
  text(frameTop, 136, 192);

  textFont(bld);
  textAlign(CENTER);
  var ol = ['I.', 'II.', 'III.', 'IV.'];
  for (var i = 0; i < ol.length; i++) {
    text(ol[i], 132, 256 + i * 36);
  }

  textAlign(RIGHT);
  text(frameBottom, 146, 480);
  brackets();
}



function brackets() {
  noFill();

  stroke(254, 250, 224);
  strokeWeight(2.5);

  beginShape();
  vertex(520, 208);
  vertex(520, 192);
  vertex(528, 192);
  endShape();
  beginShape();
  vertex(520, 320);
  vertex(520, 336);
  vertex(528, 336);
  endShape();

  beginShape();
  vertex(672, 128);
  vertex(672, 120);
  vertex(688, 120);
  endShape();
  beginShape();
  vertex(840, 120);
  vertex(856, 120);
  vertex(856, 128);
  endShape();

  beginShape();
  vertex(968, 264);
  vertex(976, 264);
  vertex(976, 280);
  endShape();
  beginShape();
  vertex(976, 376);
  vertex(976, 392);
  vertex(968, 392);
  endShape();

  beginShape();
  vertex(632, 448);
  vertex(632, 456);
  vertex(648, 456);
  endShape();
  beginShape();
  vertex(712, 456);
  vertex(728, 456);
  vertex(728, 448);
  endShape();

  noStroke();
  textSize(35);
  textFont(reg);
  fill(98, 73, 84);
  text('f', 520, 280);
  text('p', 772, 120);
  text('o', 992, 340);
  text('t', 688, 480);
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