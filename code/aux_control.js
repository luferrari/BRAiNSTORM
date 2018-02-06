function stateCheck() {
  if (booted) {
    switch (state) {
      case 0: // start screen
        startScreen();
        break;
      case 1: // map screen
         audio0.setVolume(0.15, 1.0);
        opa1_1 = floor(random(15, 112)),
          opa2_1 = floor(random(15, 112)),
          opa3_1 = floor(random(15, 112)),
          opa4_1 = floor(random(15, 112));
        mapScreen();
        break;
      case 2: // play screen
        opa1_1 = 0,
          opa2_1 = 0,
          opa3_1 = 0,
          opa4_1 = 0;
        opa1_2 = floor(random(15, 112)),
          opa2_2 = floor(random(15, 112)),
          opa3_2 = floor(random(15, 112)),
          opa4_2 = floor(random(15, 112));
        break;
      default:
        return false;
    }
  }
}
