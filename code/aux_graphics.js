function label(string, part, posX, posY) {
  fill(209, 210, 211);
  switch (part) {
    case frontal:
      rect(posX - 206, posY - 30, -40, 40);
      break;
    case parietal:
      rect(posX - 236, posY + 10, 40, -40);
      break;
    case occipital:
      rect(posX - 226, posY - 27, 40, 40);
      break;
    case temporal:
      rect(posX - 196, posY + 5, -40, -40);
      break;
    default:
      return false;
  }

  fill(98, 73, 84);
  switch (part) {
    case frontal:
      textAlign(RIGHT);
      text(string, posX - 216, posY);
      textAlign(LEFT);
      textFont(medium);
      textSize(16);
      for (var c1 = 0; c1 < part.length; c1++) {
        text(part[c1], posX - 356, posY + 5 + 18 * c1, 200, 20);
      }
      break;
    case parietal:
      textAlign(CENTER);
      text(string, posX - 216, posY);
      textAlign(LEFT);
      textFont(medium);
      textSize(16);
      for (var c2 = 0; c2 < part.length; c2++) {
        text(part[c2], posX - 297, posY - 105 + 18 * c2, 200, 20);
      }
      break;
    case occipital:
      textAlign(LEFT);
      text(string, posX - 225.5, posY);
      textFont(medium);
      textSize(16);
      for (var c3 = 0; c3 < part.length; c3++) {
        text(part[c3], posX - 226, posY + 5 + 18 * c3, 200, 20);
      }
      break;
    case temporal:
      textAlign(CENTER);
      text(string, posX - 216, posY);
      textAlign(LEFT);
      textFont(medium);
      textSize(16);
      for (var c4 = 0; c4 < part.length; c4++) {
        text(part[c4], posX - 295, posY + 7 + 18 * c4, 200, 20);
      }
      break;
    default:
      return false;
  }
}



function graphics() {
  background(209, 210, 211);

  var caption1 = 'click on each lobe to activate it.';
  var caption2 = 'doing now:';

  textSize(15);
  fill(71, 40, 54);
  textFont(medium);
  textAlign(LEFT);
  text(caption1, 136, 192 - 80);

  textFont(bold);
  textAlign(RIGHT);
  var ol = ['f.', 'p.', 'o.', 't.'];
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
  vertex(532, 192);
  vertex(532, 176);
  vertex(540, 176);
  endShape();
  beginShape();
  vertex(532, 320);
  vertex(532, 336);
  vertex(540, 336);
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
  text('f', 520, 272);
  text('p', 780, 112);
  text('o', 988, 328);
  text('t', 782, 496);
}