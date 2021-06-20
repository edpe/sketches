let xPos;
let yPos;

let yChange = -1; // begins life travelling up
let xChange = 0; // begins life travelling straight up

let randNum;

function setup() {
  createCanvas(500, 500);
  background(220);
  xPos = width / 2;
  yPos = height / 2;
}

// need a walker class
// set initial direction on the class by setting xChange and yChange

function changeDirection(number, changeProbability, direction) {
  if (number < changeProbability) {
    switch (direction) {
      case "upRight":
        xChange === 1 ? (xChange = 0) : (xChange = 1);
        yChange = -1;
        break;
      case "upLeft":
        xChange === -1 ? (xChange = 0) : (xChange = -1);
        yChange = -1;
        break;
    }
  }
}

function updatePosition() {
  xPos = xPos + xChange;
  yPos = yPos + yChange;
}

function draw() {
  noStroke();
  fill(255);
  ellipse(xPos, yPos, 4, 4);

  if (frameCount % 4 === 0) {
    randNum = Math.floor(random(100));
    changeDirection(randNum, 3, "upLeft");
  }

  updatePosition();
}

// set initial direction using function -  up/down/left/right/diagonalLeft/diagonalRight
// function chooses switch statement based on direction argument
