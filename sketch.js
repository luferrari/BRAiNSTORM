var same;
var chosen = [];
var i;
var bg = 204;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204);
  textSize(25);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(bg);
  slots();
}

function slots() {
  var List = [
    'motor control',
    'problem solving',
    'speech',
    'smell',
    'hearing',
    'facial recognition',
    'touch',
    'taste',
    'body awareness',
    'language',
    'reading',
    'vision',
    'coordination',
    '\u2003',
    '\u2003',
    '\u2003',
    '\u2003',
    '\u2003',
    '\u2003',
    '\u2003'
  ]

  for (var i = 0; i < 4; i++) {
    var picked = floor(random() * List.length);
    chosen[i] = List[picked];
    for (same = 0; same <= i - 1; same++) {
      if (chosen[same] == chosen[i]) {
        i--;
      }
    }
    fill(170);
    rect(width / 2 - 105, 120 + i * 50, 210, 40);
    fill(0);
    text(chosen[i], width / 2, 150 + i * 50);
  }
  noLoop();
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  loop();
}