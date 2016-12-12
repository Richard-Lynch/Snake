var s;
var scl = 10;
var loops = 99999;
var speed = 20;
var food;
//var table;

function setup() {
  createCanvas(600, 600);
  s  = new Snake();
  pickLocation();
  
  // table = new p5.Table();

  // table.addColumn('Score');
  // table.addColumn('Date');
  //table.addColumn('name');
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  //if(loops > speed/(s.total+1)){
    s.update();
    //loops = 0;
  //}
  //loops++
  s.show();
  
  textSize(32);
  text(s.total, 10, 30);
  fill(255, 255, 255);
  
  fill(200, 0, 200);
  rect(food.x, food.y, scl, scl);
}

function mousePressed(){
  s.total++;
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    s.dir(0, -1);
  } else if(keyCode == DOWN_ARROW){
    s.dir(0, 1);
  } else if(keyCode == LEFT_ARROW){
    s.dir(-1, 0);
  } else if(keyCode == RIGHT_ARROW){
    s.dir(1, 0);
  }
  
}