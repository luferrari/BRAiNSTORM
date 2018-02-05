function stateCheck() {
  if (booted) {
    switch (state) {
      case 0: // start screen
        startScreen();
        break;
      case 1: // map screen
        audio0.setVolume(0.15, 1.0);
        mapScreen();
        break;
      case 2: // play screen
        break;
      default:
        return false;
    }
  }
}