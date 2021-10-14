let state = 0 ;
let timer = 0 ;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("red");
      fill(255, 80);
      for (var j = 0; j <= height; j += 20) {
        for (var i = 0; i <= width; i += 20) {
          fill("black");
          circle(i, j, 5);
        }
      }
      text("state 0", 100, 100);
      break;

    case 1:
      background("blue");
      fill(255, 60);
      for (var h = 0; h <= height; h += 20) {
        for (var k = 0; k <= width; k += 20) {
          fill("black") ;
         rect(h, k, 15, 20) ;
        }
      }

      text("state 1", 100, 100);
      break;

    case 2:
      background("green");
      text("state 2", 100, 100);
      break;

    case 3:
      background("purple");
      text("state 3", 100, 100);
      break;

    case 4:
      background("orange");
      text("state 4", 100, 100);
      break;
  }

  timer ++ ;
  if (timer >= 4*60) {
    timer = 0 ;
    state ++ ;
    if(state > 4) state = 0 ;
  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}
