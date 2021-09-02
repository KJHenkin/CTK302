let fall, photo, pizza ;

function setup() {
  createCanvas(500, 500);
  fall = loadImage("assets/fobsymbol.png") ;
  photo = loadImage("assets/photo.jpg") ;
  pizza = loadImage("assets/pizza.jpg") ;

 imageMode(CENTER) ;
}

function draw() {
background("grey") ;
image(fall, width/2, height/2, 100, 100) ;
image(photo, width/2, height/2-120, 100, 100) ;
image(pizza, width/2, height/2+120, 100, 100) ;

}
