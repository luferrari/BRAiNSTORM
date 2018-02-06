function interactDraw() {
  tint(255, int1);
  img(brain1);
  tint(255, int2);
  img(brain2);
  tint(255, int3);
  img(brain3);
  tint(255, int4);
  img(brain4);

  textSize(20);
  textAlign(LEFT);
  textFont(medium);

  fill(254, 250, 224, int1);
  text(frontal[r1], 176, heights[0]);
  text(action1[r1], 176, heights[0] + 224);

  fill(254, 250, 224, int2);
  text(parietal[r2], 176, heights[1]);
  text(action2[r2], 176, heights[1] + 224);

  fill(254, 250, 224, int3);
  text(occipital[0], 176, heights[2]);
  text(action3[r3], 176, heights[2] + 224);

  fill(254, 250, 224, int4);
  text(temporal[r4], 176, heights[3]);
  text(action4[r4], 176, heights[3] + 224);


  push(); // bars
  var barc = ['#ffa700', '#ff7777', '#6ded94', '#6cbbe6'];
  var col = random(barc);
  var hh = 10;

  fill(200);
  rect(50 + 44, 562 - 10, 150, hh);
  rect(300 + 44, 562 - 10, 150, hh);
  rect(550 + 44, 562 - 10, 150, hh);
  rect(800 + 44, 562 - 10, 150, hh);
  if (e > 0) {
    rect(50 + 44, 592 - 10, 70, hh);
  }

  if (a < 150) {
    fill('#ffe5b5');
  } else {
    fill(random(70, 150));
  }
  rect(50 + 44, 562 - 10, a, hh);

  if (b < 150) {
    fill('#ffcaca');
  } else {
    fill(random(70, 150));
  }
  rect(300 + 44, 562 - 10, b, hh);

  if (c < 150) {
    fill('#d4ffe1');
  } else {
    fill(random(70, 150));
  }
  rect(550 + 44, 562 - 10, c, hh);

  if (d < 150) {
    fill('#d4effd');
  } else {
    fill(random(70, 150));
  }
  rect(800 + 44, 562 - 10, d, hh);

  fill(200);
  rect(50 + 44, 592 - 10, 900, hh);

  if (bugged) {
    fill(col);
    tint(255, random());
  } else {
    fill(250);
  }
  if (e > 0 && e < 1000) {
    rect(50 + 44, 592 - 10, e, hh);
  }
  pop();
}



function interactClick() {
  if (621 < mouseX && mouseX < 621 + 80 && 223 < mouseY && mouseY < 223 + 90) {
    bool1 = !bool1;
    if (bool1) { // frontal on
      int1 = 255;
      r1 = floor(random() * frontal.length);
      audio1.setVolume(0.6, 0.25);
    } else { // frontal off
      int1 = 0;
      audio1.setVolume(0.0001, 0.25);
    }
  } else if (721 < mouseX && mouseX < 721 + 154 && 183 < mouseY && mouseY < 183 + 90) {
    bool2 = !bool2;
    if (bool2) { // parietal on
      int2 = 255;
      r2 = floor(random() * parietal.length);
      audio2.setVolume(0.6, 0.25);
    } else { // parietal off
      int2 = 0;
      audio2.setVolume(0.0001, 0.25);
    }
  } else if (891 < mouseX && mouseX < 891 + 15 && 293 < mouseY && mouseY < 293 + 61) {
    bool3 = !bool3;
    if (bool3) { // occipital on
      int3 = 255;
      r3 = floor(random() * action3.length);
      audio3.setVolume(0.6, 0.25);
    } else { // occipital off
      int3 = 0;
      audio3.setVolume(0.0001, 0.25);
    }
  } else if (708 < mouseX && mouseX < 708 + 146 && 297 < mouseY && mouseY < 297 + 61) {
    bool4 = !bool4;
    if (bool4) { // temporal on
      int4 = 255;
      r4 = floor(random() * temporal.length);
      audio4.setVolume(0.6, 0.25);
    } else { // temporal off
      int4 = 0;
      audio4.setVolume(0.0001, 0.25);
    }
  }
}
