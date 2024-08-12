// Function Parameter Annotations -> Specify the expected type of parameters that the function takes

// Function Parameters implicitly have 'any' datatype (connot be run without explicitly mentioning them)

// Regular Function
function concat(str: string) {
  return str + "World";
}
const concatResult = concat("Hello");
// const concatResult = concat(0);
console.log("concatResult  ---> ", concatResult);
console.log("'concat()' cannot be called with a datatype other than 'string'");

// Arrow Function
const multiply = (x: number, y: number) => x * y;
const multiplyResult = multiply(2, 10);
// const multiplyResult = multiply(2, 10,5);
// const multiplyResult = multiply(2);
console.log("multiplyResult  ---> ", multiplyResult);
console.log(
  "Error is shown if the no. of arguments passed does'n match with no. of function parameters"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Default Parameter (to be given at last)
function defaultParameterStart(
  parameter1WithDefaultValue: string = "Default Argument1",
  parameter2WithoutDefaultValue: number
) {
  return `Parameter1 (default) -> ${parameter1WithDefaultValue} --- Parameter2 -> ${parameter2WithoutDefaultValue}`;
}
let defaultParameterStartA = defaultParameterStart("Argument1 Passed", 1);
console.log("defaultParameterStartA  ---> ", defaultParameterStartA);
let defaultParameterStartB = defaultParameterStart("", 2);
// let defaultParameterStartB = defaultParameterStart(2);
// let defaultParameterStartB = defaultParameterStart(,2);
console.log(
  "defaultParameterStartB  (Passed with '' empty String)  ---> ",
  defaultParameterStartB
);

function defaultParameterEnd(
  parameter1WithoutDefaultValue: number,
  parameter2WithDefaultValue: string = "Default Argument2"
) {
  return `Parameter1 -> ${parameter1WithoutDefaultValue} --- Parameter2 (default) -> ${parameter2WithDefaultValue}`;
}
let defaultParameterEndA = defaultParameterEnd(1, "Argument2 Passed");
console.log("defaultParameterEndA  ---> ", defaultParameterEndA);
let defaultParameterEndB = defaultParameterEnd(2);
console.log("defaultParameterEndB  ---> ", defaultParameterEndB);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Return Annotations (Also automatically Set)
function triple(num: number): number {
  return num * 3;
}
let tripleResult = triple(4);
console.log("tripleResult  ---> ", tripleResult);
const join = (str1: string, str2: string = "World"): string =>
  str1 + " " + str2;
let joinResult1 = join("Hi", "TypeScript");
console.log("joinResult1  ---> ", joinResult1);
let joinResult2 = join("Hello");
console.log("joinResult2  ---> ", joinResult2);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* 'void' Return Type -> Absence of any value (used in function that do not return any value)
                         Displays error in presence of 'return' statement */
const greet = (name: string = "User"): void => console.log("Welcome", name);
greet();
console.log("greet('Gayathri')  ---> ", greet("Gayathri"));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* 'never' Type -> Indicate that the function will not return anything or that a variable can never have a value
                   Indicate certain codepaths should never be reached or that certain values are impossible
                   Help to catch errors at compile-time instead of runtime
     Used where -> A function that always throws an error ('void' by default)
                   A function that has an infinite loop ('void' by default)
                   A variable that can never have a value ('any' by default) */
function throwError(msg: string): never {
  console.log("Inside 'throwError' Function");
  throw new Error(msg);
}
// If uncommented, line below this is never reached (the function is hoisted)
// throwError("This Functions Throws an Error");

let variableNever: never;
function infinteLoop(): never {
  console.log("Inside 'infinteLoop' Function (loop is not terminated)");
  while (true) {
    // console.log("While Loop executes infinitely");
  }
  console.log("Inside 'infinteLoop' Function (End of While is 'unreachable')");
}
variableNever = infinteLoop();
console.log("variableNever  ---> ", variableNever);
