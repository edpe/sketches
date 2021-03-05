class Tree {
  constructor() {
    this.startPoint = windowWidth * random(0.1, 1);
    this.topTrunkWidth = 40;
    this.floor = random(50, 100);
    this.trunkHeight = windowHeight - this.floor;
    this.groundFlare = random(5, 15);
    this.midFlare = random(0, 10);
    this.trunkColor = random(200, 255);
  }

  display() {
    noStroke();
    fill(this.trunkColor);

    quad(
      this.startPoint,
      this.trunkHeight / random(3, 3.5),
      this.startPoint + this.topTrunkWidth,
      this.trunkHeight / random(3, 3.5),
      this.startPoint + this.topTrunkWidth + this.midFlare,
      this.trunkHeight,
      this.startPoint - this.midFlare,
      this.trunkHeight
    );

    quad(
      this.startPoint,
      this.trunkHeight / 2,
      this.startPoint + this.topTrunkWidth,
      this.trunkHeight / 2,
      this.startPoint + this.topTrunkWidth + this.groundFlare,
      this.trunkHeight,
      this.startPoint - this.groundFlare,
      this.trunkHeight
    );

    quad(
      this.startPoint,
      0,
      this.startPoint + this.topTrunkWidth,
      0,
      this.startPoint + this.topTrunkWidth,
      this.trunkHeight,
      this.startPoint,
      this.trunkHeight
    );
    ellipseMode(CENTER);
    ellipse(
      this.startPoint + this.topTrunkWidth / 2,
      this.trunkHeight,
      this.topTrunkWidth + this.groundFlare * 2,
      20
    );
  }
}
function setup() {
  // create a canvas
  createCanvas(windowWidth, windowHeight);
  background(100);

  const tree1 = new Tree();
  tree1.display();
  const tree2 = new Tree();
  tree2.display();
  const tree3 = new Tree();
  tree3.display();
  const tree4 = new Tree();
  tree4.display();
  const tree5 = new Tree();
  tree5.display();
  const tree6 = new Tree();
  tree6.display();
  const tree7 = new Tree();
  tree7.display();
}

function draw() {
  // colour the background black
  // select windowHeightite as a colour
  fill(255);
  // draw a rectangle
}
