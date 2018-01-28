function glitch() {
  design();
  tint(255, 255);
  fill(209, 210, 211);
  rect(580, 145, 345, 305);
  img(b0);

  k1 = 0;
  k2 = 0;
  k3 = 0;
  k4 = 0;

  if (g1.loaded()) {
    img(g1);
  }
  if (g2.loaded()) {
    img(g2);
  }
  if (g3.loaded()) {
    img(g3);
  }
  if (g4.loaded()) {
    img(g4);
  }


}



function hang() {
  var div = createDiv('\u0032');
  div.addClass('glitch');
  background(209, 210, 211, 191);
  var m1 = 'uh oh.';
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

  print('no');
  noLoop();
}