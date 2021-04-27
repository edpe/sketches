function setup() {
    createCanvas(1200, 1200);
    frameRate(10)
    rectMode(CENTER);
}

let y1 = -200
let x1 = -200
let x2 = 200

function draw() {
    translate(600, 600);
    background(220);
    noStroke();
    fill(0);
    let step = frameCount % 100;
    let angle = map(step, 0, 20, 0, PI);
    let cos_a = cos(angle);
    let sin_a = sin(angle);
    translate(50, 50);
    // Equivalent to rotate(angle);
    applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
    //top row
    //top left square
    rect(x1, y1, 200, 200);
    //top middle square
    rect(0, y1, 200, 200);
    //top right square
    rect(x2, y1, 200, 200);
    // //middle column
    // 
    // rect(0, -200, 200, 200);
    // rect(0, 0, 200, 200);
    // rect(0, 200, 200, 200);
    // ///first column 
    // rect(-200, -200, 200, 200);
    // rect(-200, 0, 200, 200);
    // rect(-200, 200, 200, 200);
    // //last column
    // rect(200, -200, 200, 200);
    // rect(200, 0, 200, 200);
    // rect(200, 200, 200, 200);
    y1 = y1 - step
    x1 = x1 - step
    x2 = x2 + step
    // x = x + 1
    // every step calculate a value
    //let move = map(step, )
    // move according to that value
    //y = y + move
 }


 // finish animating the squares for rows 2 & 3
 // zooming in
 // redrawing original squares to replace the middle square from previous loop