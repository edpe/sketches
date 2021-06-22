let traces = [];

colors = ["#D8DCDB", "#3B4F61", "#32393E", "#FFFFFF"];

class Tracer {
  constructor(xPos, yPos, xChange, yChange, type, changeProbability) {
    this.xChange = xChange;
    this.yChange = yChange;
    this.type = type;
    this.xPos = xPos;
    this.yPos = yPos;
    this.initialXPos = xPos;
    this.initialYPos = yPos;
    this.changeProbability = changeProbability;
    this.changeRouteCounter = 0;
    this.color = colors[Math.floor(random(4))];
    this.thickness = Math.floor(random(4)) + 1;
  }

  changeDirection() {
    if (frameCount % 5 === 0) {
      let randNum = Math.floor(random(100));
      if (randNum < this.changeProbability) {
        this.changeRouteCounter++;
        switch (this.type) {
          case "up":
            this.xChange === 1 ? (this.xChange = 0) : (this.xChange = 1);
            break;

          case "upRight":
            this.xChange === 1 ? (this.xChange = 0) : (this.xChange = 1);
            break;

          case "right":
            this.yChange === 1 ? (this.yChange = 0) : (this.yChange = 1);
            break;

          case "downRight":
            this.xChange === 1 ? (this.xChange = 0) : (this.xChange = 1);
            break;

          case "down":
            this.xChange === 1 ? (this.xChange = 0) : (this.xChange = 1);
            break;

          case "downLeft":
            this.xChange === -1 ? (this.xChange = 0) : (this.xChange = -1);
            break;

          case "left":
            this.yChange === 0 ? (this.yChange = -1) : (this.yChange = 0);
            break;

          case "upLeft":
            this.xChange === -1 ? (this.xChange = 0) : (this.xChange = -1);
            break;
        }
      }
    }
  }

  updatePosition() {
    // todo prevent trace going off screen by adding or condition to stop updating if y or x position gets near windowWidth/height or 0
    if (this.changeRouteCounter < 4) {
      this.xPos = this.xPos + this.xChange;
      this.yPos = this.yPos + this.yChange;
    }
  }

  displayTrace() {
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(this.xPos, this.yPos, this.thickness, this.thickness);
    ellipse(
      this.initialXPos,
      this.initialYPos,
      this.thickness * 2,
      this.thickness * 2
    );
    // todo prevent trace going off screen by adding or condition to stop updating if y or x position gets near windowWidth/height or 0
    if (this.changeRouteCounter >= 4) {
      ellipse(this.xPos, this.yPos, this.thickness * 2, this.thickness * 2);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#E1E1DF");
  let traceTypes = [
    {
      xPos: windowWidth / 2,
      yPos: windowHeight / 2,
      xChange: 0,
      yChange: -1,
      type: "up",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 + 30,
      yPos: windowHeight / 2,
      xChange: 0,
      yChange: -1,
      type: "up",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 + 60,
      yPos: windowHeight / 2,
      xChange: 1,
      yChange: -1,
      type: "upRight",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 + 60,
      yPos: windowHeight / 2 + 30,
      xChange: 1,
      yChange: 0,
      type: "right",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 + 60,
      yPos: windowHeight / 2 + 60,
      xChange: 1,
      yChange: 1,
      type: "downRight",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 + 30,
      yPos: windowHeight / 2 + 60,
      xChange: 0,
      yChange: 1,
      type: "down",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2,
      yPos: windowHeight / 2 + 60,
      xChange: 0,
      yChange: 1,
      type: "down",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 - 30,
      yPos: windowHeight / 2 + 60,
      xChange: -1,
      yChange: 1,
      type: "downLeft",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 - 30,
      yPos: windowHeight / 2 + 30,
      xChange: -1,
      yChange: 0,
      type: "left",
      changeProbability: 5,
    },
    {
      xPos: windowWidth / 2 - 30,
      yPos: windowHeight / 2,
      xChange: -1,
      yChange: -1,
      type: "upLeft",
      changeProbability: 5,
    },
  ];
  traces = traceTypes.map(
    (trace) =>
      new Tracer(
        trace.xPos,
        trace.yPos,
        trace.xChange,
        trace.yChange,
        trace.type,
        trace.changeProbability
      )
  );
}

function draw() {
  traces.forEach((trace) => {
    trace.displayTrace();
    trace.changeDirection();
    trace.updatePosition();
  });
}

//todo make sure traces don't cross
