const userA = { name: "Oleg", role: "member", age: 20 };
const userB = structuredClone(userA);
userB.name = "Stepan";
userB.role = "admin";
console.log(userA);
console.log(userB);