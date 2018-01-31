var regular, medium, bold;
var brain0, brain1, brain2, brain3, brain4, brainG;
var audio0, audio1, audio2, audio3, audio4, audioG;

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

/* -- */

var state = 0;
var booted = false;
var aleph = 255;

function graph(png) {
  image(png, width / 2 - 240, height / 2 - 240, 480, 480);
}

function img(png) {
  image(png, 520, 56, 480, 480);
}

function gif() {
  image(brainG, 571, 139, 367, 320);
}

/* -- */

var frontal = ['smell', 'speech', 'problem solving', 'motor control'];
var parietal = ['touch', 'taste', 'body awareness', 'language'];
var occipital = ['vision'];
var temporal = ['reading', 'facial recognition', 'hearing'];

var actionF = ['smell a flower', 'talk to your friend', 'do math', 'do calligraphy'];
var actionP = ['pet your cat', 'eat an orange', 'take a shower', 'speak a foreign language'];
var actionO = ['watch a movie', 'admire the sunset', 'look after your dog'];
var actionT = ['read your favorite novel', 'look for someone in a crowd', 'listen to song lyrics'];

var heights = [256 - 72, 292 - 72, 328 - 72, 364 - 72];
var f, p, o, t, h; // randomizers