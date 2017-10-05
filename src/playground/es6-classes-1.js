class Person {
  constructor(name = 'John Smith', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi, ' + this.name;
    return `Hi. I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` and is studying ${this.major}.`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Student('Giovanni Flores', 28, 'Accounting');
const you = new Traveler();
const him = new Traveler('John Doe', 35, 'Los Angeles');

console.log(me.hasMajor());

console.log(me.getDescription());
console.log(you.getDescription());
console.log(him.getGreeting());
