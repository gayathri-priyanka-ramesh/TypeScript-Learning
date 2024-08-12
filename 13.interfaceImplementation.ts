interface ParentInterface {
  readonly property1: string;
  property2: string;
  property3?: string;
  func(parameter1: string, parameter2?: string): string;
}

interface ChildInterface extends ParentInterface {
  propertyChildInterface: string;
}

const objInterface: ChildInterface = {
  property1: "Value1",
  property2: "Value2",
  //   property3: "Value3",
  func(parameter1, parameter2) {
    return `Func in 'objInterface'  -----> Parameter1 -> ${parameter1} ----- Parameter2 -> ${parameter2} \n Property1 -> ${this.property1} ----- Property2 -> ${this.property2} ----- Property3 -> ${this.property3} ----- propertyChildInterface -> ${this.propertyChildInterface}`;
  },
  propertyChildInterface: "ChildInterfaceValue",
};
console.log("objInterface  ---> ", objInterface);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  `objInterface.func  --->  ${objInterface.func(
    "objInterfaceArgument1",
    "objInterfaceArgument2"
  )}`
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

class ImplementationClass implements ChildInterface {
  property1: string;
  property2: string;
  property3: string;
  propertyChildInterface: string;
  propertyClass: string;
  func(parameter1: string, parameter2: string) {
    return `Func in 'objInterface'  -----> Parameter1 -> ${parameter1} ----- Parameter2 -> ${parameter2} \n Property1 -> ${this.property1} ----- Property2 -> ${this.property2} ----- Property3 -> ${this.property3} ---- PropertyChildInterface -> ${this.propertyChildInterface} ---- PropertyClass -> ${this.propertyClass}, `;
  }
  constructor(property1: string, property3: string) {
    console.log("ImplementationCLass Constructor  --- This  ---> ", this);
    this.property1 = property1;
    this.property2 = "Value2";
    this.property3 = property3;
    this.propertyChildInterface = "ChildInterfaceValueInsideClass";
    this.propertyClass = "ClassValue";
  }
}

const objImplementationClass = new ImplementationClass(
  "objImplementationClassValue1",
  "objImplementationClassValue3"
);
console.log("objImplementationClass  ---> ", objImplementationClass);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  `objImplementationClass.func  --->  ${objImplementationClass.func(
    "objImplementationClassArgument1",
    "objImplementationClassArgument2"
  )}`
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

class ChildImplementationClass extends ImplementationClass {
  property1ChildClass: string;
  property2ChildClass: string;
  childFunc(parameter1: string, parameter2: string) {
    return `Func in 'objInterface'  -----> Parameter1 -> ${parameter1} ----- Parameter2 -> ${parameter2} \n Property1 -> ${this.property1} ----- Property2 -> ${this.property2} ----- Property3 -> ${this.property3} ---- PropertyChildInterface -> ${this.propertyChildInterface} ---- PropertyClass -> ${this.propertyClass} ----- Property1ChildClass -> ${this.property1ChildClass} `;
  }
  func(parameter1: string) {
    return `func() of ImplementationClass is overwritten in ChildImplementationCLass with Parameter1 -> ${parameter1}`;
  }
  constructor(
    property1: string,
    property3: string,
    property1ChildClass: string
  ) {
    super(property1, property3);
    this.property1ChildClass = property1ChildClass;
    this.property2ChildClass = "ChildClassValue2";
  }
}
const objChildImplementationClass = new ChildImplementationClass(
  "objChildImplementationClassValue1",
  "objChildImplementationClassValue3",
  "objChildImplementationChildClassValue1"
);
console.log("objChildImplementationClass  ---> ", objChildImplementationClass);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  `objChildImplementationClass.func  --->  ${objChildImplementationClass.func(
    "objChildImplementationClassFuncArgument1"
  )}`
);
console.log(
  `objChildImplementationClass.ChildFunc  --->  ${objChildImplementationClass.childFunc(
    "objChildImplementationClassFuncArgument1",
    "objChildImplementationClassFuncArgument2"
  )}`
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
