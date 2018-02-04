function stateCheck() {
  if (booted) {
    switch (state) {
      case 0:
        startScreen();
        break;
      case 1:
        audio0.setVolume(0.4, 1.0);
        mapScreen();
        break;
      case 2:
        audio0.setVolume(0.8, 0.5);
        break;
      default:
        return false;
    }
  }
}