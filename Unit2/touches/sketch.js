let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
    // image()
      text("no one is touching the screen", 5, 22) ;
      textSize(20) ; 
      break ;

      case 1:
      //  background()
       text("it's kind of lonely here", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      //  background()
      text("just two fingers?", 5, 22) ;
            // put a picture here
      break ;

      case 3:
      //  background()
     text("c'mon, you can do better than three", 5, 22) ;
            // put a picture here
      break ;

      case 4:
      // background()
      text("four makes a crowd", 5, 22) ;
      break ;

      case 5:
    //  background()
      text("five? high five!", 5, 22) ;


  }

}
