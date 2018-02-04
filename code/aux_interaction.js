function interactDraw() {
  tint(255, act1);
  img(brain1);
  tint(255, act2);
  img(brain2);
  tint(255, act3);
  img(brain3);
  tint(255, act4);
  img(brain4);
}



function interactClick() {
  if (621 < mouseX && mouseX < 621 + 80 && 223 < mouseY && mouseY < 223 + 90) {
    bool1 = !bool1;
    if (bool1) {
      audio1.setVolume(0.8, 0.25);
      act1 = 255;
      print('frontal on');
    } else {
      audio1.setVolume(0.0001, 0.25);
      act1 = 0;
      print('frontal off');
    }
  } else if (721 < mouseX && mouseX < 721 + 154 && 183 < mouseY && mouseY < 183 + 90) {
    bool2 = !bool2;
    if (bool2) {
      audio2.setVolume(0.8, 0.25);
      act2 = 255;
      print('parietal on');
    } else {
      audio2.setVolume(0.0001, 0.25);
      act2 = 0;
      print('parietal off');
    }
  } else if (891 < mouseX && mouseX < 891 + 15 && 293 < mouseY && mouseY < 293 + 61) {
    bool3 = !bool3;
    if (bool3) {
      audio3.setVolume(0.8, 0.25);
      act3 = 255;
      print('occipital on');
    } else {
      audio3.setVolume(0.0001, 0.25);
      act3 = 0;
      print('occipital off');
    }
  } else if (708 < mouseX && mouseX < 708 + 146 && 297 < mouseY && mouseY < 297 + 61) {
    bool4 = !bool4;
    if (bool4) {
      audio4.setVolume(0.8, 0.25);
      act4 = 255;
      print('temporal on');
    } else {
      audio4.setVolume(0.0001, 0.25);
      act4 = 0;
      print('temporal off');
    }
  } else {}
}