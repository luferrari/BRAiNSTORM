var s, j;
var c = [];

// s = same value
// c = chosen value
// p = picked value
// j = incrementer

function roll() {
  var Parts = [ // clockwise in graph
    'smell',              //  0f
    'speech',             //  1f
    'problem solving',    //  2f
    'motor control',      //  3f
    'touch',              //  4p
    'taste',              //  5p
    'body awareness',     //  6p
    'language',           //  7p
    'vision',             //  8o
    'reading',            //  9t
    'facial recognition', // 10t
    'hearing',            // 11t
    //'coordination',     // 12+
    '-', '-', '-', '-', '-', '-', '-', '-'
  ]
  
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
  ]

  for (j = 0; j < 4; j++) {
    var p = floor(random() * Parts.length);
    c[j] = Parts[p];
    for (s = 0; s <= j - 1; s++) {
      if (c[s] == c[j]) {
        j--;
      }
    }
    
    noFill();
    if (0 <= p && p <= 3) {
      img(b1);
    } else if (4 <= p && p <= 7) {
      img(b2);
    } else if (p == 8) {
      img(b3);
    } else if (9 <= p && p <= 11) {
      img(b4);
    }

    textSize(20);
    textAlign(LEFT);
    textFont(md);
    fill(254, 250, 224);
    text(c[j], 176, 256 + j * 36);
  }

  noLoop();
}