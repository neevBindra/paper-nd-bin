class Paper{
    constructor(){
    var op ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

        this.body = Bodies.circle(150,250,10,op)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
     
        ellipseMode(RADIUS);
        fill ("purple");
        ellipse(pos.x, pos.y,10,10);
        
    }

}