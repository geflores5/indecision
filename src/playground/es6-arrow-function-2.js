const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add(55, 1));

const user = {
  name: 'Andrew',
  cities: ['Los Angeles', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' have live in ' + city);
  }
}
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
}

console.log(multiplier.multiply());