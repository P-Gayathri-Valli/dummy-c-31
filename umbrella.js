class umbrella {
    constructor(x,y){
        var options={
            isStatic :true,
            friction:0.1,
            density:1
        }
        this.body = Bodies.circle(x,y,1,options);
        this.image=loadImage("walking_1.png")
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 250, 250);
        pop();
      }
   
}