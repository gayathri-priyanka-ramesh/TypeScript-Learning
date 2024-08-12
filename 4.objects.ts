/* Object -> Structured datatype that represents a collection of properties, each with a key and an associated value
             Properties of an object can have specific types
             An object itself can be annotated with a type, often defined using an interface or a type alias
             TS uses Structural Typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility
    Syntax -> 'type varName (annotaions/types) = {property:value}' */
const object: {} = {};
console.log("Object  ---> ", object);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const person: {
  personName: { firstName: string; middleName: string; lastName: string };
  age: number;
  location: [string, number];
  isAngularDeveloper: boolean;
  111222: string;
} = {
  personName: {
    firstName: "Gayathri",
    middleName: "Priyanka",
    lastName: "Ramesh",
  },
  age: 21,
  location: ["Salem", 636006],
  isAngularDeveloper: true,
  111222: "fav date",
  // isWebDeveloper: true,
};
console.log(
  "It shows error is any 'property:value' is present in annotation but not defined inside object or if any 'property:value' not present in annotation but defined inside object"
);
console.log("Person  ---> ", person);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Type of 'person'  ---> ", typeof person);
console.log(
  "Value of 'personName' property in 'person'  ---> ",
  person.personName
);
console.log(
  "Value of 'firstName' property in 'person'  ---> ",
  person.personName.firstName
);
console.log(
  "Value of 'location' property in 'person'  ---> ",
  person["location"]
);
console.log("Value of '111222' property in 'person'  ---> ", person[111222]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Addition, Deletion and Modification of property:value pairs
// person.favColor = "Red"
console.log(
  "Addition of new property and deletion of existing property is not possible"
);
console.log(
  "Modifies existing property with new value and returns the new value  ---> ",
  (person[111222] = "Red🤝Blue")
);
console.log("Person after modifying '111222'  ---> ", person);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Factory Function -> used to create and return objects
function user(
  name: string,
  age: number,
  city: string
): {
  name: string;
  age: number;
  city: string;
  greet: Function;
  wish: Function;
  ageSum: Function;
  ageDiff: Function;
} {
  // This is a factory function which creates an object and returns it
  return {
    name: name,
    // It is enhanced object literal where propertyName/value is given only once
    age,
    city,
    greet: function (friend: string): string {
      return `Welcome ${friend}`;
    },
    wish(friend: string): string {
      return `All the best ${friend}`;
    },
    ageSum: (age1: number, age2: number): number => {
      return age1 + age2;
    },
    ageDiff: (age1: number, age2: number): number => age1 - age2,
  };
}
console.log("User A  ---> ", user("AAA", 15, "XXX"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const userX = user("BBB", 19, "YYY");
console.log("User B  ---> ", userX);
console.log("Method  ---> ", userX.greet("CCC"));
console.log("Method with enhanced object  ---> ", userX.wish("DDD"));
console.log("Method in arrow  ---> ", userX.ageSum(15, 19));
console.log("Method in one line arrow  ---> ", userX.ageDiff(19, 15));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
