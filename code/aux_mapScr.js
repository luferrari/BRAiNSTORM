function mapScreen() {
  hov1, hov2, hov3, hov4 = 0;
  x = mouseX;
  y = mouseY;

  if (405 <= x && x <= 405 + 80 && 233 <= y && y <= 233 + 90) {
    audio1.setVolume(ON, 0.25);
    hov1 = 255;
  } else {
    audio1.setVolume(OFF, 0.25);
    hov1 = 0;
  }

  if (505 <= x && x <= 505 + 154 && 193 <= y && y <= 193 + 90) {
    audio2.setVolume(ON, 0.25);
    hov2 = 255;
  } else {
    audio2.setVolume(OFF, 0.25);
    hov2 = 0;
  }

  if (675 <= x && x <= 675 + 15 && 303 <= y && y <= 303 + 61) {
    audio3.setVolume(ON, 0.25);
    hov3 = 255;
  } else {
    audio3.setVolume(OFF, 0.25);
    hov3 = 0;
  }

  if (492 <= x && x <= 492 + 146 && 307 <= y && y <= 307 + 52) {
    audio4.setVolume(ON, 0.25);
    hov4 = 255;
  } else {
    audio4.setVolume(OFF, 0.25);
    hov4 = 0;
  }

  graph(brain0);

  tint(255, hov1);
  graph(brain1);
  //rect(405, 233, 80, 90);
  tint(255, hov2);
  graph(brain2);
  //rect(505, 193, 154, 90);
  tint(255, hov3);
  graph(brain3);
  //rect(675, 303, 15, 61);
  tint(255, hov4);
  graph(brain4);
  //rect(492, 307, 146, 52);

  tint(255, 255);
}