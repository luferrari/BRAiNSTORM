# BRAıNSTORM

## Description

BRAıNSTORM is a semi-interactive program which displays the basics of how the human brain acts when under duress, for example from focusing on many things at once.  
The user, through clicks or keypresses, can see random combinations of actions and the activation of their corresponding brain lobes, but only up to a certain point: by forcing the brain to overwork, it &ldquo;shuts down&rdquo;.

This project serves to represent the strain that daily life puts on the brain whenever a person tries to do too many things at once. It is meant to teach that it is important to do one thing at a time in order to get the best results.

[⯈ **Execute the program**](https://luferrari.github.io/brainstorm)

## Code Snippets

```js
var rg, md, bd;
var step = 0;

var b0, b1, b2, b3, b4, gg;
var sounds;

var booted = false;
var a = 255;

…

var f, p, o, t, h; // randomizers
```

```js
// for additional details on the functions, view the auxiliary files:
// …

function preload() { … }

function setup() { … }


function draw() {
  loader();

  if (gg.loaded()) {
    booted = true;
    if (step < 10) {
      if (step % 2 === 0) {
        glitch();
      }
      boot();
    } else {
      glitch();
      hang();
    }
  }
}


function mousePressed() { counter(); }

function keyPressed() {
  if (keyCode == 32) {
    counter();
  }
}
```

```js
function counter() {
  if (booted) {
    if (step < 10) {
      background(209, 210, 211);
      step++;
      img(b0);
      roll();
      design();
    } else {
      noLoop();
    }
  }
}
```

## Acknowledgements

+ [antiboredom&rsquo;s p5.gif.js](https://github.com/antiboredom/p5.gif.js/tree/master)
+ [PHOTOMOSH](https://photomosh.com/)
+ [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
+ (image source)