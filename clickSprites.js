class clickSprites{

  constructor(posX,posY,tagNum){
    this.vec = createVector(posX,posY);
    //print(windowHeight/3);
    this.sizeH = height/3;
    this.sizeW = width/3
    this.width1 = this.vec.x;
    this.width2 = this.vec.x + this.sizeW;
    this.height1 = this.vec.y;
    this.height2 = this.vec.y + this.sizeH;
    this.tag = tagNum;
}//end of constructor
  
render(size){
  stroke(255);
  fill(0);
  rect(this.vec.x, this.vec.y,this.sizeW,this.sizeH);
}//end of render

IsClicked(){
  //check is rect is click
  //if mouseX and Y between width and height and mousePressed rect clicked
  
  var clicked = false;
  
  if(mouseX > this.width1 && mouseX < this.width2 && mouseY > this.height1 && mouseY < this.height2){   
    clicked = true;
  }
  return clicked
  }//end of isclicked
  
}//end of class
