/* Access Modifiers -> Control visibily of class members (properties and methods)
                       Determine the way in which class members can be accessed from within and outside the class
    3 Types of Access Modifiers available in TypeScript:
        public -> Accessed from anywhere both inside and outside the class
        private -> Only accessed from within the class they are defined in
        protected -> Accessed from within the class the are defined in, as well as any subclass that extend the class
    
    (JS doesn't have traditional access modifiers - Achieved using 'Closure' or 'Encapsulation')    */

class ClassModifiers {
  public publicField: string;
  private privateField: string;
  protected protectedField: string;
  fieldEmptyProperty: string;

  public publicMethod: Function;
  private privateMethod: Function;
  protected protectedMethod: Function;
  methodEmptyInConstructor: Function;
  public accessMethodsInConstructor: Function;

  constructor(
    publicField: string,
    privateField: string,
    protectedField: string,
    fieldEmptyValue: string
  ) {
    console.log("~~~~~Parent Constructor~~~~~");
    this.publicField = publicField;
    this.privateField = privateField;
    this.protectedField = protectedField;
    this.fieldEmptyProperty = fieldEmptyValue;

    console.log("publicField inside 'ClassModifiers'  ---> ", publicField);
    console.log("privateField inside 'ClassModifiers'  ---> ", privateField);
    console.log(
      "protectedField inside 'ClassModifiers'  ---> ",
      protectedField
    );
    console.log(
      "fieldEmptyValue inside 'ClassModifiers'  ---> ",
      fieldEmptyValue
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log("this (Parent)  ---> ", this);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log(
      "this.publicField inside 'ClassModifiers'  ---> ",
      this.publicField
    );
    console.log(
      "this.privateField inside 'ClassModifiers'  ---> ",
      this.privateField
    );
    console.log(
      "this.protectedField inside 'ClassModifiers'  ---> ",
      this.protectedField
    );
    console.log(
      "this.fieldEmptyProperty inside 'ClassModifiers'  ---> ",
      this.fieldEmptyProperty
    );
    console.log(
      "this.fieldEmptyValue inside 'ClassModifiers'  --->  Property 'fieldEmptyValue' does not exist on type 'ClassModifiers'"
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    // Public Method
    this.publicMethod = function (): string {
      console.log("Public Method  ---  this ->", this);
      return `Public Method  ---  this -> ${this},  Public Field -> ${this.publicField},   Private Field -> ${privateField},   Protected Field -> ${protectedField},   Field Empty -> ${this.fieldEmptyProperty}`;
    };

    // Private Method (closure)
    this.privateMethod = function (): string {
      console.log("Private Method  ---  this ->", this);
      return `Private Method  ---  this -> ${this},  Public Field -> ${this.publicField},   Private Field -> ${privateField},   Protected Field -> ${protectedField},   Field Empty -> ${this.fieldEmptyProperty}`;
    };

    // Protected Method (closure)
    this.protectedMethod = function (): string {
      console.log("Protected Method  ---  this ->", this);
      return `Protected Method  ---  this -> ${this},  Public Field -> ${publicField},   Private Field -> ${privateField},   Protected Field -> ${protectedField},   Field Empty -> ${this.fieldEmptyProperty}`;
    };

    this.methodEmptyInConstructor = function (): string {
      console.log("MethodEmptyInConstructor  ---  this ->", this);
      return `MethodEmptyInConstructor  ---  this -> ${this},  Public Field -> ${this.publicField},   Private Field -> ${privateField},   Protected Field -> ${protectedField},   Field Empty -> ${this.fieldEmptyProperty}`;
    };

    // Public Method to access Public Method
    this.accessMethodsInConstructor = function (): string {
      return `${this.publicMethod()} ${console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~"
      )} ~~~~~~~~~~~~~~~~~~~~~~~~~ ${this.privateMethod()} ${console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~"
      )} ~~~~~~~~~~~~~~~~~~~~~~~~~ ${this.protectedMethod()} ${console.log(
        "~~~~~~~~~~~~~~~~~~~~~~~~~"
      )} ~~~~~~~~~~~~~~~~~~~~~~~~~ ${this.methodEmptyInConstructor()}`;
    };
  }
  methodEmpty(): string {
    console.log("MethodEmpty  ---  this ->", this);
    return `MethodEmpty  ---  this -> ${this},  Public Field -> ${this.publicField},   Private Field -> ${this.privateField},   Protected Field -> ${this.protectedField},   Field Empty -> ${this.fieldEmptyProperty}`;
  }
  accessMethods(): string {
    const publicMethodVariable = this.publicMethod();
    const privateMethodVariable = this.privateMethod();
    const protectedMethodVariable = this.protectedMethod();
    const methodEmptyInConstructorVariable = this.methodEmptyInConstructor();
    return `~~~~~~~~~~~~~~~~~~~~~~~~~
    ${publicMethodVariable} 
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    ${privateMethodVariable} 
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    ${protectedMethodVariable} 
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    ${methodEmptyInConstructorVariable}
    ~~~~~~~~~~~~~~~~~~~~~~~~~`;
  }
}

console.log("this  ---> ", this);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const obj = new ClassModifiers(
  "Public Data",
  "Private Data",
  "Protected Data",
  "Empty Data"
);

console.log("obj  ---> ", obj);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Accessing 'ClassModifiers' Outside Class~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("Public Field  ---> ", obj.publicField);
console.log(
  "Private Field  --->  Property 'privateField' is private and only accessible within class 'ClassModifiers'"
);
console.log(
  "Protected Field  --->  Property 'protectedField' is protected and only accessible within class 'ClassModifiers' and its subclasses"
);
console.log("obj.fieldEmptyProperty  ---> ", obj.fieldEmptyProperty);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

let publicMethodVariable = obj.publicMethod();
console.log(
  `~~~~~~Public Method~~~~~
  ${publicMethodVariable}
  ~~~~~~End of Public Method~~~~~`
);
// let privateMethodVariable = obj.privateMethod();
console.log(
  `~~~~~~Private Method~~~~~
    Property 'privateMethod' is private and only accessible within class 'ClassModifiers'
    ~~~~~~End of Private Method~~~~~`
);
// let protectedMethodVariable = obj.protectedMethod();
console.log(
  `~~~~~~Protected Method~~~~~
      Property 'protectedMethod' is protected and only accessible within class 'ClassModifiers' and its subclasses
      ~~~~~~End of Protected Method~~~~~`
);
let methodEmptyInConstructorVariable = obj.methodEmptyInConstructor();
console.log(
  `~~~~~~methodEmptyInConstructor~~~~~
    ${methodEmptyInConstructorVariable} 
    ~~~~~~End of methodEmptyInConstructor~~~~~"`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~accessMethodsInConstructor()~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "'obj.accessMethodsInConstructor()'  ---> ",
  obj.accessMethodsInConstructor()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~End of accessMethodsInConstructor()~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Method Empty~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("'obj.methodEmpty'  ---> ", obj.methodEmpty);
console.log("'obj.methodEmpty()'  ---> ", obj.methodEmpty());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~End of Method Empty~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Access Methods~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("'obj.accessMethods()'  ---> ", obj.accessMethods());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~End of Access Methods~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End of Accessing 'ClassModifiers' Outside Class~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

class SubClassModifiers extends ClassModifiers {
  childField: string;
  constructor(
    publicChildField: string,
    privateChildField: string,
    protectedChildField: string,
    fieldEmptyValueChild: string,
    childField: string
  ) {
    console.log("~~~~~Child Constructor~~~~~");
    super(
      publicChildField,
      privateChildField,
      protectedChildField,
      fieldEmptyValueChild
    );
    this.childField = childField;

    console.log(
      "publicChildField inside 'SubClassModifiers'  ---> ",
      publicChildField
    );
    console.log(
      "privateChildField inside 'SubClassModifiers'  ---> ",
      privateChildField
    );
    console.log(
      "protectedChildField inside 'SubClassModifiers'  ---> ",
      protectedChildField
    );
    console.log(
      "fieldEmptyValueChild inside 'SubClassModifiers'  ---> ",
      fieldEmptyValueChild
    );
    console.log("childField  ---> ", childField);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log("this (Child)  ---> ", this);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log(
      "this.publicChildField inside 'SubClassModifiers'  --->  Property 'publicChildField' does not exist on type 'SubClassModifiers'. Did you mean 'publicField'?"
    );
    console.log(
      "this.privateChildField inside 'SubClassModifiers'  --->  Property 'privateChildField' does not exist on type 'SubClassModifiers'"
    );
    console.log(
      "this.protectedChildField inside 'SubClassModifiers'  --->  Property 'protectedChildField' does not exist on type 'SubClassModifiers'. Did you mean 'protectedField'?"
    );
    console.log(
      "this.fieldEmptyValueChild inside 'SubClassModifiers'  --->  Property 'fieldEmptyValueChild' does not exist on type 'SubClassModifiers'"
    );
    console.log("this.childField  ---> ", this.childField);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

    console.log(
      "this.publicField inside 'SubClassModifiers'  ---> ",
      this.publicField
    );
    console.log(
      "this.privateField inside 'SubClassModifiers'  ---> Property 'privateField' is private and only accessible within class 'ClassModifiers'"
    );
    console.log(
      "this.protectedField inside 'SubClassModifiers'  ---> ",
      this.protectedField
    );
    console.log(
      "this.fieldEmptyProperty inside 'SubClassModifiers'  ---> ",
      this.fieldEmptyProperty
    );
    console.log(
      "this.fieldEmptyValue inside 'SubClassModifiers'  --->  Property 'fieldEmptyValue' does not exist on type 'SubClassModifiers'"
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

    // Public Method to access Public Method
    this.accessMethodsInConstructor = function (): string {
      const publicMethodVariable = this.publicMethod();
      // const privateMethodVariable = this.privateMethod();
      const protectedMethodVariable = this.protectedMethod();
      const methodEmptyInConstructorVariable = this.methodEmptyInConstructor();
      return `~~~~~~~~~~~~~~~~~~~~~~~~~
      ${publicMethodVariable} 
      ~~~~~~~~~~~~~~~~~~~~~~~~~
      ~~~~~~~~~~~~~~~~~~~~~~~~~
      Property 'privateMethod' is private and only accessible within class 'ClassModifiers'    
      ~~~~~~~~~~~~~~~~~~~~~~~~~
      ~~~~~~~~~~~~~~~~~~~~~~~~~
      ${protectedMethodVariable} 
      ~~~~~~~~~~~~~~~~~~~~~~~~~
      ~~~~~~~~~~~~~~~~~~~~~~~~~
      ${methodEmptyInConstructorVariable}
      ~~~~~~~~~~~~~~~~~~~~~~~~~`;

      // return `${this.publicMethod()} ${console.log(
      //   "~~~~~~~~~~~~~~~~~~~~~~~~~"
      // )} ~~~~~~~~~~~~~~~~~~~~~~~~~ Property 'privateMethod' is private and only accessible within class 'ClassModifiers' ${console.log(
      //   "~~~~~~~~~~~~~~~~~~~~~~~~~"
      // )} ~~~~~~~~~~~~~~~~~~~~~~~~~ ${this.protectedMethod()} ${console.log(
      //   "~~~~~~~~~~~~~~~~~~~~~~~~~"
      // )} ~~~~~~~~~~~~~~~~~~~~~~~~~ ${this.methodEmptyInConstructor()}`;
    };
  }
}
const objChild = new SubClassModifiers(
  "Public ChildData",
  "Private ChildData",
  "Protected ChildData",
  "Empty ChildData",
  "ChildData"
);

console.log("objChild  ---> ", objChild);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Accessing 'SubClassModifiers' Outside Class~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("Public ChildField  ---> ", objChild.publicField);
console.log(
  "Private ChildField  --->  Property 'privateField' is private and only accessible within class 'ClassModifiers'"
);
console.log(
  "Protected ChildField  --->  Property 'protectedField' is protected and only accessible within class 'ClassModifiers' and its subclasses"
);
console.log("objChild.fieldEmptyProperty  ---> ", objChild.fieldEmptyProperty);
console.log("objChild.childField  ---> ", objChild.childField);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

publicMethodVariable = objChild.publicMethod();
console.log(
  `~~~~~~Public Method~~~~~
  ${publicMethodVariable}
  ~~~~~~End of Public Method~~~~~`
);
// privateMethodVariable = objChild.privateMethod();
console.log(
  `~~~~~~Private Method~~~~~
  Property 'privateMethod' is private and only accessible within class 'ClassModifiers'
  ~~~~~~End of Private Method~~~~~`
);
// protectedMethodVariable = objChild.protectedMethod();
console.log(
  `~~~~~~Protected Method~~~~~
  Property 'protectedMethod' is protected and only accessible within class 'ClassModifiers' and its subclasses
  ~~~~~~End of Protected Method~~~~~`
);
methodEmptyInConstructorVariable = objChild.methodEmptyInConstructor();
console.log(
  `~~~~~~methodEmptyInConstructor~~~~~
    ${methodEmptyInConstructorVariable} 
    ~~~~~~End of methodEmptyInConstructor~~~~~"`
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~accessMethodsInConstructor()~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "'objChild.accessMethodsInConstructor()'  ---> ",
  objChild.accessMethodsInConstructor()
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~End of accessMethodsInConstructor()~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Method Empty~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("'objChild.methodEmpty'  ---> ", objChild.methodEmpty);
console.log("'objChild.methodEmpty()'  ---> ", objChild.methodEmpty());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~End of Method Empty~~~~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~Access Methods~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("'objChild.accessMethods()'  ---> ", objChild.accessMethods());
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~End of Access Methods~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End of Accessing 'SubClassModifiers' Outside Class~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
