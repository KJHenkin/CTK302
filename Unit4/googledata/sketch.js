var bubbles = [];
let url = "";
let splatter ;

function setup() {

  splatter = loadImage("splatter.jpg") ;
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

    let key = "165L_4n79VUCj6T7UGcX4a7wRtWOHMcCpm0977wh4W-I"; // this is KEY of the URL from the sheet


  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What's your favorite color?"],
        data[i]["Do you live on or off campus?"],
        data[i]["Favorite pet?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  createImage(splatter, 600, 600);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(color, campus, pet) {
    // only the order of these parameters matters!
    this.color = color;
    this.campus = campus;
    this.pet = pet;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("lightblue");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.color + "\n" + this.campus + "\n" + this.pet,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel) ;
    if(this.pos.x > width) this.pos.x = 0 ;

  }

}
