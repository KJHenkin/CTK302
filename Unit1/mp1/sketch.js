function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {
angleMode(DEGREES) ;
rectMode() ;

  background("#256794") ;
  fill(0) ;
  quad()

fill('#c2b280') ;
rect(0, 654, 2000, 180) ;

fill("#9F2B68") ;
triangle(150, 503, 222, 370,  291, 498 ) ;

fill('#4D0F28') ;
quad(232, 386, 370, 339, 411, 412, 275, 467) ;

fill("#9F2B68") ;
triangle(362, 324, 497, 318, 418, 425) ;

fill("#A1045A") ;
triangle(298, 414, 342, 398, 331, 443) ;

fill("#FEC5ES") ;
quad(0, 394, 79, 410, 100, 565, 0, 564) ;

fill('black') ;
circle(215, 445, 10) ;



  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
background("#ADD8E6") ;

fill("#AC99C1") ;
triangle(150, 503, 222, 370,  291, 498 ) ;

fill('#7A4988') ;
quad(232, 386, 370, 339, 411, 412, 275, 467) ;

fill("#AC99C1") ;
triangle(362, 324, 497, 318, 418, 425) ;

fill("#9867C5") ;
triangle(298, 414, 342, 398, 331, 443) ;

fill("#F15278") ;
quad(0, 394, 79, 410, 100, 565, 0, 564) ;

fill('black') ;
circle(215, 445, 10) ;

fill('#c2b280') ;
rect(0, 654, 2000, 180) ;

fill('#89cff0') ;
circle(107, 509, 15) ;

fill('#89cff0') ;
circle(137, 514, 15) ;

fill('#89cff0') ;
circle(123, 483, 15) ;

fill('#89cff0') ;
circle(118, 533, 15) ;

fill('#89cff0') ;
circle(91, 471, 15) ;

fill('#89cff0') ;
circle(109, 438, 15) ;

  }



  // this shows mouse location - comment it out when you're done!

  //fill(0);
  //text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
