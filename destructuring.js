// array destructuring
const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
// step : 1 Old Work
const result = numbers[0];
console.log(result);

// Step : 2 ES-6 Modern Work
const [a, b, c, d, e] = numbers;
console.log(a, b, c);

const obj = {
  name: "Mozammel",
  ages: 23,
  job: "Internation Learn",
};
// Step : 1
const { name, ages, job } = obj;
console.log(name);
// step :2 
const result1 = obj.name
console.log(result1)
// step : 3
const person = obj["name"]
console.log(person)