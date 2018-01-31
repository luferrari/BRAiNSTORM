function changeState() {
  if (booted) {
    if (state < 10) {
      background(209, 210, 211);
      state++;
      img(brain0);
      mix();
      graphics();
    } else {
      noLoop();
    }
  }
}



function mix() {
  var opac1 = 255;
  var opac2 = 255;
  var opac3 = 255;
  var opac4 = 255;

  hidden = floor(random() * heights.length);

  if (state % 2 !== 0) {
    switch (hidden) {
      case 0:
        opac1 = 0;
        break;
      case 1:
        opac2 = 0;
        break;
      case 2:
        opac3 = 0;
        break;
      case 3:
        opac4 = 0;
        break;
      default:
        return false;
    }
  }

  textSize(20);
  textAlign(LEFT);
  textFont(medium);
  fill(254, 250, 224);

  f = floor(random() * frontal.length);
  text(frontal[f], 176, heights[0]);
  text(actionF[f], 176, heights[0] + 224);
  tint(255, opac1);
  img(brain1);

  p = floor(random() * parietal.length);
  text(parietal[p], 176, heights[1]);
  text(actionP[p], 176, heights[1] + 224);
  tint(255, opac2);
  img(brain2);

  o = floor(random() * actionO.length);
  text(occipital[0], 176, heights[2]);
  text(actionO[o], 176, heights[2] + 224);
  tint(255, opac3);
  img(brain3);

  t = floor(random() * temporal.length);
  text(temporal[t], 176, heights[3]);
  text(actionT[t], 176, heights[3] + 224);
  tint(255, opac4);
  img(brain4);

  if (state % 2 !== 0) {
    fill(209, 210, 211);
    rect(171, heights[hidden] - 18, 250, 40);
    rect(171, heights[hidden] + 200, 400, 35);
  }

  tint(255, 255);
}
