type UserInfo = {
  personName: { firstName: string; middleName: string; lastName: string };
  age: number;
};
type UserDetails = {
  location: [string, number];
  email?: string;
  isWebDeveloper: boolean;
  readonly 111222: string;
};

/* Intersection Type -> A way to combine multiple types into a single type that includes all properties and methods of each constituent type
        Symbol '&' */
// In Variable
let neverVariable: string & number;
// neverVariable = true;
// neverVariable = 20;
// neverVariable = "Hi";
console.log(
  "'neverVariable' cannot be assigned with any value as a value cannot be both 'string' and 'number'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Object
type UserIntersection = UserInfo & UserDetails;
const userData: UserIntersection = {
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
};

console.log("UserData  ---> ", userData);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Type of 'person'  ---> ", typeof userData);
console.log(
  "Value of 'personName' property in 'userData'  ---> ",
  userData.personName
);
console.log(
  "Value of 'firstName' property in 'userData'  ---> ",
  userData.personName.firstName
);
console.log(
  "Value of 'location' property in 'userData'  ---> ",
  userData["location"]
);
console.log(
  "Value of '111222' property in 'userData'  ---> ",
  userData[111222]
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Union Type -> Used to declare a type that can have one of several possible types (allows a variable or parameter to accept multiple typess)
        Symbol '|' */
// In Variable
let password: string | number;
password = "ABCD";
console.log("password (string)  ---> ", password);
password = 1234;
console.log("password (number)  ---> ", password);
// password = true;
// password = undefined;
// password = null;
console.log(
  "password cannot be assigned to any other datatype other than string|number"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Object
type UserUnion = UserInfo | UserDetails;

const userInfoData: UserUnion = {
  personName: {
    firstName: "Gayathri",
    middleName: "Priyanka",
    lastName: "Ramesh",
  },
  age: 21,
  // email: "gayu.p84@gmail.com",
};
console.log("UserInfoData  ---> ", userInfoData);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Type of 'person'  ---> ", typeof userInfoData);
console.log(
  "Value of 'personName' property in 'userInfoData'  ---> ",
  userInfoData.personName
);
console.log(
  "Value of 'firstName' property in 'userInfoData'  ---> ",
  userInfoData.personName.firstName
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const userDetailsData: UserUnion = {
  location: ["Salem", 636006],
  email: "gayu.p84@gmail.com",
  isWebDeveloper: true,
  111222: "fav date",
};
console.log("UserDetailsData  ---> ", userDetailsData);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Type of 'person'  ---> ", typeof userDetailsData);
console.log(
  "Value of '111222' property in 'person'  ---> ",
  userDetailsData[111222]
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Arrays
const unionArr: (
  | number
  | boolean
  | string[]
  | [null | undefined | boolean]
  | [number[] | boolean[]]
  | [null[] & string[]]
)[] = [
  10,
  20,
  ["AAA", "BBB"],
  // "CCC",
  true,
  ["DDD"],
  // null,
  // undefined,
  [null],
  [undefined],
  [true],
  [[30, 40]],
  [[false, true]],
  [[23, 47]],
  // [["'never' -> A value cannot be both 'string' and 'null'"]],
  // [[null]],
];
console.log("unionArr  ---> ", unionArr);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "'unionArr' can contain: \nOnly number|boolean, \nOne-dimensional array of only strings \nSingleton Array with either null|undefined|boolean \nNested array of number|boolean"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Function
function plusOperator(a: number | string, b: number | string): number | string {
  let result = +a + +b;
  return result;
}
console.log("plusOperator(10,20)  ---> ", plusOperator(10, 20));
console.log("plusOperator('10',20)  ---> ", plusOperator("10", 20));
console.log("plusOperator('10','20')  ---> ", plusOperator("10", "20"));
console.log("plusOperator(10,'HI')  ---> ", plusOperator(10, "HI"));
console.log("plusOperator('10','HI')  ---> ", plusOperator("10", "HI"));
console.log("plusOperator('Hello','HI')  ---> ", plusOperator("Hello", "HI"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Literal Type -> Specify a value that can only be the specified literal value and no other (Case-sensitive) */
let color: "Red" | "Blue" = "Blue";
console.log("color (Blue)  ---> ", color);
color = "Red";
console.log("color (Red)  ---> ", color);
color = "Blue";
console.log("color (Blue)  ---> ", color);
// color = "White";
// color = 20;
console.log("color cannot be assigned with anything otherthan Red|Blue");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

let trueVariable: true;
console.log(
  "trueVariable  ---> ",
  true,
  " --- This value cannot be changed with any other"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
