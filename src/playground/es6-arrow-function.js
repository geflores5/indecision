// const square = function (x) {
//   return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(8));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameShort('Mike Smith'));