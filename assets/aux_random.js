var same, i;
var chosen = [];

function roll() {
  textSize(20);
  textAlign(LEFT);
  textFont(md);
  fill(254, 250, 224);

  var Parts = [ // clockwise in graph
    'smell',              //  0f
    'speech',             //  1f
    'problem solving',    //  2f
    'motor control',      //  3f
    'touch',              //  4p
    'taste',              //  5p
    'body awareness',     //  6p
    'language',           //  7p
    'vision',             //  9o
    'reading',            //  8t
    'facial recognition', // 10t
    'hearing',            // 11t
    //'coordination',     // 12+
    '-', '-', '-', '-', '-', '-', '-', '-'
  ]

  for (var j = 0; j < 4; j++) {
    var picked = floor(random() * Parts.length);
    chosen[j] = Parts[picked];
    for (same = 0; same <= j - 1; same++) {
      if (chosen[same] == chosen[j]) {
        j--;
      }
    }
    text(chosen[j], 176, 256 + j * 36);
  }

  display();

  noLoop();
}

function display() {
  var Actions = [ // ??????? needs work
    'smelling ',
    'speaking ',
    'calculating ',
    '???  ',
    'feeling ',
    'tasting ',
    '??? ',
    'understanding ',
    'watching ',
    'reading ',
    'recognizing ',
    'listening to '
  ]
  text('xxx', 176, 480);
  /* img(b1);
  img(b2);
  img(b3);
  img(b4); */
}