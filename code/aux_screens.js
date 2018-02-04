function loadingScreen() {
  noStroke();
  fill(71, 40, 54, aleph);
  textAlign(LEFT);
  textSize(10);
  textFont(regular);
  text('loading...', width / 2, height - 10);
  text('loading...', width / 2, 15);
}



function startScreen() {
  aleph = 0;

  noStroke();
  if (state === 0) {
    fill(209, 210, 211, 255);
    rect(0, 0, width, height);

    fill(98, 73, 84);
    textAlign(CENTER);
    textSize(80);
    textFont(regular);
    text('BRAiNSTORM', width / 2, height / 2);

    fill(71, 40, 54);
    textSize(20);
    textFont(medium);
    text('click to start', width / 2, height / 2 + 140);
  } else {
    fill(0, 0, 0, 0);
  }
}



function mapScreen() {
  background(209, 210, 211);

  opa1 = random(pulse[0], pulse[1]);
  opa2 = random(pulse[0], pulse[1]);
  opa3 = random(pulse[0], pulse[1]);
  opa4 = random(pulse[0], pulse[1]);

  translate(-216, 10);
  brackets();
  translate(216, 0);

  graph(brain0);

  if (405 <= mouseX && mouseX <= 405 + 80 && 233 <= mouseY && mouseY <= 233 + 90) {
    audio1.setVolume(0.8, 0.25);
    hov1 = random(stay[0], stay[1]);
    label('frontal', frontal, 520, 272, RIGHT);
  } else {
    audio1.setVolume(0.0001, 0.25);
    hov1 = random(pulse[0], pulse[1]);
  }

  if (505 <= mouseX && mouseX <= 505 + 154 && 193 <= mouseY && mouseY <= 193 + 90) {
    audio2.setVolume(0.8, 0.25);
    hov2 = random(stay[0], stay[1]);
    label('parietal', parietal, 780, 112, CENTER);
  } else {
    audio2.setVolume(0.0001, 0.25);
    hov2 = random(pulse[0], pulse[1]);
  }

  if (675 <= mouseX && mouseX <= 675 + 15 && 303 <= mouseY && mouseY <= 303 + 61) {
    audio3.setVolume(0.8, 0.25);
    hov3 = random(stay[0], stay[1]);
    label('occipital', occipital, 988, 328, LEFT);
  } else {
    audio3.setVolume(0.0001, 0.25);
    hov3 = random(pulse[0], pulse[1]);
  }

  if (492 <= mouseX && mouseX <= 492 + 146 && 307 <= mouseY && mouseY <= 307 + 52) {
    audio4.setVolume(0.8, 0.25);
    hov4 = random(stay[0], stay[1]);
    label('temporal', temporal, 782, 496, CENTER);
  } else {
    audio4.setVolume(0.0001, 0.25);
    hov4 = random(pulse[0], pulse[1]);
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

  translate(0, -10);

  fill(71, 40, 54);
  textSize(16);
  textFont(medium);
  textAlign(LEFT);
  fill(71, 40, 54);
  text('hover your mouse over the brain to learn what each lobe is for.', 20, 16, 320, 100);
  text('when you are done, click to continue.', 20, 87);
}



function playScreen() {
  graphics();

  opa1 = random(pulse[0], pulse[1]);
  opa2 = random(pulse[0], pulse[1]);
  opa3 = random(pulse[0], pulse[1]);
  opa4 = random(pulse[0], pulse[1]);

  tint(255, 255);

  img(brain0);

  textSize(20);
  textAlign(LEFT);
  textFont(medium);
  fill(254, 250, 224);

  tint(255, opa1);
  //r1 = floor(random() * frontal.length);
  //text(frontal[r1], 176, heights[0]);
  //text(action1[r1], 176, heights[0] + 224);
  img(brain1);

  tint(255, opa2);
  //r2 = floor(random() * parietal.length);
  //text(parietal[r2], 176, heights[1]);
  //text(action2[r2], 176, heights[1] + 224);
  img(brain2);

  tint(255, opa3);
  //text(occipital[0], 176, heights[2]);
  //r3 = floor(random() * action3.length);
  //text(action3[r3], 176, heights[2] + 224);
  img(brain3);

  tint(255, opa4);
  //r4 = floor(random() * temporal.length);
  //text(temporal[r4], 176, heights[3]);
  //text(action4[r4], 176, heights[3] + 224);
  img(brain4);

  interactDraw();
}



function glitchScreen() {
  tint(255, 255);
  fill(209, 210, 211);
  rect(560, 145, 390, 315);
  img(brain0);

  opa1 = 0, opa2 = 0, opa3 = 0, opa4 = 0;

  gif();
}



function hangScreen() {
  var div = createDiv('\u0032');
  div.addClass('glitch');
  background(209, 210, 211, 127);
  var message1 = 'uh oh. :(';
  var message2 = 'an overload has occured. please refresh.';

  fill(0);
  textAlign(CENTER);
  textSize(80);
  textFont(regular);
  text(message1, width / 2, height - 112);
  textSize(40);
  textFont(medium);
  text(message2, width / 2, height - 40);

  filter(INVERT);

  noLoop();
}