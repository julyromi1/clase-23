class canonBall {
  constructor (x,y){
  var options = {
      isStatic:true
  }
  this.r=30;
  this.body=Bodies.circle(x,y,this.r,options);
  this.image=loadImage ("assets/cannonball.png");
  World.add(world,this.body);
  }

  shoot (){
    var newAngle = canon.angle-28;  //Sirve para mover la parte de arriba del cañon (no va a ser en traslación como un circulo) por eso se tienen que hacer conversiones de radianes a grados.
    newAngle = newAngle * (3.14/180) //Esta es la conversión de radiones a grados. //VECTORES La dirección del movimiento.
    var velocity = p5.Vector.fromAngle (newAngle); //Se va a guardar en la var velocity como se mueve o la velocidad del movimiento de acuerdo al ángulo que se marca.
    velocity.mult (.5); //para que vaya en multlipos de .5.
    Matter.Body.setStatic(this.body, false); //Cuerpo restringido es un cuerpo que su movimiento depende de otro cuerpo osea que esta limitado su movimiento.
    Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});

  }

  display (){
    var pos = this.body.position;
    image(this.image,pos.x,pos.y,this.r,this.r);

  }
 

  
  }