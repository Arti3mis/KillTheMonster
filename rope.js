class rope{
    constructor(bodyA,pointB){
var opt={bodyA:bodyA,pointB:pointB,stiffness:1.2,length:300}
this.body=Constraint.create(opt);
this.pointB=pointB;
World.add(world,this.body);

    }

    display(){
var pointA=this.body.bodyA.position;
var pointB=this.pointB
push();
strokeWeight(0);                    
line(pointB.x,pointB.y,pointA.x,pointA.y);  
pop();
    }  
    
    }
