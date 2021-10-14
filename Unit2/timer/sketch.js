let timer = 0 ;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  timer ++ ;
  if (timer >= 5*60) {
    timer = 0 ;
    print ('beep') ;
  }

}
