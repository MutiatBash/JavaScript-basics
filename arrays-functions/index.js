// Question 1
// Mutating Array Methods

// Question 2
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// 2a
languages.push("kotlin");

// 2b
languages.splice(3, 0, "Java");

// 2c
languages.shift();

// 2d"
languages.unshift("Scala", "Swift");

// 2d
languages.splice(5, 1, "Go", "Rust");

console.log(languages);

// Question 3
// Banana will be replaced with orange
let fruit = ["apple", "mango", "banana"];
function ChangeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
ChangeFruit(fruit);
console.log(ChangeFruit(fruit));

// Question 4
let numbers = [5, 6, 87, 54, 48];
function max() {
  return Math.max(...numbers);
}
max(numbers);
console.log(max(numbers));

// Question 5
