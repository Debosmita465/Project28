class chain{
    constructor(bodyA,bodyB){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.01,
    length:0.01
}
this.chain = Constraint.create(options);
World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyB = null;
    }

    attach(body){
this.chain.bodyB = body;
    }
    display(){
        if(this.chain.bodyB){
        strokeWeight(2);
       line(this.chain.bodyA.position.x-50,this.chain.bodyA.position.y-60,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}
}