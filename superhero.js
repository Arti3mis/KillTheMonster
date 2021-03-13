class superhero{
    constructor(x,y,r){

var opt={frictionAir:0.005,
    density:1.0
    }
this.image=loadImage("images/Superhero-01.png");
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r,opt);
World.add(world,this.body);
}

display(){
var angle = this.body.angle;
var pos = this.body.position;
push()
translate(pos.x,pos.y);
rotate(angle);

imageMode(CENTER);
//strokeWeight(2);
//stroke("red")
//fill(255,255,255);
image(this.image,0,0,this.r+150,this.r+100);

pop()

    }
    }
