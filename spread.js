const numbers = [12, 13, 134, 1143, 143, 435, 4, 5656, 56];
const result = [...numbers, 500, 5001];
console.log(result);




const person = {
  name: "Mozammel",
  ages: 23,
  job: "Bidas Mode",
  address: [
    { name: "Mozammel-Hosen", address: "Faridpur" },
    { name2: "Mozammel", address2: "Faridpur" },
  ],
};

const result2 = {...person}
console.log(result2)