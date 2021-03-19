class Drop{
    constructor(x,y){
        var options = {
            restitution:0.1,
            friction:0.1,
          }


          this.rain= Bodies.circle(x,y,7,options);
          this.radius=7;

          World.add(world,this.rain)

        }          
          updateY(){  
          if(this.rain.position.y>height){
              Matter.Body.setPosition(this.rain,{x:random(0,500),y:random(0,500)})
          }
        }

    

    display(){
        var pos =this.rain.position;
        
        
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
       
      }
}
