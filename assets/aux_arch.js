function counter() {
  if (step < 10) {
    background(209, 210, 211);
    step++;
    img(b0);
    roll();
    //print('steps: ' + step);
  } else {
    print('no');
    noLoop();
  }
  design();
}



function roll() {
  var k1 = 255;
  var k2 = 255;
  var k3 = 255;
  var k4 = 255;

  h = floor(random() * heights.length);

  if (step % 2 !== 0) {
    switch (h) {
      case 0:
        k1 = 0;
        break;
      case 1:
        k2 = 0;
        break;
      case 2:
        k3 = 0;
        break;
      case 3:
        k4 = 0;
        break;
    }
  }

  textSize(20);
  textAlign(LEFT);
  textFont(md);
  fill(254, 250, 224);

  f = floor(random() * frontal.length);
  text(frontal[f], 176, heights[0]);
  text(actionF[f], 176, heights[0] + 224);
  tint(255, k1);
  img(b1);

  p = floor(random() * parietal.length);
  text(parietal[p], 176, heights[1]);
  text(actionP[p], 176, heights[1] + 224);
  tint(255, k2);
  img(b2);

  o = floor(random() * actionO.length);
  text(occipital[0], 176, heights[2]);
  text(actionO[o], 176, heights[2] + 224);
  tint(255, k3);
  img(b3);

  t = floor(random() * temporal.length);
  text(temporal[t], 176, heights[3]);
  text(actionT[t], 176, heights[3] + 224);
  tint(255, k4);
  img(b4);

  if (step % 2 !== 0) {
    fill(209, 210, 211);
    rect(171, heights[h] - 18, 250, 40);
    rect(171, heights[h] + 200, 400, 35);
    //print('height: ' + heights[h]);
  }

  tint(255, 255);
}