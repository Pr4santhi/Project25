class Paper{
    constructor(x,y){
      super(x,y,50,50);
     this.image = addImage("paperImage");
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
