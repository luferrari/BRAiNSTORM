// VARS

var regular, medium, bold,
  brain0, brain1, brain2, brain3, brain4, brainG,
  audio0, audio1, audio2, audio3, audio4, audioG;

var hov1 = 0,
  hov2 = 0,
  hov3 = 0,
  hov4 = 0;

var bool1,
  bool2,
  bool3,
  bool4;

var opa1,
  opa2,
  opa3,
  opa4;

var act1 = 0,
  act2 = 0,
  act3 = 0,
  act4 = 0;

var pulse = [15, 111];
var stay = [255, 255];

var state = 0;
var booted = false;
var aleph = 255;

var sel = [frontal, parietal, occipital, temporal];

var frontal = ['smell', 'speech', 'problem solving', 'motor control'];
var parietal = ['touch', 'taste', 'body awareness', 'language'];
var occipital = ['vision'];
var temporal = ['reading', 'facial recognition', 'hearing'];

var action1 = ['smell a flower', 'talk to your friend', 'do math', 'do calligraphy'];
var action2 = ['pet your cat', 'eat an orange', 'take a shower', 'speak a foreign language'];
var action3 = ['watch a movie', 'admire the sunset', 'look after your dog'];
var action4 = ['read your favorite novel', 'look for someone in a crowd', 'listen to song lyrics'];
var r1, r2, r3, r4, h;
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