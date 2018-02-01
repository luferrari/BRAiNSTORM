function mapScreen() {
  background(209, 210, 211);

  hov1, hov2, hov3, hov4 = 0;
  x = mouseX;
  y = mouseY;

  translate(-216, 10);
  brackets();
  translate(216, 0);

  graph(brain0);

  if (405 <= x && x <= 405 + 80 && 233 <= y && y <= 233 + 90) {
    audio1.setVolume(0.8, 0.25);
    hov1 = 255;
    label('frontal', frontal, 520, 272, RIGHT);
  } else {
    audio1.setVolume(0.0001, 0.25);
    hov1 = 0;
  }

  if (505 <= x && x <= 505 + 154 && 193 <= y && y <= 193 + 90) {
    audio2.setVolume(0.8, 0.25);
    hov2 = 255;
    label('parietal', parietal, 780, 112, CENTER);
  } else {
    audio2.setVolume(0.0001, 0.25);
    hov2 = 0;
  }

  if (675 <= x && x <= 675 + 15 && 303 <= y && y <= 303 + 61) {
    audio3.setVolume(0.8, 0.25);
    hov3 = 255;
    label('occipital', occipital, 988, 328, LEFT);
  } else {
    audio3.setVolume(0.0001, 0.25);
    hov3 = 0;
  }

  if (492 <= x && x <= 492 + 146 && 307 <= y && y <= 307 + 52) {
    audio4.setVolume(0.8, 0.25);
    hov4 = 255;
    label('temporal', temporal, 782, 496, CENTER);
  } else {
    audio4.setVolume(0.0001, 0.25);
    hov4 = 0;
  }

  tint(255, hov1);
  graph(brain1);
  tint(255, hov2);
  graph(brain2);
  tint(255, hov3);
  graph(brain3);
  tint(255, hov4);
  graph(brain4);

  tint(255, 255);

}

function label(string, part, posX, posY) {
  fill(209, 210, 211);
  switch (part) {
    case frontal:
      rect(posX - 206, posY - 20, -40, 40);
      break;
    case parietal:
      rect(posX - 236, posY + 20, 40, -40);
      break;
    case occipital:
      rect(posX - 226, posY - 17, 40, 40);
      break;
    case temporal:
      rect(posX - 196, posY + 15, -40, -40);
      break;
    default:
      return false;
  }

  fill(98, 73, 84);
  switch (part) {
    case frontal:
      textAlign(RIGHT);
      text(string, posX - 216, posY - 30);
      textAlign(LEFT);
      textFont(medium);
      textSize(16);
      for (var c = 0; c < part.length; c++) {
        text(part[c], posX - 356, posY - 25 + 18 * c, 160, 20);
      }
      break;
    case parietal:
      textAlign(CENTER);
      text(string, posX - 216, posY + 10);
      textAlign(LEFT);
      textFont(medium);
      textSize(16);
      for (var c = 0; c < part.length; c++) {
        text(part[c], posX - 297, posY - 95 + 18 * c, 160, 20);
      }
      break;
    case occipital:
      textAlign(LEFT);
      text(string, posX - 225.5, posY + 10);
      textFont(medium);
      textSize(16);
      for (var c = 0; c < part.length; c++) {
        text(part[c], posX - 226, posY + 15 + 18 * c, 160, 20);
      }
      break;
    case temporal:
      textAlign(CENTER);
      text(string, posX - 216, posY + 10);
      textAlign(LEFT);
      textFont(medium);
      textSize(16);
      for (var c = 0; c < part.length; c++) {
        text(part[c], posX - 295, posY + 17 + 18 * c, 160, 20);
      }
      break;
    default:
      return false;
  }
}