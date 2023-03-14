let e_xpos = 35;
let e_ypos = 60;
let step = 100;
let x_chg;
let y_chg;
let rot = 0;
let h1 = 0;
let h2;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  if (h1 == 0) {
    h1 = random(0, 360);
    h2 = random(0, 222);
  }
}

function draw() {
  colorMode(HSB);

  background(h2, 65, 90);

  noStroke();
  // the below coding is nested loop
  // Apple
  fill(h1, 29, 100);
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      ellipse(
        e_xpos + 100 * j + (frameCount % 400), 
        e_ypos + step * i, 
        50, 
        60
      );
      ellipse(
        e_xpos + 30 + 100 * j + (frameCount % 400),
        e_ypos + step * i,
        50,
        60
      );
      ellipse(
        -e_xpos - 100 * j + (frameCount % 400),
        e_ypos + step * i,
        50,
        60
      );
      ellipse(
        -e_xpos - 30 - 100 * j + (frameCount % 400),
        e_ypos + step * i,
        50,
        60
      );
    }
  }

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      triangle(
        50 + i * step + (frameCount % 400),
        30 + j * step,
        45 + i * step + (frameCount % 400),
        17 + j * step,
        55 + i * step + (frameCount % 400),
        17 + j * step
      );
      triangle(
        -50 - i * step + (frameCount % 400),
        30 + j * step,
        -45 - i * step + (frameCount % 400),
        17 + j * step,
        -55 - i * step + (frameCount % 400),
        17 + j * step
      );
    }
  }

  //KITTEN
  colorMode(RGB);
  //enlarge the kitten
  translate(-280, -300);
  scale(1.7);

  noStroke();

  fill(255, 234, 185);
  ellipse(380, 360, 20); //tail
  fill(255, 244, 218);
  ellipse(379, 358, 15);
  //rot ++;

  fill(255, 244, 218);
  triangle(265, 290, 255, 320, 275, 310); //left ear
  triangle(313, 290, 305, 310, 325, 320);
  rect(221, 350, 166, 85, 40, 40, 40, 45); //body

  fill(255, 238, 197);
  rect(230, 310, 116, 70, 33); //head
  fill(255, 244, 218);
  rect(230, 310, 106, 68, 33);

  noStroke();
  if (mouseIsPressed) {
    stroke(85, 71, 37);
    strokeWeight(8);
    line(258 - 8, 348, 258 + 8, 344);
    line(308 - 8, 344, 308 + 8, 348);
  } else {
    fill(236, 248);
    ellipse(258, 345, 33); //bigger one
    ellipse(308, 345, 33);
    fill(85, 71, 37);
    x_chg = map(mouseX, 0, 400, -3, 3);
    y_chg = map(mouseY, 0, 400, -3, 3);
    ellipse(258 + x_chg, 345 + y_chg, 22);
    ellipse(308 + x_chg, 345 + y_chg, 22);
  }
}
