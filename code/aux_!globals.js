var regular, medium, bold;
var state = 0;

var brain0, brain1, brain2, brain3, brain4, glitched;
var sounds;

/* -- */

var booted = false;
var aleph = 255;

function graph(png) {
  image(png, width / 2 - 240, height / 2 - 240, 480, 480);
}

function img(png) {
  image(png, 520, 56, 480, 480);
}

function gif() {
  image(glitched, 571, 139, 367, 320);
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