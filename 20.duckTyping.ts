// Objects with Properties and modifications
let personA = {
  name: "Gayathri",
  age: 20,
  isDevelopper: true,
};
console.log("personA  ---> ", personA);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personA = {
  name: "Priyanka",
  isDevelopper: false,
  age: 20,
};
console.log("personA (change in order of properties)  ---> ", personA);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// personA = {
//   name: "Priyanka",
//   age: 20,
// };
console.log(
  "personA (Reassigned with less no. of properties)  --->  Property 'isDevelopper' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; isDevelopper: boolean; }'"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// personA = {
//   name: "Priyanka",
//   age: 20,
//   isDevelopper: false,
//   location: "Salem",
// };
// personA = {
//   fullName: "Priyanka",
//   currentAge: 20,
//   isProgrammer: false,
// };
console.log(
  "personA (Mismatch of properties)  --->  Object literal may only specify known properties, and 'location' does not exist in type '{ name: string; age: number; isDevelopper: boolean; }'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Usage of 'any' type
let personB: any = {
  name: "Gayathri",
  age: 20,
  isDevelopper: true,
};
console.log("personB  ---> ", personB);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personB = {
  name: "Priyanka",
  age: 20,
};
console.log("personB (Reassigned with less no. of properties)  ---> ", personB);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personB = {
  name: "Priyanka",
  age: 20,
  isDevelopper: false,
  location: "Salem",
};
console.log("personB (Reassigned with more no. of properties)  ---> ", personB);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personB = {
  fullName: "Priyanka",
  currentAge: 20,
  isProgrammer: false,
};
console.log("personB (Mismatch of properties)  ---> ", personB);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// TypeCasting
let personC = <any>{
  name: "Gayathri",
  age: 20,
  isDevelopper: true,
};
console.log("personC  ---> ", personC);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personC = {
  name: "Priyanka",
  age: 20,
};
console.log("personC (Reassigned with less no. of properties)  ---> ", personC);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personC = {
  name: "Priyanka",
  age: 20,
  isDevelopper: false,
  location: "Salem",
};
console.log("personC (Reassigned with more no. of properties)  ---> ", personC);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

personC = {
  fullName: "Priyanka",
  currentAge: 20,
  isProgrammer: false,
};
console.log("personC (Mismatch of properties)  ---> ", personC);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Duck Typing -> Technique in TypeScript is used to compare two objects by determining if they have the same type matching properties and objects members or not
                  As a result of the duck-typing rule, the TypeScript compiler verifies that two objects are identical (ensures type safety)

        Scenario: Assign first object with two properties and a method
                  Assign second object with only two properties and no method
                  TS compiler raises a compile-time error in such situations when a variable of object1 is created and assigned to a variable of the object2, but, a variable of the object2 can be created and assigned to a variable of the object1 */

class Pigeon {
  sound = "coos";
  fly = true;
}

class Owl {
  fly = true;
  color = "grey";
  sound = "hoots";
}

class Penguin {
  color = "White-Black";
  sound = "peeps";
  swim() {
    console.log("I'm a bird and i can swim");
  }
  fly = false;
}

// Only the common properties can be accessed
let pigeonToOwl: Pigeon = new Owl();
let pigeonToPenguin: Pigeon = new Penguin();

// let owlToPigeon: Owl = new Pigeon();
let owlToPenguin: Owl = new Penguin();

// let penguinToPigeon: Penguin = new Pigeon();
// let penguinToOwl: Penguin = new Owl();

// Printing values
console.log(`Pigeon assigned to Owl  --->  ${pigeonToOwl}`);
console.log(`Pigeon assigned to Owl (sound)  --->  ${pigeonToOwl.sound}`);
console.log(`Pigeon assigned to Owl (fly)  --->  ${pigeonToOwl.fly}`);
// console.log(`Pigeon assigned to Owl (color)  --->  ${pigeonToOwl.color}`);
console.log(
  `Pigeon assigned to Owl (color)  --->  Property 'color' does not exist on type 'Pigeon'`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(`Pigeon assigned to Penguin  --->  ${pigeonToPenguin}`);
console.log(
  `Pigeon assigned to Penguin (sound)  --->  ${pigeonToPenguin.sound}`
);
console.log(`Pigeon assigned to Penguin (fly)  --->  ${pigeonToPenguin.fly}`);
// console.log(`Pigeon assigned to Penguin (color)  --->  ${pigeonToPenguin.color}`);
console.log(
  `Pigeon assigned to Penguin (color)  --->  Property 'color' does not exist on type 'Pigeon'`
);
// console.log(
//   `Pigeon assigned to Penguin (swim)  --->  ${pigeonToPenguin.swim()}`
// );
console.log(
  `Pigeon assigned to Penguin (fly)  --->  Property 'swim' does not exist on type 'Pigeon'`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  `Owl assigned to Pigeon  --->   Property 'color' is missing in type 'Pigeon' but required in type 'Owl'.`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(`Owl assigned to Penguin  --->  ${owlToPenguin}`);
console.log(`Owl assigned to Penguin (sound)  --->  ${owlToPenguin.sound}`);
console.log(`Owl assigned to Penguin (fly)  --->  ${owlToPenguin.fly}`);
console.log(`Owl assigned to Penguin (color)  --->  ${owlToPenguin.color}`);
// console.log(`Owl assigned to Penguin (swim)  --->  ${owlToPenguin.swim()}`);
console.log(
  `Owl assigned to Penguin (swim)  --->  Property 'swim' does not exist on type 'Owl'`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "Penguin assigned to Pigeon  --->  Property 'swim' is missing in type 'Pigeon' but required in type 'Penguin'"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "Penguin assigned to Owl  --->  Property 'swim' is missing in type 'Owl' but required in type 'Penguin'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
