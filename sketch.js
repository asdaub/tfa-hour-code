function setup(){
   createCanvas(600,400);
   background(0,255,255);
}

function draw(){
    fill(138,43,226);
    noStroke();
    ellipse(60,60,50,50);
    ellipse(540,340,50,50);
    fill(255,165,0);
    ellipse(120,120,50,50);
    ellipse(mouseX,mouseY,50,50);
    
}