// Initial object
let person = {
    name: "John",
    age: 30
};

// Adding a new key 'address' to the object
person.address = "123 Main St";

console.log(person);
// Output: { name: "John", age: 30, address: "123 Main St" }


//-----------------------------------------------
// deleting a key from the object

// Initial object
let person = {
    name: "John",
    age: 30,
    address: "123 Main St"
};

// Deleting the 'address' key
delete person.address;

console.log(person);
// Output: { name: "John", age: 30 }
