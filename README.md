# BRAiNSTORM

## Description

BRAiNSTORM is a semi-interactive program which displays the basics of how the human brain acts when under duress, for example from focusing on many things at once.  
The user, through clicks or keypresses, can see random combinations of actions and the activation of their corresponding brain lobes, but only up to a certain point: by forcing the brain to overwork, it &ldquo;shuts down&rdquo;.

This project serves to represent the strain that daily life puts on the brain whenever a person tries to do too many things at once. It is meant to teach that it is important to do one thing at a time in order to get the best results.

[⯈ **Execute the program**](https://luferrari.github.io/brainstorm)

## Code Snippets

```js
var regular, medium, bold;
var state = 0;

var brain0, brain1, brain2, brain3, brain4, glitched;
var sounds;

var booted = false;
var aleph = 255;

function img(png) { … }

function gif() { … }

```

```js
// for additional details, view the auxiliary files:
//  …

function preload() { … }

function setup() { … }

function draw() {
  loadingScreen();

  if (glitched.loaded()) {
    booted = true;
    if (state < 10) {
      if (state % 2 === 0) {
        glitchScreen();
      }
      startScreen();
    } else {
      glitchScreen();
      hangScreen();
    }
  }
}

function mousePressed() { changeState(); }

function keyPressed() {
  if (keyCode == 32) {
    changeState();
  }
}
```

```js
function changeState() {
  if (booted) {
    if (state < 10) {
      background(209, 210, 211);
      state++;
      img(brain0);
      mix();
      graphics();
    } else {
      noLoop();
    }
  }
}
```

## Acknowledgements

+ [Brain image](https://newsroom.clevelandclinic.org/2017/06/29/cleveland-clinic-researcher-receives-3-4-m-nih-grant-for-epilepsy-surgery-research/)
+ [antiboredom&rsquo;s p5.gif.js](https://github.com/antiboredom/p5.gif.js/tree/master)
+ [PHOTOMOSH](https://photomosh.com/)
+ [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)