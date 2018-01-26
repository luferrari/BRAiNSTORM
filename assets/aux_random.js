var frontal = ['smell', 'speech', 'problem solving', 'motor control'];
var parietal = ['touch', 'taste', 'body awareness', 'language'];
var occipital = ['vision'];
var temporal = ['reading', 'facial recognition', 'hearing'];
var heights = [256, 292, 328, 364];
var f, p, t, h; // randomizers

function roll() {
  noStroke();

  var k1 = 255;
  var k2 = 255;
  var k3 = 255;
  var k4 = 255;

  h = floor(random() * heights.length);
  if (click % 2 !== 0) {
    switch (h) {
      case 0:
        k1 = 0;
        //print('1');
        break;
      case 1:
        k2 = 0;
        //print('2');
        break;
      case 2:
        k3 = 0;
        //print('3');
        break;
      case 3:
        k4 = 0;
        //print('4');
        break;
    }
  }

  textSize(20);
  textAlign(LEFT);
  textFont(md);
  fill(254, 250, 224);

  f = floor(random() * frontal.length);
  text(frontal[f], 176, heights[0]);
  tint(255, k1);
  img(b1);

  p = floor(random() * parietal.length);
  text(parietal[p], 176, heights[1]);
  tint(255, k2);
  img(b2);

  text(occipital[0], 176, heights[2]);
  t = floor(random() * temporal.length);
  tint(255, k3);
  img(b3);

  text(temporal[t], 176, heights[3]);
  tint(255, k4);
  img(b4);

  if (click % 2 !== 0) {
    fill(209, 210, 211);
    rect(176, heights[h] - 18, 250, 36);
    print('height: ' + heights[h]);
  }

  var Actions = [ // ???????? needs work
    'smelling ',
    'speaking ',
    'calculating ',
    '',
    'feeling ',
    'tasting ',
    '',
    'understanding ',
    'watching ',
    'reading ',
    'recognizing ',
    'listening to ',
    // 'coordinating???',
    '', '', '', '', '', '', '', ''
  ];
  print(k1 + ', ' + k2 + ', ' + k3 + ', ' + k4);

  tint(255, 255);
}