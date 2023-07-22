// Objects
let myDetails = [
    {
        name: "John", 
        age: 30,
        gender: "Male"
    },

    {
        name: "Mary",
        age: 25,
        gender: "Female"
    }
];

console.table(myDetails);

console.warn("Following logs are from Maps!");
// The new Map() method

const fruits = new Map([
    ["apples", 400],
    ["oranges", 300],
    ["bananas", 100]
]);

// The set() method

// Create a new Map
const mobile = new Map();

// Set the values

mobile.set("Samsung", "Galaxy S21 Ultra");
mobile.set("Apple", "iPhone 14 Pro Max");
mobile.set("OnePlus", 12);

// Change a value

mobile.set("Apple", "iPhone XR");

// Output

console.log(mobile);

//get() method - to get the value of a key
console.log("What model of Apple do we have rn ? " + mobile.get("Apple"));

console.table(fruits.get("apples"));

// size Property - to get the size of the map
console.log(fruits.size);

// delete() method - to delete a key-value pair

fruits.delete("oranges");
console.log(fruits);

// has() method - to return true if the key exists.

console.log(fruits.has('apples'));
fruits.set("oranges", 200);
console.log(fruits.has('oranges'));

// The forEach() method - calls a function for each key/value pair in a map.

// List all entries
let text = "";
mobile.forEach(function(value, key) {
text = text + key + " = " + value + "\n";
})

console.log(text);

// entries() method

let x = "";
let text2 = "";
for (const x of fruits.entries()) {
    text2 = text2 + x + "\n";
}
console.log(text2);