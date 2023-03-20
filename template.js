const person = {
  name: "Mozammel",
  ages: 23,
  job: "Bidas Mode",
  address: [
    { name: "Mozammel-Hosen", address: "Faridpur" },
    { name2: "Mozammel", address2: "Faridpur" },
  ],
  phone: ["123456", "56789", "1254578"],
  // Defferig angel Objects Declar
  34: "Mozammel Hosen Rull Name",
  "step-step": "This is Good Job In The Way",
};

const information = `This is My Name Is : ${person.name}
  This is Good Boy : ${person.address[1].name2}
  This is My Phone Number : ${person.phone.map((n) => n).join(" ")}
  This is Good : ${person.phone.forEach((m) => m)}
  `;
console.log(information);
