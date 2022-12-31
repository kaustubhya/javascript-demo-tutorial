// Any function that needs a (.) is called a method

const nums =[1, 2, 3];
nums.push();


class Car {
  constructor(name, color, topSpeed) {

    // these are properties
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.currentSpeed = 0;
  }

  // lets create some methods now!

  zeroToSixty(){
    setTimeout(() => {
      console.log('Phew That was fast bro!!');
      this.currentSpeed = 60;
      console.log(this.currentSpeed);
    }, 3000);
  };

  drive(){
    console.log("Just drove for 2 miles bro!");
    this.currentSpeed += 10;
    console.log (`Driving at ${this.currentSpeed} mph`);
  }

  brake(){
    console.log("Braking");
    this.currentSpeed -= 10; 
  }

  stop(){
    console.log("Stop the car!!");
    this.currentSpeed = 0;
  }

}

const ferrari = new Car('Ferrari', 'Green', 450);

ferrari.drive();
ferrari.drive();
ferrari.drive();
ferrari.drive();
ferrari.drive();
console.log(ferrari.currentSpeed);
ferrari.brake();
console.log(ferrari.currentSpeed);
ferrari.stop();
console.log(ferrari.currentSpeed);

// console.log(ferrari);
// console.log(ferrari.name);
// console.log(ferrari.color);
// console.log(ferrari.topSpeed);
// console.log(ferrari.currentSpeed);

// ferrari.drive();
// ferrari.brake();

// console.log(ferrari.currentSpeed);
// ferrari.drive();
// ferrari.drive();
// ferrari.drive();

// ferrari.zeroToSixty();
// console.log(ferrari.currentSpeed);

const porsche = new Car("Porsche", "Red", 400);
console.log(porsche.color);
console.log(porsche.name);
console.log(porsche.topSpeed);
porsche.drive();
porsche.drive();
porsche.drive();
porsche.drive();
console.log(porsche.currentSpeed);
porsche.brake();
console.log(porsche.currentSpeed);
porsche.stop();
console.log(porsche.currentSpeed);

const nums2 = [1,2,3,4,5];
nums2.forEach(_ => porsche.drive());
// using a loop for drive function here
porsche.zeroToSixty();
porsche.stop();
console.log(porsche.currentSpeed);
