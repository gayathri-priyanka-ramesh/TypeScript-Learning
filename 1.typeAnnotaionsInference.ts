/* Annotaions -> Specify datatype of a variable, parameter, function rutuen value, etc.
                 Catch errors early in development by allowing to specify what types of values can be assigned to a given variable or passed as an argumnet to a function
        let|const|var variableName : dataType = variableValue  */

// Variable Without Type Definition and without initial assignment
let variableEmpty;
console.log("'variable' without assignment  ---> ", variableEmpty);
variableEmpty = 10;
console.log(
  "'variableEmpty' assigned with 'Number' value  ---> ",
  variableEmpty
);
variableEmpty = "Hello";
console.log(
  "'variableEmpty' assigned with 'String' value  ---> ",
  variableEmpty
);
variableEmpty = true;
console.log(
  "'variableEmpty' assigned with 'Boolean' value  ---> ",
  variableEmpty
);
variableEmpty = null;
console.log("'variableEmpty' assigned with 'null' value  ---> ", variableEmpty);
variableEmpty = ["A", 3];
console.log(
  "'variableEmpty' assigned with 'array object' value  ---> ",
  variableEmpty
);
variableEmpty = undefined;
console.log(
  "'variableEmpty' assigned with 'undefined' value  ---> ",
  variableEmpty
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Object
let variableObject: Object;
// console.log(variableObject);
console.log("'variableObject' cannot be used before assignment");
variableObject = ["Hello", 11];
console.log(
  "'variableObject' assigned with 'Object' value  ---> ",
  variableObject,
  " ---  Typeof VariableObject  ---> ",
  typeof variableObject
);
variableObject = "HelloWorld";
console.log(
  "'variableObject' assigned with 'String' value  ---> ",
  variableObject,
  " ---  Typeof VariableObject  ---> ",
  typeof variableObject
);
variableObject = 17;
console.log(
  "'variableObject' assigned with 'Number' value  ---> ",
  variableObject,
  " ---  Typeof VariableObject  ---> ",
  typeof variableObject
);
variableObject = true;
console.log(
  "'variableObject' assigned with 'Boolean' value  ---> ",
  variableObject,
  " ---  Typeof VariableObject  ---> ",
  typeof variableObject
);
// variableObject = null
// variableObject = undefined
console.log(
  "undefined|null cannot be assigned to'variableObject' ",
  " ---  Typeof VariableObject  ---> ",
  typeof variableObject
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// String
let variableString: String = "Sting Value 1";
console.log(
  "'variableString' assigned with 'String' value initially  ---> ",
  variableString
);
variableString = "Sting Value 2";
console.log(
  "'variableString' reassigned with 'String' value  ---> ",
  variableString
);
// variableString = 3;
console.log(
  "Number|Boolean|undefined|null cannot be assigned to 'variableString'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Number
let variableNumber: Number = 1;
console.log(
  "'variableNumber' assigned with 'Number' value initially  ---> ",
  variableNumber
);
variableNumber = -2.5;
console.log(
  "'variableNumber' reassigned with 'Number' value  ---> ",
  variableNumber
);
// variableNumber = "Three";
console.log(
  "String|Boolean|undefined|null cannot be assigned to 'variableNumber'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Boolean
let variableBoolean: Boolean = true;
console.log(
  "'variableBoolean' assigned with 'Boolean' value initially  ---> ",
  variableBoolean
);
variableBoolean = false;
console.log(
  "'variableBoolean' reassigned with 'Boolean' value  ---> ",
  variableBoolean
);
// variableBoolean = 1;
// variableBoolean = "";
// variableBoolean=null;
console.log(
  "String|Number|undefined|null cannot be assigned to 'variableBoolean'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Undefined
let variableUndefined: undefined;
console.log(
  "'variableUndefined' defined as type 'undefined' initially  ---> ",
  variableUndefined
);
variableUndefined = undefined;
console.log(
  "'variableUndefined' assigned with 'undefined' value  ---> ",
  variableUndefined
);
// variableUndefined = null;
// variableUndefined = 10;
console.log(
  "Number|String|Boolean|undefined|null cannot be assigned to 'variableUndefined'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// Null
let variableNull: null;
console.log("'variableNull' cannot be used before assignment");
variableNull = null;
console.log("'variableNull' assigned with 'Null' value  ---> ", variableNull);
// variableNull = undefined;
// variableNull = 10;
console.log(
  "Number|String|Boolean|undefined|null cannot be assigned to 'variableNull'"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* 'Any' Type -> When a variable is annotated with 'Any' type, it is allowed to have any value and disable all type checking for that variable and its properties
                 Overuse leads to 'untyped code' and make it harder to catch type-related bugs during development */
let variableAny: any;
// let variableAny: any = "Can be assigned with any data type";
console.log(
  "'variableAny' defined as type 'any' initially  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
variableAny = 11.12;
console.log(
  "'variableAny' assigned with 'Number' value  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
variableAny = null;
console.log(
  "'variableAny' assigned with 'null' value  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
variableAny = ["March", 17];
console.log(
  "'variableAny' assigned with 'Object' value  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
variableAny = undefined;
console.log(
  "'variableAny' assigned with 'undefined' value  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
variableAny = true;
console.log(
  "'variableAny' assigned with 'Boolean' value  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
variableAny = "Dec 12";
console.log(
  "'variableAny' assigned with 'String' value  ---> ",
  variableAny,
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
console.log(
  "'variableAny' in upperCase  ---> ",
  variableAny.toUpperCase(),
  " ---  Typeof VariableAny  ---> ",
  typeof variableAny
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

function addAny(a: any, b: any): any {
  return a + b;
}
console.log("Adding 5 and 3  ---> ", addAny(5, 3));
console.log('Adding 5 and "3"  ---> ', addAny(5, "3"));
console.log('Adding "5" and 3  ---> ', addAny("5", 3));
console.log('Adding "5" and "3"  ---> ', addAny("5", "3"));
console.log("Adding true and false--> ", addAny(true, false));
console.log('Adding true and "false"--> ', addAny(true, "false"));
console.log("Adding true and 4 --> ", addAny(true, 4));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* 'unknown' Type -> They type is initially not known, but it can be number|string|boolean|object|null|undefined and will be of that assigned type based on the situation
                     'any' removes all type-checking, whereas, 'unknown' assigns type based on the situation is is used */
function addUnknown(a: unknown, b: unknown): unknown {
  // Addition of 'unknown type is not possible
  // let res = a + b;
  return `Type of a -> ${typeof a} --- Type of b -> ${typeof b}`;
}
console.log("Adding 5 and 3  ---> ", addUnknown(5, 3));
console.log('Adding 5 and "3"  ---> ', addUnknown(5, "3"));
console.log('Adding "5" and 3  ---> ', addUnknown("5", 3));
console.log('Adding "5" and "3"  ---> ', addUnknown("5", "3"));
console.log("Adding true and false--> ", addUnknown(true, false));
console.log('Adding true and "false"--> ', addUnknown(true, "false"));
console.log("Adding true and 4 --> ", addUnknown(true, 4));
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/* Type Inference -> Allows the compiler to automatically determine the type of a variable based on its value without explicitly specifying the type */
let variable = 10;
console.log("'variable' assigned with 'Number' value  ---> ", variable);
console.log("Type of 'variable'  ---> ", typeof variable);
variable = 20;
console.log("'variable' reassigned with 'Number' value  ---> ", variable);
// variable = "Hi";
// variable = false;
// variable = null;
// variable = ["C", 1];
// variable = undefined;
console.log(
  "Variable assigned with a value cannot be changed with other datatype"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
