let n = -80;
let d = -71;
let dSlider;

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
  dSlider = createSlider(1, 180, 1);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  stroke(221,51,255);
  //d = dSlider.value();
  
  noFill();
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n*k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape(CLOSE);
}