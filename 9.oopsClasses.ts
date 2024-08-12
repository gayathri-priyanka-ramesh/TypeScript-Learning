/* Class Properties Annotations -> Define data type of the property and ensure that it is always consistent */
class PersonClass {
  readonly name: string;
  age: number;
  city?: string;
  email?: string;
  greet: Function;
  appreciate: Function;
  constructor(name: string, age: number, city?: string, email?: string) {
    console.log(
      "Constructor Function called when object is created  --- This  ---> ",
      this
    );
    // Instance Members
    this.name = name;
    this.age = age;
    this.city = city;
    console.log("'city' is optional parameter and may or maynot be passed");
    console.log("'email' is optional property and need not be initialized");
    // this.email = email;
    this.greet = function (friend: string) {
      return `Hello ${friend}, I am ${this.name} from ${city} and I am ${this.age} years old.`;
    };
    this.appreciate = (friend: string) => {
      return `Very Good ${friend}!`;
    };
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
  //   Prototype Members
  wish(friend: string) {
    return `All the best ${friend}, I am ${this.name} from ${this.city} and I am ${this.age} years old.`;
  }
  assertion = () => {
    return `Everything will be alright soon`;
  };
}
const userA = new PersonClass("AAA", 15);
console.log("UserA (Before Modification)  ---> ", userA);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("Modifying Name  ---> ", (userA.name = 22));
console.log("Modifying Age  ---> ", (userA.age = 22));
console.log("UserA (After Modification)  ---> ", userA);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
const userB = new PersonClass("BBB", 19, "YYY", "abc@xy.zz");
console.log("UserB  ---> ", userB);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Modifying Age  ---> ", (userB.age = 22));
console.log("Instance Member Method 'Greet'  ---> ", userB.greet("CCC"));
console.log(
  "Instance Arrow Member Method 'Appreciate'  ---> ",
  userB.appreciate("DDD")
);
console.log("Prototypal Member Method 'Wish'  ---> ", userB.wish("EEE"));
console.log(
  "Prototypal Arrow Member Method 'Assertion'  ---> ",
  userB.assertion()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
