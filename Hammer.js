class Hammer{
    constructor(x, y){
        var options={
            restitution:0.5,
            density:2,
            friction:1
        }
        this.w=120;
        this.h=30;
        this.body = Bodies.rectangle(x, y, 120, 30, options);
        World.add(world, this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}