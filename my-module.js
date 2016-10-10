
var Car = function (speed,color,convertible){
  this.speed = 0;
  this.color = color;
  this.convertible = convertible
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
