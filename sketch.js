var value = 0;

function setup() {
	createCanvas(windowWidth,windowHeight);
    background(255)
    noStroke();
    fill('#FEB7E2');
    ellipse(width/2, height/2,800,600);
}

function draw() {
  fill(value);
  ellipse(width/2-150, height/2,120);
  ellipse(width/2+150, height/2,120);
    
  fill(0);
  ellipse(width/2-150, height/2,20);
  ellipse(width/2+150, height/2,20);

}

function deviceTurned() {
  if (turnAxis == 'X'){
    if (value == 0){
      value = 255
    } else if (value == 255) {
      value = 0;
    }
  }
}

//50881
