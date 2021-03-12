let treeTrunk;
let singleTree;
let barkImg;
let noiseImage;
let forest = [];
let barks = [];
let positions = [];

class Tree {
  constructor() {
    this.startPoint = 0;
    this.baseCurve = random(20, 60);
    this.trunkWidth = random(40, 100);

    this.bottomFlareLeft = random(5, 15);
    this.bottomFlareRight = random(5, 15);

    this.midFlareLeft = random(0, 10);
    this.midFlareRight = random(0, 10);

    this.treeTrunk = createGraphics(
      this.trunkWidth +
        this.bottomFlareLeft +
        this.bottomFlareRight +
        this.midFlareLeft +
        this.midFlareRight,
      windowHeight
    );
    this.height = this.treeTrunk.height - this.baseCurve;

    this.bottomFlareHeightLeft = this.height / random(7, 8);
    this.bottomFlareHeightRight = this.height / random(7, 8);

    this.midFlareHeightLeft = this.height / random(4, 6);
    this.midFlareHeightRight = this.height / random(4, 6);

    this.baseCurveX =
      (this.startPoint +
        this.midFlareLeft +
        this.bottomFlareLeft +
        this.midFlareRight +
        this.bottomFlareRight +
        this.trunkWidth) /
      2;

    this.baseCurveY = this.height + this.baseCurve;

    this.bark = createGraphics(
      this.trunkWidth +
        this.bottomFlareLeft +
        this.bottomFlareRight +
        this.midFlareRight +
        this.midFlareLeft,
      windowHeight
    );
  }

  drawBark() {
    let red = random(20, 40);
    let green = random(20, 40);
    let blue = random(20, 30);
    this.bark.fill(red, green, blue);
    this.bark.rect(0, 0, this.bark.width, windowHeight);
    for (i = 0; i < 800; i++) {
      this.bark.noStroke();
      this.bark.fill(random(0, 40), random(60, 80), random(0, 20));
      this.bark.circle(
        random(40, this.bark.width),
        random(0, this.bark.height),
        random(0, 7),
        random(0, 7)
      );
    }
    this.bark.filter(BLUR, 6);
  }

  drawTrunk() {
    this.treeTrunk.beginShape();

    // bottom root left
    this.treeTrunk.vertex(this.startPoint, this.height);

    // main trunk left 1
    this.treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft,
      this.height - this.bottomFlareHeightLeft
    );

    // main trunk left 2
    this.treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft + this.midFlareLeft,
      this.height - this.bottomFlareHeightLeft - this.midFlareHeightLeft
    );

    // trunk top left
    this.treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft + this.midFlareLeft,
      0
    );

    // trunk top right
    this.treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth,
      0
    );

    // main trunk right 2
    this.treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth,
      this.height - this.bottomFlareHeightRight - this.midFlareHeightRight
    );

    // main trunk right 1
    this.treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth +
        this.midFlareRight,
      this.height - this.bottomFlareHeightRight
    );

    // bottom root right
    this.treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth +
        this.midFlareRight +
        this.bottomFlareRight,
      this.height
    );

    // trunk root curve
    this.treeTrunk.quadraticVertex(
      this.baseCurveX, //anchor point x
      this.baseCurveY, //anchor point y
      this.startPoint,
      this.height
    );
    this.treeTrunk.endShape(CLOSE);
  }
}

function createTrees() {
  for (i = 0; i < 10; i++) {
    forest.push(new Tree());
  }
}

function drawTrees(distance) {
  forest.forEach((tree, index) => {
    tree.drawTrunk();
    tree.drawBark();
    barks.splice(index, 0, tree.bark.get());
    barks[index].mask(tree.treeTrunk);

    let height = map(distance, 0, 100, 0, -500);

    image(
      barks[index],
      positions[index] + random(-120, 120),
      random(height, height + random(0, 80))
    );
  });
}

function generatePositions() {
  for (i = 1; i < 10; i++) {
    positions.push((windowWidth / 10) * i);
  }
  console.log(positions);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 60, 60);
  generatePositions();
  createTrees();
  drawTrees(100);
  background(255, 255, 255, 20);
  drawTrees(80);
  background(255, 255, 255, 20);
  drawTrees(60);
  background(255, 255, 255, 20);
  drawTrees(40);
  background(255, 255, 255, 20);
  drawTrees(20);
  background(255, 255, 255, 20);
}

function draw() {}

// why are some trees lower than others (and why do they get cut off) - must be that tree trunk is being drawn lower for some
