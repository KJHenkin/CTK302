let state = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  switch (state) {
    case 0:
      background('blue');
      text("There are three types of people in this world", 100, 100);
      textSize(25);
      break;

    case 1:
      background('green');
      text("Those who can count and those who can't", 100, 100);
      textSize(25);
      break;
  }


}

function mouseReleased() {
  state++;

  if (state > 1) {
    state = 0;
  }
}
