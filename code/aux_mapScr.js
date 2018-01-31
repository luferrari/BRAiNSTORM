// colors only, no sound

function mapScreen() {
  var hovTint1 = 0;
  var hovTint2 = 0;
  var hovTint3 = 0;
  var hovTint4 = 0;
  var hovColor1 = color(255);
  var hovColor2 = color(255);
  var hovColor3 = color(255);
  var hovColor4 = color(255);
  var x = mouseX;
  var y = mouseY;

  if (405 <= x && x <= 405 + 80 && 233 <= y && y <= 233 + 80) {
    hovColor1 = color('gold');
  } else if (505 <= x && x <= 505 + 154 && 193 <= y && y <= 193 + 90) {
    hovColor2 = color('pink');
  } else if (675 <= x && x <= 675 + 15 && 303 <= y && y <= 303 + 61) {
    hovColor3 = color('lime');
  } else if (492 <= x && x <= 492 + 146 && 307 <= y && y <= 307 + 52) {
    hovColor4 = color('cyan');
  }

  tint(255, 255);
  graph(brain0);

  //tint(255, hovTint1);
  graph(brain1);
  fill(hovColor1);
  rect(405, 233, 80, 80);

  //tint(255, hovTint2);
  graph(brain2);
  fill(hovColor2);
  rect(505, 193, 154, 90);

  //tint(255, hovTint3);
  graph(brain3);
  fill(hovColor3);
  rect(675, 303, 15, 61);

  //tint(255, hovTint4);
  graph(brain4);
  fill(hovColor4);
  rect(492, 307, 146, 52);
}