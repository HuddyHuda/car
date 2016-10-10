var MakeCar = require('./my-module')

var honda = new MakeCar ('red', true);

console.log(honda.speed);

honda.accelerate(20);

console.log("now honda car has a speed of " + honda.speed);
