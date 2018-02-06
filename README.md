# BRAiNSTORM

![Figure 1](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig1.png "Fig. 1: Start screen")



## Summary

BRAiNSTORM is a &ldquo;game&rdquo; which displays, in simplified terms, how the human brain acts under duress.  
By using their mouse, the user can manipulate the parts of the brain and watch as it works, but they must be careful not to overwork it, otherwise it will &ldquo;shut down&rdquo;.

This project serves to represent the strain that daily life puts on the brain whenever a person tries to do too many things at once. It is meant to teach that it is important to do one thing at a time in order to get the best results.

[**`> execute`**](https://luferrari.github.io/BRAiNSTORM/) :sound: volume up

![Figure 2](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig2.gif "Fig. 2: Map screen")



## Credits

* [Barbara Malgorzata Doroszuk](https://github.com/doroszukb)
* [Lucia Maria Emilia Ferrari](https://github.com/luferrari)
* [Axia Zucchi](https://github.com/axiazucchi)

||B.D.|L.F.|A.Z.|
|---|---|---|---|
|Programming|:heavy_multiplication_x:|:heavy_multiplication_x:|:heavy_multiplication_x:|
|Concept|:heavy_multiplication_x:|||
|Graphic design|||:heavy_multiplication_x:|
|Sound design||:heavy_multiplication_x:||


* [p5.js](https://github.com/processing/p5.js)
* [p5.gif.js](https://github.com/antiboredom/p5.gif.js/tree/master)
* [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
* [Brain image](https://newsroom.clevelandclinic.org/2017/06/29/cleveland-clinic-researcher-receives-3-4-m-nih-grant-for-epilepsy-surgery-research/)
* [PHOTOMOSH](https://photomosh.com/)

![Figure 3](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig3.png "Fig. 3: Play screen")



## Code fragments

```p5js
function loadingScreen() {
  noStroke();
  fill(71, 40, 54, aleph);
  textAlign(LEFT);
  textSize(10);
  textFont(regular);
  text('loading...', width / 2, height - 10);
  text('loading...', width / 2, 15);
}
```

```p5js
var frontal = …
var parietal = …
var occipital = …
var temporal = …

var action1 = …
var action2 = …
var action3 = …
var action4 = …
```

```p5js
function stateCheck() {
  if (booted) {
    switch (state) {
      case 0: // start screen
        …
      case 1: // map screen
        …
      case 2: // play screen
        …
      default:
        return false;
    }
  }
}
```

![Figure 4](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig4.png "Fig. 4: uh oh :(")
