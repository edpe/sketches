let x = 40;
let y = 40;
let rectangles = [];

class Rectangle {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.xSize = 40;
    this.ySize = 40;
  }

  display(x, y) {
    noStroke();
    fill(255);
    rect(this.xPos, this.yPos, this.xSize, this.ySize);
  }

  shrinkX() {
    if (this.xSize > 1) {
      this.xSize = this.xSize - 1;
    }
  }

  shrinkY() {
    if (this.ySize > 1) {
      this.ySize = this.ySize - 1;
    }
  }
}

function setup() {
  createCanvas(920, 920);
  for (var t = 0; t < 6; t++) {
    for (var i = 0; i < 6; i++) {
      rectangles.push(new Rectangle(x, y));
      x = x + 160;
    }
    y = y + 160;
    x = 40;
  }
}
function draw() {
  background(0);
  for (var i = 0; i < 36; i++) {
    rectangles[i].display();
    if (rectangles[i].xSize > 1) {
      rectangles[i].shrinkX();
    }

    if (rectangles[i].xSize <= 1) {
      rectangles[i].shrinkY();
    }
  }
}
