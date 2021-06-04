class Ground{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 900, 5, options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;

        //push();
        //translate(x, y);
        rectMode(CENTER);
        fill('brown');
        rect(pos.x, pos.y, this.width, this.height);
        //pop();
    }
}