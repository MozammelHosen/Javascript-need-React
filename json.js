// Objects Convert to String

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
// Objects Convert to String
const result = JSON.stringify(person);
// console.log(result);

//   String Convert to Objects

// const person1 = {
// //   34: "Mozammel Hosen Rull Name",
//   "name": "Mozammel",
//   "ages": "23",
//   "job": "Bidas Mode",
// //   address: [
// //     { name: "Mozammel-Hosen", address: "Faridpur" },
// //     { name2: "Mozammel", address2: "Faridpur" },
// //   ],
// //   "step-step": "This is Good Job In The Way",
// };

// //   String Convert to Objects
// const result1 = JSON.parse(person1);
// // console.log(result1)

// Data Fetch
const url = `https://restcountries.com/v3.1/all`
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


//   Async Await
const country = async()=>{
    const res= await fetch(url)
    const data = await res.json()
    console.log(data)
}