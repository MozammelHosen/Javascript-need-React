const x = 6;
const y = true;

x > 5 && y === true
  ? console.log("2 Multiple Condition True")
  : console.log("Multiple Condition false");

const xy =
  x === 5 || y === true ? console.log("Hello Equal ") : console.log("World");

//   Multiple Condition
x > 6
  ? console.log("Multiple Condition X > 5")
  : y === true
  ? console.log("2 Multiole Condition True")
  : "Not Allow In The Way ";

//   Number Convert to String

let num = 55;
num = num + "";
console.log(num);

// String to Convert Number
let num1 = 55;
num1 = +num1;
console.log(num1);
