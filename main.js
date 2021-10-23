function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(750, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 100, 200, 200);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(50, 50, 100);
    circle(350, 50, 100);
    circle(50, 350, 100);
    circle(350, 350, 100);

    fill(255, 0, 0)
    stroke(255, 0, 0);
    rect(100, 40, 200, 20);
    rect(100, 340, 200, 20);
    rect(40, 100, 20, 200);
    rect(340, 100, 20, 200);
}