let angle = 0;
let angle2 = 0;
let angle3 = 0;
let sd = 0.5;
let sd2 = 0.3;
let sd3 = 10;
let spacing = 200;
let sizeVase = 1;
let num1 = 3;
let num2 = 4;

let currentSeed = 0;

function setup() {
  colorMode(HSB);
  createCanvas(600, 600);
  angleMode(DEGREES);
  background("white");
}

function draw() {
  backColor = color("#E4E4E4");
  backColor.setAlpha(0.02);
  background(backColor);

  randomSeed(currentSeed);

  scale(sizeVase);

  for (let i = 0; i < num1; i++) {
    for (let j = 0; j < num1; j++) {
      push();
      translate(0 + i * spacing, 0 + j * spacing);
      drawVase();
      pop();
    }
  }

  for (let x = 0; x < num2; x++) {
    for (let y = 0; y < num2; y++) {
      push();
      translate(0 + x * spacing, 0 + y * spacing);
      drawDeco();
      pop();
    }
  }
}

function mousePressed() {
  currentSeed = random(999999);
  //refresh my canvas
  noStroke();
  fill(255);
  rect(0, 0, width * num1, height * num1);

  //make the vase get smaller
  push();
  sizeVase = sizeVase / 2;
  num1 = num1 * 2;
  num2 = num2 * 2;
  sd /= 4;
  sd2 /= 4;
  sd3 /= 4;
  pop();
}

function drawVase() {
  /******************* base *******************/
  push();
  noStroke();
  fill(random(360), 54, 86, 25);
  quad(108, 170, 92, 170, 70, 188, 130, 188);
  line(0, 0, 0, 40);
  pop();

  /************** the body part ***************/
  push();
  translate(100, 107);
  rotate(angle2);
  stroke(random(360), 54, 86);
  line(0, 0, 0, 42);
  angle2 += sd2;
  pop();

  push();
  translate(100, 145);
  rotate(angle2);
  stroke(random(360), 54, 86);
  line(0, 0, 0, 25);
  angle2 += sd2;
  pop();

  /******************** head ********************/
  push();
  translate(100, 45);
  rotate(angle);
  stroke(random(360), 54, 86);
  line(0, 0, 0, -30);
  if (angle > 60 || angle < -60) {
    sd = -sd;
  }
  angle += sd;
  pop();

  /****************** neck **********************/
  noStroke();
  fill(random(360), 54, 86, 25);
  ellipse(100, 45, 20, 8);
  ellipse(100, 55, 40, 15);
  ellipse(100, 65, 20, 8);
}

function drawDeco() {
  push();
  translate(0, 100);
  rotate(angle2);
  stroke("#FDE50E");
  line(0, 12, -12, 0);
  angle3 += -sd3;
  pop();
}
