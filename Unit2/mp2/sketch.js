let numberOfTouches ;
let leaves;
let painting ;
let painting1 ;

function setup() {
  createCanvas(800, 800);

  leaves = loadImage("assets/Leaves.jpg") ;
  painting = loadImage("assets/painting.jpg") ;
  painting1 = loadImage("assets/painting(1).jpg") ;
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
    background('grey') ;
    image(leaves,  100, 200, 600, 400) ;
      text("no fingers on the screen, here's a pretty picture", 5, 22) ;
      textSize(20) ;

      break ;

      case 1:
     background('lightgreen') ;
     image(painting1,  100, 200, 600, 600) ;
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here
      break ;

      case 2:
     background('lavender') ;
     image(painting,  100, 200, 600, 600) ;
      text("just two fingers?", 5, 22) ;
            // put a picture here
      break ;

      case 3:
    background('#9799BA') ;
     text("c'mon, you can do better than three", 5, 22) ;
            // put a picture here
      break ;

      case 4:
    background('#F8B195') ;
      text("four makes a crowd", 5, 22) ;
      break ;

      case 5:
    background('#8BD6D6') ;
      text("five? high five!", 5, 22) ;


  }

}
