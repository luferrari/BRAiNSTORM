function stateCheck() {
  if (booted) {
    switch (state) {
      case 0:
        startScreen();
        break;
      case 1:
        audio0.setVolume(0.4, 1.0);
        audio1.setVolume(0.0001, 0.25);
        audio2.setVolume(0.0001, 0.25);
        audio3.setVolume(0.0001, 0.25);
        audio4.setVolume(0.0001, 0.25);
        if (state === 1) {
          mapScreen();
        }
        break;
      case 2:
        audio0.setVolume(0.8, 0.5);
        if (state === 2) {
          playScreen();

          background(209, 210, 211, 191);
          fill(0);
          textSize(60);
          textAlign(CENTER);
          text('doesn\'t work yet :(', width / 2, height / 2);
        }
        break;
      default:
        return false;
    }
  }
}