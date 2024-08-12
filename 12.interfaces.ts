/* Interface -> Way to define a contract for the shape and structure of an object, function, class
                Specifies the properties and their types that an object 'must' have
                Powerful tool for enforcing a certain structure in the code */
// For Object
// Interface Definition
interface Computer {
  readonly name: string;
  ram: number;
  hardDisk?: number;
}
console.log(
  "Computer Interface  --->  'Computer' only refers to a type, but is being used as a value here"
);
// Interface Usage
const computeri7: Computer = {
  name: "i7",
  ram: 8,
  //   hardDisk: 128,
};
console.log("computeri7  ---> ", computeri7);
// console.log("Modifying computeri7.name  ---> ", (computeri7.name = "i5"));
console.log("computeri7.name  ---> ", computeri7.name);
console.log("Modifying computeri7.ram  ---> ", (computeri7.ram = 16));
console.log("computeri7.ram  ---> ", computeri7.ram);
console.log("Accessing computeri7.hardDisk  ---> ", computeri7.hardDisk);
console.log(
  "Modifying computeri7.hardDisk  ---> ",
  (computeri7.hardDisk = 256)
);
console.log("computeri7.hardDisk  ---> ", computeri7.hardDisk);
console.log("computeri7 (After Modification)  ---> ", computeri7);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// For Function
// Interface Definition
interface MathOperation {
  (x: number, y: number, z?: number): number;
}
// Interface Usage
const add: MathOperation = (a, b, c) => a + b + (c ?? 0);
console.log("add(3,4,5)  ---> ", add(3, 4, 5));
console.log("add(8,23)  ---> ", add(8, 23));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const product: MathOperation = (a, b, c) => a * b * (c ?? 1);
console.log("product(11,17,22)  ---> ", product(11, 17, 22));
console.log("product(11,17)  ---> ", product(11, 17));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// For Object Methods
// Interface Definition
interface PersonInterface {
  personName: { firstName: string; middleName: string; lastName: string };
  age: number;
  location: [string, number];
  email?: string;
  isWebDeveloper: boolean;
  readonly 111222: string;
  greet(city: string): void;
}
function greetCall(user: PersonInterface, friend: string) {
  console.log(
    "Hello",
    friend + "! I am",
    user.personName.firstName,
    user.personName.middleName
  );
  user.greet(user.location[0]);
}
// Interface Usage
const userGP: PersonInterface = {
  personName: {
    firstName: "Gayathri",
    middleName: "Priyanka",
    lastName: "Ramesh",
  },
  age: 21,
  location: ["Salem", 636006],
  // email: "gayu.p84@gmail.com",
  isWebDeveloper: true,
  111222: "fav date",
  // Object Method
  greet(city) {
    console.log("Welcome to", city);
  },
};
console.log("UserGP  ---> ", userGP);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
greetCall(userGP, "XXX");
userGP.greet("Cuddalore");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const userPG: PersonInterface = {
  personName: {
    firstName: "Priyanka",
    middleName: "Gayathri",
    lastName: "Ramesh",
  },
  age: 21,
  location: ["Salem", 636006],
  email: "gayu.p84@gmail.com",
  isWebDeveloper: true,
  111222: "fav date",
  // Object Property with arrow function
  greet: (city) => {
    console.log(city, "Welcomes you");
  },
};
console.log("UserPG  ---> ", userPG);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
greetCall(userPG, "YYY");
userPG.greet("Chennai");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Declaration Merging -> Ability to extend or argument an existing declaration (Add new properties or methods to an existing declaration without modifying original declaration)
        In Interfaces -> Once an interface is declared, it cannot be modified
                         TS allows 'Declaration Merging' or 'Interface Extension' which is misconstructed as 'Re-opening'
                         This allows addition of properties and methods to interfaces without modifying existing declaration */

// Original Interface
interface Car {
  brand: string;
  start(): void;
}
// Interface Extension
interface Car {
  model: string;
  stop(): void;
}
// Interface Usage
const myCar: Car = {
  brand: "BMW",
  model: "M3",
  start() {
    console.log("Car Starts");
  },
  stop() {
    console.log("Car Stops");
  },
};
console.log("myCar  ---> ", myCar);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
myCar.start();
console.log("myCar.brand  ---> ", myCar.brand);
console.log("myCar.model  ---> ", myCar.model);
myCar.stop();
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
