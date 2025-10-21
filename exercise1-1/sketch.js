let diameters = [360, 280, 200, 150];

let colourValues = [
  [0,60,0],   
  [0,0,140],     
  [180,0,0],   
  [255,255,10] 
];

function setup() {
  createCanvas(400, 400);

  let circlex = width / 2;
  let circley = height / 2;

  noStroke(); 

  for (let i = 0; i < diameters.length; i++) {
    fill(colourValues[i]);
    circle(circlex, circley, diameters[i]);
  }
}

function draw() {}
