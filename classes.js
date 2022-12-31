// Any function that needs a (.) is called a method

const nums =[1, 2, 3];
nums.push();


class Car {
  constructor(name, color, speed) {

    // these are properties
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  // lets create some methods now!

  drive(){
    console.log("Just drove for 2 miles bro!");
  }

  brake(){
    console.log("It's braking power is efficient bro!!");
  }

}

const ferrari = new Car('Ferrari', 'Green', 450);

console.log(ferrari);
console.log(ferrari.name);
console.log(ferrari.color);
console.log(ferrari.speed);
ferrari.drive();
ferrari.brake();

