/* Generics -> Allows to create reusable components that can work with a variety of types
               Makes it possible to define functions, classes and interfaces that can work with different data types without having to duplicate code
    function functionName<TypeParameter>(parameterName:parameterType):returnType{} */
function makeNumberArray(
  number1: number,
  number2?: number
): [number, number | undefined] {
  return [number1, number2];
}
console.log("makeNumberArray(10)  ---> ", makeNumberArray(10));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function makeStringArray(
  string1: string,
  string2?: string
): [string, string | undefined] {
  return [string1, string2];
}
console.log('makeStringArray("10", "Hi")  ---> ', makeStringArray("10", "Hi"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function makeAnyArray(any1: any, any2?: any): any[] {
  return [any1, any2];
}
console.log('makeAnyArray("10",false)  ---> ', makeAnyArray("10", false));
console.log("makeAnyArray(false)  ---> ", makeAnyArray(false));
console.log("makeAnyArray(undefined)  ---> ", makeAnyArray(undefined));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Function
function makeArray<TypeToBePassed>(
  parameter1: TypeToBePassed,
  parameter2?: TypeToBePassed
): [TypeToBePassed, TypeToBePassed | undefined] {
  return [parameter1, parameter2];
}
console.log("makeArray(10)  ---> ", makeArray(10));
console.log("makeArray(10,30)  ---> ", makeArray(10, 30));
console.log('makeArray("Hi","Hello")  ---> ', makeArray("Hi", "Hello"));
console.log("makeArray(true,false)  ---> ", makeArray(true, false));
// console.log('makeArray(true, "20")  ---> ', makeArray(true, "20"));
console.log(
  "makeArray(true, \"20\")  --->  Argument of type '\"20\"' is not assignable to parameter of type 'boolean | undefined'"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("makeArray<number>(10)  ---> ", makeArray<number>(10));
console.log("makeArray<number>(10,30)  ---> ", makeArray<number>(10, 30));
console.log(
  'makeArray<string>("Hi","Hello")  ---> ',
  makeArray<string>("Hi", "Hello")
);
console.log(
  "makeArray<boolean>(true,false)  ---> ",
  makeArray<boolean>(true, false)
);
console.log('makeArray<any>(true, "20")  ---> ', makeArray<any>(true, 20));
// console.log("makeArray<number>(10,'30')  ---> ", makeArray<number>(10, "30"));
console.log(
  "makeArray<number>(10,'30')  --->  Argument of type 'string' is not assignable to parameter of type 'number'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Object
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  val: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, val: obj[randomKey] };
}

const stringObj = { a: "Apple", b: "Banana", c: "Cherry" };
console.log(
  "getRandomKeyValuePair<string>(stringObj)  ---> ",
  getRandomKeyValuePair<string>(stringObj)
);

const numberObj = { a: 97, b: 98, c: 99 };
console.log(
  "getRandomKeyValuePair<number>(numberObj)  ---> ",
  getRandomKeyValuePair<number>(numberObj)
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// Filter array based on a Condition
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}
const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNums = filterArray<number>(numArray, (num) => num % 2 === 1);
console.log("oddNums  ---> ", oddNums);

const strArray = ["apple", "banana", "cherry", "date"];
const favFruit = filterArray<string>(strArray, (word) => word.startsWith("ch"));
console.log("favFruit  ---> ", favFruit);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Interface
interface Eat {
  name: string;
  color: string;
}
const eatArr: Eat[] = [
  { name: "Cherry", color: "Red" },
  { name: "Cauli", color: "Green" },
  { name: "Chilly", color: "Red" },
];
console.log("eatArr  ---> ", eatArr);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const redEats = filterArray<Eat>(eatArr, (item) => item.color === "Red");
console.log("redEats  ---> ", redEats);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// In Class
class Box<T> {
  private _content: T;
  constructor(initialContent: T) {
    this._content = initialContent;
  }
  getContent(): T {
    return this._content;
  }
  setContent(newContent: T): void {
    this._content = newContent;
  }
}

const boxStrObj = new Box<string>("Hello World");
console.log("boxStrObj  ---> ", boxStrObj);
console.log("boxStrObj.getContent()  ---> ", boxStrObj.getContent());
console.log(
  'boxStrObj.setContent("Hello TypeScript")  ---> ',
  boxStrObj.setContent("Hello TypeScript")
);
console.log("boxStrObj.getContent() ---> ", boxStrObj.getContent());
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const boxNumObj = new Box<number>(17);
console.log("boxNumObj  ---> ", boxNumObj);
console.log("boxNumObj.getContent()  ---> ", boxNumObj.getContent());
console.log("boxNumObj.setContent(11)  ---> ", boxNumObj.setContent(11));
console.log("boxNumObj.getContent()  ---> ", boxNumObj.getContent());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Mutiple Types
function reversePair<T, U>(val1: T, val2: U): [U, T] {
  return [val2, val1];
}
console.log(
  'reversePair("March", 17)  ---> ',
  reversePair<string, number>("March", 17)
);
console.log(
  'reversePair(11, "December")  ---> ',
  reversePair<number, string>(11, "December")
);
console.log("reversePair(8, 23)  ---> ", reversePair<number, number>(8, 23));
console.log(
  'reversePair("April","May")  ---> ',
  reversePair<string, string>("April", "May")
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
