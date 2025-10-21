
let starX = [];
let starY = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(10,100,255);

  for (let i = 0; i < starX.length; i++) {
    star(starX[i], starY[i]);
  }

  makeStarsfall();

  fill (255)
  circle(100,5,50,200)
  noStroke();
}

function star(x, y) {
  fill(255);
  noStroke();
  triangle(x, y - 50, x - 20, y, x + 20, y);
  triangle(x - 50, y - 20, x, y - 20, x, y + 10);
  triangle(x + 50, y - 20, x, y - 20, x, y + 10);
  triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
  triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
}

function mousePressed() {
  starX.push(mouseX);
  starY.push(mouseY);
}

function makeStarsfall() {
  for (let i = 0; i < starY.length; i++) {
    starY[i] += 2;
  }
  fill (255)

}
