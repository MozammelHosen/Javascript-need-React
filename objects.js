const person = {
  name: "Mozammel",
  ages: 23,
  job: "Bidas Mode",
  address: [
    { name: "Mozammel-Hosen", address: "Faridpur" },
    { name2: "Mozammel", address2: "Faridpur" },
  ],
  // Defferig angel Objects Declar
  34: "Mozammel Hosen Rull Name",
  "step-step": "This is Good Job In The Way",
};
//  Step : 1 Dot-Notation
const name = person.name;
console.log(name);

// Step : 2 Bracket Notation
const name1 = person["name"];
console.log(name1);

// Step : 3
const props = "job";
console.log(person[props]);

// bracket Notation Not allow Dot Notation
const name2 = person["34"];
console.log(name2);

// bracket Notation Not allow Dot Notation
const name3 = person["step-step"];
console.log(name3);

// Set Objects
const obj = {};
// Dot Notation
obj.name = "Mozammel";
// Bracket Notation
obj["Address"] = "Faridpur";
// step : 3
const nam = "Hello";
obj[nam] = "Hello World In The Way First Class";
console.log(obj);


// Objects Theke Key Gula Ber Korer Method
const keys = Object.keys(obj)
console.log(keys)
// Objects Theke Valus Gula Ber Korer Method
const value = Object.values(obj)
console.log(value)