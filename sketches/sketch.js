let treeTrunk;
let bark;
let noiseImage;

class Tree {
  constructor() {
    this.startPoint = windowWidth / 2;
    this.nearness = 30;
    this.height = windowHeight - this.nearness;
    this.trunkWidth = 40;
    this.bottomFlareLeft = 10;
    this.midFlareLeft = 7;
    this.bottomFlareRight = 10;
    this.midFlareRight = 7;
    this.bottomFlareHeightLeft = this.height / 4;
    this.midFlareHeight = this.height / 3;
    this.bottomFlareHeightRight = this.height / 4;
    this.midFlareHeightRight = this.height / 3;
    this.rootCurveX =
      this.startPoint +
      this.midFlareLeft +
      this.bottomFlareLeft +
      this.trunkWidth / 2;

    this.RootCurveY = windowHeight - this.nearness / 2;
  }

  display() {
    treeTrunk = createGraphics(100, windowHeight);

    treeTrunk.noStroke;
    treeTrunk.fill(0);

    treeTrunk.beginShape();

    // bottom root left
    treeTrunk.vertex(this.startPoint, windowHeight - this.nearness);

    // main trunk left 1
    treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft,
      windowHeight - this.nearness - this.bottomFlareHeightLeft
    );

    // main trunk left 2
    treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft + this.midFlareLeft,
      windowHeight -
        this.nearness -
        this.bottomFlareHeightLeft -
        this.midFlareHeightLeft
    );

    // trunk top left
    treeTrunk.vertex(
      this.startPoint + this.bottomFlareLeft + this.midFlareLeft,
      0
    );

    // trunk top right
    treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth,
      0
    );

    // main trunk right 2
    treeTrunk.vertex(
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
    treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth +
        this.midFlareRight,
      windowHeight - this.nearness - this.bottomFlareHeightRight
    );

    // bottom root right
    treeTrunk.vertex(
      this.startPoint +
        this.bottomFlareLeft +
        this.midFlareLeft +
        this.trunkWidth +
        this.midFlareRight +
        this.bottomFlareRight,
      windowHeight - this.nearness
    );

    // trunk root curve
    treeTrunk.quadraticVertex(
      this.rootCurveX,
      this.RootCurveY,
      this.startPoint,
      windowHeight - this.nearness
    );
    endShape();
    noiseImage = loadImage("../images/noise.jpg");

    // noiseImage.mask(treeTrunk);

    return image(noiseImage, 100, windowWidth);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tree = createGraphics(100, windowHeight);
  background(255);
  tree = new Tree();
  tree.display();
}
function draw() {}
