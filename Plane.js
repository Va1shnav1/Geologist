class Plane{
    constructor(x, y, w, h){
        var options={
            isStatic:true
        }
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        fill("brown");
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
    }
}