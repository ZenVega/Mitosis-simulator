// (128,43,226)
let d;
let f;
let cells = [];

function setup(){
  createCanvas(600,400);
  frameRate(30);
for (let i=0; i<5; i++){
cells.push(new Cell(random(width),random(height), random(-3,3)));

}

};
function keyPressed() {
if (keyCode === ENTER) {
  cells.push(new Cell(mouseX,mouseY,0));
}
};

function draw(){
  background(242, 166, 166);
  noStroke();
  fill(0, 102, 153, 40);
  textSize(43);
  text('CLICK   CELL   FOR', 87, 153);
  textSize(100);
//  translate(width / 2, height / 2);
  text('MITOSIS', 50, 230);
  textSize(24);
  text('HIT ENTER TO CREATE NEW CELL', 91, 252);


  for (i of cells){
    i.move();
    i.show();
 for (j of cells){
      if (i !== j && i.intersects(j)){
        j.revmitosis(i);
        return;
      }
    }

  }
};

function mousePressed(){
  for(i of cells){
    if(i.split(mouseX, mouseY)){
        console.log ('clicked');
        i.mitosis();
        return;
    }
  }
};
