# BRAiNSTORM

![Figure 1](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig1.png "Fig. 1: Start screen")



## Summary

BRAiNSTORM is a &ldquo;game&rdquo; which displays, in simplified terms, how the human brain acts under duress.  
By using their mouse, the user can manipulate the parts of the brain and watch as it works, but they must be careful not to overwork it, otherwise it will &ldquo;shut down&rdquo;.

This project serves to represent the strain that daily life puts on the brain whenever a person tries to do too many things at once. It is meant to teach that it is important to do one thing at a time in order to get the best results.

[**`> execute`**](https://luferrari.github.io/BRAiNSTORM/)

![Figure 2](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig2.gif "Fig. 2: Map screen")



## Credits

* [Barbara Malgorzata Doroszuk](https://github.com/doroszukb) &ndash; programming
* [Lucia Maria Emilia Ferrari](https://github.com/luferrari) &ndash; programming, sound design
* [Axia Zucchi](https://github.com/axiazucchi) &ndash; programming


* [p5.js](https://github.com/processing/p5.js)
* [p5.gif.js](https://github.com/antiboredom/p5.gif.js/tree/master)
* [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
* [Brain image](https://newsroom.clevelandclinic.org/2017/06/29/cleveland-clinic-researcher-receives-3-4-m-nih-grant-for-epilepsy-surgery-research/)
* [PHOTOMOSH](https://photomosh.com/)

![Figure 3](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig3.png "Fig. 3: Play screen")



## Code fragments

```p5js
function stateCheck() {
  if (booted) {
    switch (state) {
      case 0: …
      case 1: …
      case 2: …
      default: return false;
    }
  }
}
```

```p5js
var state = 0;
var booted = false;
var aleph = 255;
var bugged = false;
```

```p5js
function hangScreen() {
  audio0.stop(), audio1.stop(), audio2.stop(), audio3.stop(), audio4.stop(), audioG.stop();
  text(message1, width / 2, height - 112);
  text(message2, width / 2, height - 40);
  filter(INVERT);
  noLoop();
}
```

![Figure 4](https://github.com/luferrari/BRAiNSTORM/raw/master/readme/fig4.png "Fig. 4: uh oh :(")
