             class monster{
        constructor(x,y,r){
var opt={isStatic:false,frictionAir:0}
this.image=loadImage("images/Monster-01.png");
this.x=x;
this.y=y;
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r,opt);
World.add(world,this.body);            
             }
     
display(){   
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    
    this.scale=5.0
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    
    pop();
    
             }
             }