let state = 0;
let mic;
let vol;
let leaves;
let painting ;
let painting1 ;

function setup() {
  createCanvas(800, 800);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  leaves = loadImage("assets/Leaves.jpg");
  painting = loadImage("painting.jpg") ;
  painting1 = loadImage("paining(1).jpg") ;
}

function draw() {


  switch (state) {
    case 0:
      background('grey');
      image(leaves, 100, 200, 600, 400);
      text("hello, here are some leaves. please click on them", 100, 100);
      break;

    case 1:
      background('#9799BA');
      text("listening", 100, 100);

      }
      break;


    case 2:
      background('#F8B195');
      image(painting(1))
      text("here's a comp", 100, 100);
      break;

//digital painting
      case 3:
      background('lightblue') ;
      image(painting,100, 200, 600, 400 ) ;
      text("check out this cool computer art") ;
      break ;


      case 4:
      background('lavender') ;
      text("")
      break ;

  }

  fill('white');
  text(mouseX + ", " + mouseY, 15, 15);
}

function mouseReleased() {
  if ((state == 0) && (mouseX > 200) && (mouseX < 350) && (mouseY > 200) && (mouseY < 350)) {
    state = 1;

  }
}

function touchStarted() {
  getAudioContext().resume();
}
