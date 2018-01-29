function glitch() {
  tint(255, 255);
  fill(209, 210, 211);
  rect(560, 145, 390, 315);
  img(b0);

  k1 = 0;
  k2 = 0;
  k3 = 0;
  k4 = 0;

  gif();
}



function hang() {
  var div = createDiv('\u0032');
  div.addClass('glitch');
  background(209, 210, 211, 191);
  var m1 = 'uh oh. :(';
  var m2 = 'an overload has occured. please refresh.';

  fill(0);
  textAlign(CENTER);
  textSize(80);
  textFont(rg);
  text(m1, width / 2, height - 112);
  textSize(40);
  textFont(md);
  text(m2, width / 2, height - 40);

  filter(INVERT);

  noLoop();
}