function glitchScreen() {
  tint(255, 255);
  fill(209, 210, 211);
  rect(560, 145, 390, 315);
  img(brain0);

  opac1 = 0;
  opac2 = 0;
  opac3 = 0;
  opac4 = 0;

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
