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
    fill(0, 0);
  }
}



function mapScreen() {
  background(209, 210, 211);

  translate(-216, 10);
  brackets();
  translate(216, 0);

  graph(brain0);

  if (405 <= mouseX && mouseX <= 405 + 80 && 233 <= mouseY && mouseY <= 233 + 90) {
    bool1 = true;
    audio1.setVolume(0.8, 0.25);
    hov1 = 255;
    label('frontal', frontal, 520, 272, RIGHT);
  } else {
    bool1 = false;
    audio1.setVolume(0.0001, 0.25);
    hov1 = floor(random(15, 112));
  }

  if (505 <= mouseX && mouseX <= 505 + 154 && 193 <= mouseY && mouseY <= 193 + 90) {
    bool2 = true;
    audio2.setVolume(0.8, 0.25);
    hov2 = 255;
    label('parietal', parietal, 780, 112, CENTER);
  } else {
    bool2 = false;
    audio2.setVolume(0.0001, 0.25);
    hov2 = floor(random(15, 112));
  }

  if (675 <= mouseX && mouseX <= 675 + 15 && 303 <= mouseY && mouseY <= 303 + 61) {
    bool3 = true;
    audio3.setVolume(0.8, 0.25);
    hov3 = 255;
    label('occipital', occipital, 987, 328, LEFT);
  } else {
    bool3 = false;
    audio3.setVolume(0.0001, 0.25);
    hov3 = floor(random(15, 112));
  }

  if (492 <= mouseX && mouseX <= 492 + 146 && 307 <= mouseY && mouseY <= 307 + 52) {
    bool4 = true;
    audio4.setVolume(0.8, 0.25);
    hov4 = 255;
    label('temporal', temporal, 782, 496, CENTER);
  } else {
    bool4 = false;
    audio4.setVolume(0.0001, 0.25);
    hov4 = floor(random(15, 112));
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
  text('hover your mouse over the brain to learn what each lobe is for.', 20, height - 79, 320, 100);
  text('when you are done, click to continue.', 20, height - 22);
}



function playScreen() {
  graphics();

  if ((bool1 && bool2 && bool3 && bool4) !== true) {
    opa1_2 = floor(random(15, 112)),
      opa2_2 = floor(random(15, 112)),
      opa3_2 = floor(random(15, 112)),
      opa4_2 = floor(random(15, 112));
  } else {
    opa1_2 = 0,
      opa2_2 = 0,
      opa3_2 = 0,
      opa4_2 = 0;
  }

  tint(255, 255);

  img(brain0);

  tint(255, opa1_2);
  img(brain1);

  tint(255, opa2_2);
  img(brain2);

  tint(255, opa3_2);
  img(brain3);

  tint(255, opa4_2);
  img(brain4);

  interactDraw();

  glitchScreen();
}



function glitchScreen() {
  /*if (state == 2) {
    if (bool1 && bool2 && bool3 && bool4) {
      a++;
      if (a % 6 === 0) {
        b++;
        if (b == 6) {
          bugged = true;
          bool1 = false, bool2 = false, bool3 = false, bool4 = false;
        }
      }
    } else {
      a = 0;
    }
  }*/

  a = bool1 ? (a < 150 ? a + 30 : 150) : (a > 0 ? a - 30 : 0);
  b = bool2 ? (b < 150 ? b + 30 : 150) : (b > 0 ? b - 30 : 0);
  c = bool3 ? (c < 150 ? c + 30 : 150) : (c > 0 ? c - 30 : 0);
  d = bool4 ? (d < 150 ? d + 30 : 150) : (d > 0 ? d - 30 : 0);
  e = a > 140 && b > 140 && c > 140 && d > 140 ? (e < 1100 ? e + 100 : 1100) : (e > 0 ? e - 70 : 0);
  if (e > 1000) {
    bugged = true;
    e = 0;
  }

  if (bugged) {
    act1 = 0,
      act2 = 0,
      act3 = 0,
      act4 = 0;
    opa1_2 = 0,
      opa2_2 = 0,
      opa3_2 = 0,
      opa4_2 = 0;

    // a = 0, b = 0, c++;

    tint(255, 255);
    fill(209, 210, 211);
    rect(560, 145, 390, 315);
    img(brain0);

    gif();
    // audio0.setVolume(0.0001, 0.25),
      audio1.setVolume(0.0001, 0.25),
      audio2.setVolume(0.0001, 0.25),
      audio3.setVolume(0.0001, 0.25),
      audio4.setVolume(0.0001, 0.25),
      audioG.setVolume(0.7, 0.25);

    if (e > 900) {
      hangScreen();
    }
  }
}



function hangScreen() {
  state = 3;
  
  audio0.stop(),
    audio1.stop(),
    audio2.stop(),
    audio3.stop(),
    audio4.stop(),
    audioG.stop();

  var bg = createDiv('\u0032');
  bg.addClass('glitch');
  background(209, 210, 211, 127);
  var message1 = 'uh oh. :(';
  var message2 = 'an overload has occurred. please refresh.';

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
