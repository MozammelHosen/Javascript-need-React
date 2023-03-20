const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  //  console.log(element)
}

// Only Use for Array
for (const number of numbers) {
//   console.log("Hello Number", number);
}

const person = {
  name: "Mozammel",
  ages: 22,
  Job: "Bikar",
};
// step:1
const { name, ages, job } = person;
// Step : 2
const names = person.name
// Step : 3

// console.log(names)

// Only Use for Objects 
// for (const key in person) {
//    console.log(key)
// }


// Bractet Notation In Objects 
for (const key in person) {
    // Notation
//    console.log(person[key])
   console.log(key,person[key])
}