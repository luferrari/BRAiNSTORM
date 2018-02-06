// VARS

var regular, medium, bold,
  brain0, brain1, brain2, brain3, brain4, brainG,
  audio0, audio1, audio2, audio3, audio4, audioG;

var hov1 = 0,
  hov2 = 0,
  hov3 = 0,
  hov4 = 0;

var bool1 = false,
  bool2 = false,
  bool3 = false,
  bool4 = false;

var opa1_1 = 0,
  opa2_1 = 0,
  opa3_1 = 0,
  opa4_1 = 0;

var opa1_2 = 0,
  opa2_2 = 0,
  opa3_2 = 0,
  opa4_2 = 0;

var int1 = 0,
  int2 = 0,
  int3 = 0,
  int4 = 0;

var stay = 255;

var a = 0,
  b = 0,
  c = 0,
  d = 0,
  e = 0;

var state = 0;
var booted = false;
var aleph = 255;
var bugged = false;



var sel = [frontal, parietal, occipital, temporal];

var frontal = ['smell', 'speech', 'problem solving', 'motor control'];
var parietal = ['touch', 'taste', 'body awareness', 'language'];
var occipital = ['vision'];
var temporal = ['reading', 'facial recognition', 'hearing'];

var action1 = ['smell a flower', 'talk to your friend', 'do math', 'do calligraphy'];
var action2 = ['pet your cat', 'eat an orange', 'take a shower', 'speak a foreign language'];
var action3 = ['watch a movie', 'admire the sunset', 'look after your dog'];
var action4 = ['read your favorite novel', 'look for someone in a crowd', 'listen to song lyrics'];
var r1 = 0,
  r2 = 0,
  r3 = 0,
  r4 = 0,
  h;
var heights = [256 - 72, 292 - 72, 328 - 72, 364 - 72];



// PRELOAD()

function fonts() {
  regular = loadFont('./assets/fonts/RobotoMono-Regular.ttf');
  medium = loadFont('./assets/fonts/RobotoMono-Medium.ttf');
  bold = loadFont('./assets/fonts/RobotoMono-Bold.ttf');
}

function images() {
  brain0 = loadImage('./assets/images/brain0.png');
  brain1 = loadImage('./assets/images/brain1.png');
  brain2 = loadImage('./assets/images/brain2.png');
  brain3 = loadImage('./assets/images/brain3.png');
  brain4 = loadImage('./assets/images/brain4.png');
  brainG = loadGif('./assets/images/brainG.gif');
  /*brainG = createDiv('');
  brainG.addClass('bug');*/
}

function sounds() {
  audio0 = loadSound('./assets/sounds/audio0.ogg');
  audio1 = loadSound('./assets/sounds/audio1.ogg');
  audio2 = loadSound('./assets/sounds/audio2.ogg');
  audio3 = loadSound('./assets/sounds/audio3.ogg');
  audio4 = loadSound('./assets/sounds/audio4.ogg');
  audioG = loadSound('./assets/sounds/audioG.ogg');
}



// DRAW()

function graph(png) {
  image(png, width / 2 - 240, height / 2 - 240, 480, 480);
}

function img(png) {
  image(png, 520, 56, 480, 480);
}

function gif() {
  image(brainG, 571, 139, 367, 320);
}



// DEBUG
function debug_frames(q) {
  if (q === 1) {
    fill(232, 232, 233);
    rect(9, 9, 72, 22);
    textFont(medium);
    textSize(12);
    textAlign(LEFT);
    fill(0);
    text('\u0192-' + frameCount, 14, 24);
  }
}

function debug_play(q) {
  if (q === 1) {
    fill(232, 232, 233);
    rect(9, 39, 32, 65);
    textFont(medium);
    textSize(12);
    textAlign(LEFT);
    fill(0);
    text('f-' + +bool1 + '\np-' + +bool2 + '\no-' + +bool3 + '\nt-' + +bool4, 14, 54);
  }
}

function debug_int(q) {
  if (q === 1) {
    fill(232, 232, 233);
    rect(49, 39, 32, 80);
    textFont(medium);
    textSize(12);
    textAlign(LEFT);
    fill(0);
    text('a-' + a + '\nb-' + b + '\nc-' + c + '\nd-' + d + '\ne-' + e, 54, 54);
  }
}
