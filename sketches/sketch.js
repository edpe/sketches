let treeTrunk;

let barkImg;
let noiseImage;
let forest = [];
let barks = [];

class Tree {
  constructor() {
    this.startPoint = random(0, windowWidth);
    this.nearness = random(0, 100);
    this.height = windowHeight - this.nearness;
    this.trunkWidth = random(30, 60);
    this.bottomFlareLeft = random(5, 25);
    this.midFlareLeft = random(5, 25);
    this.bottomFlareRight = random(5, 25);
    this.midFlareRight = random(5, 25);
    this.bottomFlareHeightLeft = this.height / random(2, 5);
    this.midFlareHeight = this.height / random(2, 5);
    this.bottomFlareHeightRight = this.height / random(2, 5);
    this.midFlareHeightRight = this.height / random(2, 5);
    this.rootCurveX =
      this.startPoint +
      this.midFlareLeft +
      this.bottomFlareLeft +
      this.trunkWidth / 2;

    this.RootCurveY = windowHeight - this.nearness / 2;
    this.treeTrunk = createGraphics(windowWidth, windowHeight);
  }

  drawTree() {
    this.treeTrunk.beginShape();

    // bottom root left
    this.treeTrunk.vertex(this.startPoint, windowHeight - this.nearness);

    // main trunk left 1
    this.treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft,
      windowHeight - this.nearness - this.bottomFlareHeightLeft
    );

    // main trunk left 2
    this.treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft + this.midFlareLeft,
      windowHeight -
        this.nearness -
        this.bottomFlareHeightLeft -
        this.midFlareHeightLeft
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
      windowHeight -
        this.nearness -
        this.bottomFlareHeightRight -
        this.midFlareHeightRight
    );

    // main trunk right 1
    this.treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth +
        this.midFlareRight,
      windowHeight - this.nearness - this.bottomFlareHeightRight
    );

    // bottom root right
    this.treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth +
        this.midFlareRight +
        this.bottomFlareRight,
      windowHeight - this.nearness
    );

    // trunk root curve
    this.treeTrunk.quadraticVertex(
      this.rootCurveX,
      this.RootCurveY,
      this.startPoint,
      windowHeight - this.nearness
    );
    this.treeTrunk.endShape(CLOSE);
  }
}

function preload() {
  for (i = 0; i < 5; i++) {
    barks.push(loadImage('../images/noise.jpg'));
  }
}

function createTrees() {
  for (i = 0; i < 5; i++) {
    forest.push(new Tree());
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 60, 60);
  createTrees();
  forest.forEach((tree, index) => {
    tree.drawTree();
    barks[index].mask(tree.treeTrunk);
    image(barks[index], 0, 0, windowWidth, windowHeight);
  });
}

function draw() {}

// next steps are to make a bark createGraphics  object inside each tree, then we won't have to preload the image we would just do tree.bark.mask(tree.treeTrunk)
