let cars = [];
let frogPos;
let maxCar = 100;
let timer = 0;
let state = 0;
let camera ;
let film ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER) ;

camera = loadImage("assets/camera.svg") ;
film = loadImage("assets/film.svg") ;

  // Spawn many objects

  for (let i = 0; i < maxCar; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);
  imageMode(CENTER) ;
  textAlign(CENTER) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;

}

function draw() {
  switch (state) {
    case 0: //welcome
      background("beige");
      textSize(28);
      fill("black");
      text("Welcome - Collect the film to finish the photoshoot");
      break;

    case 1: //game state
      game();
      timer++;
      if (timer >  10* 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: //win state
      background("lightgreen");
      textSize(28);
      fill("black");
      text("YOU DID IT! YOU COMPLETED THE SHOOT!");
      break;

    case 3: //lose state
      textSize(28);
      fill("white");
      background("lightred");
      text("YOU RAN OUT OF FILM. YOU FAILED TO FINISH THE SHOOT");
      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //they won
      resetTheGame();
      state = 0;
      break;

    case 3: //they lost
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background("grey");
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length == 0) {
    state = 2;
  }

  // frog
  fill("green");
  image(camera, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}

function resetTheGame() {
  timer = 0;
  cars = [];

  //spawn many objects
  for (let i = 0; i < maxCar; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(200, 200);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    image(film, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
