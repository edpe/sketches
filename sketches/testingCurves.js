function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(5);
  point(20, 20); //line start
  point(80, 30); // first anchor
  point(50, 50); // mid point
  point(20, 80); // second anchor
  point(80, 80); // end point
  point(60, 50); // second mid point

  noFill();
  strokeWeight(1);
  beginShape();
  vertex(20, 20);
  //inner lines
  quadraticVertex(80, 10, 50, 50);
  quadraticVertex(20, 80, 80, 80);
  //outer lines
  quadraticVertex(70, 70, 65, 75);
  quadraticVertex(30, 70, 60, 50);
  quadraticVertex(80, 10, 20, 20);
  endShape();

  // try the bezier curve and less extreme anchor points
}
