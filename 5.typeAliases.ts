/* Type Aliases -> Allows to define a custom type that refers to another type and give it a more meaningful or descriptive name
                   A way to create a new name for an existing type
    Defined using 'type' keyword followed by the name of the aliases (Starts with UpperCase by convention), an '=' sign and type it refers to 
        type AliasName = dataType */

type Person = {
  personName: { firstName: string; middleName: string; lastName: string };
  age: number;
  location: [string, number];
  // Optional Property -> Object can be created with or without it (all other properties are mandate)
  email?: string;
  isWebDeveloper: boolean;
  // Readonly Property -> Cannot be modified
  readonly 111222: string;
};

const User: Person = {
  personName: {
    firstName: "Gayathri",
    middleName: "Priyanka",
    lastName: "Ramesh",
  },
  age: 21,
  location: ["Salem", 636006],
  isWebDeveloper: true,
  111222: "fav date",
  email: "gayu.p84@gmail.com",
};
console.log("User  ---> ", User);
console.log("Type of User  ---> ", typeof User);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("Modifying 'age'  ---> ", (User.age = 22));
// console.log("Modifying '111222'  ---> ", (User[111222] = "Red~Blue"));
console.log("Modification of 'readonly' property is not possible");
console.log("User (After Modification) ---> ", User);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const printPersonInfo = (user: Person) =>
  // Need not be given (set by default)
  //: {
  //   PersonName: { firstName: string; middleName: string; lastName: string };
  //   firstName: string;
  //   middleName: string;
  //   lastName: string;
  //   age: number;
  //   location: [string, number];
  //   city: string;
  //   pincode: number;
  //   isDeveloper: boolean;
  //   111222: string;
  //   email?: string;
  //   greet: Function;
  //   wish: Function;
  //   ageSum: Function;
  //   ageDiff: Function;
  //   }
  {
    // Creates and returns an object
    return {
      PersonName: user.personName,
      firstName: user.personName.firstName,
      middleName: user.personName.middleName,
      lastName: user.personName.lastName,
      age: user.age,
      location: user.location,
      city: user.location[0],
      pincode: user.location[1],
      isDeveloper: user.isWebDeveloper,
      111222: user[111222],
      // Nullish Coalescing
      email: user.email ?? "Email not given",
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
  };

console.log("printPersonInfo(User)  ---> ", printPersonInfo(User));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const userVariable = printPersonInfo(User);
console.log("userVariable  ---> ", userVariable);
console.log("Type of userVariable  ---> ", typeof userVariable);
console.log("Modifying userVariable  ---> ", (userVariable.age = 22));
// Can be modified as it is completely another object with additional properties
console.log(
  "Modifying userVariable  ---> ",
  (userVariable[111222] = "Red~Blue")
);
console.log("userVariable (After Modification)  ---> ", userVariable);
console.log("Method  ---> ", userVariable.greet("CCC"));
console.log("Method with enhanced object  ---> ", userVariable.wish("DDD"));
console.log("Method in arrow  ---> ", userVariable.ageSum(15, 19));
console.log("Method in one line arrow  ---> ", userVariable.ageDiff(19, 15));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
