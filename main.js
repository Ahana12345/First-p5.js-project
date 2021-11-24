function preload(){
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(220, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video, 70, 60, 450, 350);
    fill (0,255,0);
    stroke(0, 0, 0);
    rect(60, 25, 470, 20);
    rect(40, 25, 20, 420);
    rect(530, 25, 20, 420);
    rect(60, 420, 470, 20);
    fill (0,255,255);
    stroke(0, 0, 0);
    ellipse (50, 40, 55, 55);
    ellipse (540, 40, 55, 55);
    ellipse (50, 430, 55, 55);
    ellipse (540, 430, 55, 55);
   
  
}
function take_snapshot(){
    save('student.png');
}