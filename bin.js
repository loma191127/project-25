class Bin {
    constructor(x, y, width, height,options) {
      var options = {
         isStatic:true,
          'restitution':0.0,
          'friction':20000,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      this.image = loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      translate (pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
        image(this.image, 0, -40, this.width, this.height);
      pop ();
    }
  }