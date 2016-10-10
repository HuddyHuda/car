
var Car = function (speed,color){
  this.speed = speed;
  this.color = color;
  this.accelerate = function (acceleraterate){

//speed still remains
var oldSpeed = this.speed
//this.speed += acceleraterate;

// new speed
this.speed = oldSpeed + acceleraterate;


return "currentspeed:" + this.speed + "oldspeed:" + oldSpeed;

  }
}

module.exports = Car;
