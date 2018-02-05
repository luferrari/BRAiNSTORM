function stateCheck() {
  if (booted) {
    switch (state) {
      case 0: // start screen
        startScreen();
        break;
      case 1: // map screen
        audio0.setVolume(0.2, 1.0);
        mapScreen();
        break;
      case 2: // play screen
        audio0.setVolume(0.3, 0.5);
        break;
      default:
        return false;
    }
  }
}