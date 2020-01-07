class Cell{
  constructor(x,y,z,r = 70){
    this.x = x;
    this.y = y;
    this.r = r;

    this.wobx = z;
    this.var = random(-1,1);
    };


move(){
  this.x += random(-1.5,1.5);
  this.y += random(-1.5,1.5);

  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);



};

show(){
  strokeWeight(5);
  stroke(247, 161, 204);
  let c = map(this.r,20,200,200,250);
  fill(c, 87, 153);
  ellipse(this.x, this.y, this.r + this.wobx,this.r - this.wobx);
  this.wobx += this.var;

  if(this.wobx > 3){
    this.var = random(-0.1,-0.3);
  }
  if (this.wobx < -3){
    this.var = random(0.1,0.3);
  }
  this.r = constrain(this.r, 20, 200);
};
split(x,y){
  let a = dist(this.x, this.y, x,y);
  if(a < this.r/2){
    return true;

  } else {
    return false;
  }
};

mitosis(){
  this.r /= 2;
  cells.push(new Cell (this.x + this.r * random(-1,1) *1.5, this.y + this.r  * random(-1,1) *1.5, random(-3,3), this.r));
};

revmitosis(i){

  cells.splice(i,1);
  this.r += i.r;


};


  intersects(other){
    let d =  dist(this.x,this.y,other.x,other.y);
    return (d < this.r/2 + other.r/2);

  }


};
