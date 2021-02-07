class Sand{
    constructor(x, y, r){
        var options={
            restitution:1.3,
            friction:5,
            density:1
        }
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display(){
        fill("pink");
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r, this.r);
    }
}