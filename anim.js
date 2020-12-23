
let x = 0;
let z = 0;
let y = 0;
function setup(){
    createCanvas(300, 300, WEBGL);
    translate(-width/2, -height/2);
    frameRate(30);
}

function draw(){
    translate(-width/2, -height/2);
    background(0);
    translate(width / 2, height / 2);
    rotateX(x);
    rotateY(y);
    rotateZ(z);
    box(100);
    x+=0.01;
    y+=0.01;
    z+=0.01;
}
