class mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true, restitution:0.0, friction:0.6
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("mango1.png");
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill(217,47,200);
        image(this.image,0,0,this.radius*3);
        pop();
    }
    
    }