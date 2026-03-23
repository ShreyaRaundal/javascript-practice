let students = ["Amit", "Rahul", "Sneha", "Priya"];

let hasRahul = students.includes("Rahul");

let startsWithS = students.find(name => name.startsWith("S"));

console.log("Rahul exists:", hasRahul);
console.log("Starts with S:", startsWithS);