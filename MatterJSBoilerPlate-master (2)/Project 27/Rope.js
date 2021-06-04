class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.2,
            length : 100
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = bodyA;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){

        if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            strokeWeight(2);

            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
}