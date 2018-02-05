function interactDraw() {
  tint(255, act1);
  img(brain1);
  tint(255, act2);
  img(brain2);
  tint(255, act3);
  img(brain3);
  tint(255, act4);
  img(brain4);

  textSize(20);
  textAlign(LEFT);
  textFont(medium);

  fill(254, 250, 224, act1);
  text(frontal[r1], 176, heights[0]);
  text(action1[r1], 176, heights[0] + 224);

  fill(254, 250, 224, act2);
  text(parietal[r2], 176, heights[1]);
  text(action2[r2], 176, heights[1] + 224);

  fill(254, 250, 224, act3);
  text(occipital[0], 176, heights[2]);
  text(action3[r3], 176, heights[2] + 224);

  fill(254, 250, 224, act4);
  text(temporal[r4], 176, heights[3]);
  text(action4[r4], 176, heights[3] + 224);

  push();
  textFont(medium);
  textSize(16);
  textAlign(LEFT);
  fill(191, 0, 0);
  text('a = ' + a + '\nb = ' + b + '\nc = ' + c, 10, height - 50);
  pop();
}



function interactClick() {

  if (621 < mouseX && mouseX < 621 + 80 && 223 < mouseY && mouseY < 223 + 90) {
    bool1 = !bool1;
    if (bool1) {
      act1 = 255;
      r1 = floor(random() * frontal.length);
      audio1.setVolume(0.6, 0.25);
      print('frontal on');
    } else {
      audio1.setVolume(0.0001, 0.25);
      act1 = 0;
      print('frontal off');
    }
  } else if (721 < mouseX && mouseX < 721 + 154 && 183 < mouseY && mouseY < 183 + 90) {
    bool2 = !bool2;
    if (bool2) {
      act2 = 255;
      r2 = floor(random() * parietal.length);
      audio2.setVolume(0.6, 0.25);
      print('parietal on');
    } else {
      audio2.setVolume(0.0001, 0.25);
      act2 = 0;
      print('parietal off');
    }
  } else if (891 < mouseX && mouseX < 891 + 15 && 293 < mouseY && mouseY < 293 + 61) {
    bool3 = !bool3;
    if (bool3) {
      act3 = 255;
      r3 = floor(random() * action3.length);
      audio3.setVolume(0.6, 0.25);
      print('occipital on');
    } else {
      audio3.setVolume(0.0001, 0.25);
      act3 = 0;
      print('occipital off');
    }
  } else if (708 < mouseX && mouseX < 708 + 146 && 297 < mouseY && mouseY < 297 + 61) {
    bool4 = !bool4;
    if (bool4) {
      act4 = 255;
      r4 = floor(random() * temporal.length);
      audio4.setVolume(0.6, 0.25);
      print('temporal on');
    } else {
      audio4.setVolume(0.0001, 0.25);
      act4 = 0;
      print('temporal off');
    }
  } else {}
}