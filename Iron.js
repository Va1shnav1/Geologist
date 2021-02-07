class Iron{
    constructor(x, y, w, h){
        var options={
            restitution:0.5,
            density:3,
            friction:2
        }
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}