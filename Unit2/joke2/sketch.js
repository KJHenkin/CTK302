let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('blue');
      text("I sold my vacuum the other day", 100, 100);
      textSize(25);
      break;

    case 1:
      background('green');
      text("All it was doing was collecting dust", 100, 100);
      textSize(25);
      break;
  }
  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 1) state = 0;
  }

}

function mouseReleased() {
  state++;

  if (state > 1) {
    state = 0;
  }
}
