function Snake(){
  this.x;
  this.y;
  
  this.xspeed;
  this.yspeed;
  
  this.total = 0;
  this.tail = [];
  
  this.alive = 0;
  this.been_updated = 0;
  
  this.update = function(){
    if(loops > speed/(s.total+1)){
      this.been_update = 0;
      if(this.total === this.tail.length){
        for(var i = 0; i<this.total-1; i++){
          this.tail[i] = this.tail[i+1];
        }
      }
      this.tail[this.total-1] = createVector(this.x, this.y);
      
      for(var i = 0; i < this.tail.length-1; i++){
        if(this.tail[i].x == this.x && this.tail[i].y == this.y){
          this.alive = 0;
        }
      } 
      
      for(var i = 0; i< this.tail.length; i++){
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      
      this.x = this.x + this.xspeed*scl;
      this.y = this.y + this.yspeed*scl;
      
      if(this.x < 0){
        this.x = 0;
        this.xspeed = 0;
        this.alive = 0;
        } 
      if(this.y < 0){
        this.y = 0;
        this.yspeed = 0;
        this.alive = 0;
        }
      if(this. x > width-scl){
        this.x = width-scl;
        this.xspeed = 0;
        this.alive = 0;
        }
      if(this.y > height-scl){
        this.y = height-scl;
        this.yspeed = 0;
        this.alive = 0;
        }
        
      if(this.alive < 1){
        
        var score;
      var cols = floor(width/scl);
      var rows = floor(height/scl);
      this.x = (floor(cols)/2)*scl;
      this.y = (floor(rows)/2)*scl;
      
      this.xspeed = 0;
      this.yspeed = 0;
      
      this.total = 0;
      delete this.tail;
      this.tail = [];
      
      
      
      this.alive = 1;
      }
        
      if(this.x == food.x && this.y == food.y){
        this.eat();
      }
      loops = 0;
    }
    loops++;
  }
  
  this.eat = function(){
    this.total++;
    speed--;
    pickLocation();
  }
  
  this.show = function(){
    fill(255);
    for(var i = 0; i< this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
  
  this.dir = function(x,y){
    if(this.been_update < 1){
      if((abs(x) != abs (this.xspeed) && abs(y) != abs (this.yspeed))||(this.xspeed == 0 && this.yspeed == 0)){
        this.xspeed = x;
        this.yspeed = y;
      }
      this.been_updated = 1;
    }

  }
}