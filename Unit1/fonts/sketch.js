let f1, f2 ;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Balbaleo.ttf") ;
  f2 = loadFont("assets/photograph.ttf") ;
  textAlign(CENTER) ;
}

function draw() {
  background("yellow") ;
textFont(f1) ;
textSize(48) ;
text("hello world", 100, 100) ;

textFont(f2) ;
textsize(24) ;
text("Go You Redbirds!", width/2, 160) ;
}
