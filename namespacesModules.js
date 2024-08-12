/* Namespaces & Modules -> Groups everything defined inside it 
                           Organize Code to be available only in Local Scope (Not like to pollute out to global scope) 
        Scenario: A JS file contains variables and functions defined inside it
                  JS file is linked to HTML file using 'script' tag
                  When the HTML file runs in browser, everything declared in JS file belongs to the 'window' object (Global Scope)
                  Declarations can accessed using 'window.___' and can also be overwritten (Polluted in Global Scope)
                  It can also be overwritten in the console directly
                  The JS File is called 'Script'
                  Modules was introduced to overcome the pollution of contents in Global Scope 
        Differences:
            Modules   -> External Modules introduced in ECMA Script 6 of JavaScript
            Namespace -> Internal Modules introduced in TypeScript */

var variable = "Initial Value";
function fun() {
  return `"Variable Declared  --->  ${variable}`;
}
console.log("variable  ---> ", variable);
console.log("fun  ---> ", fun);
console.log("fun()  ---> ", fun());

console.log("window  ---> ", window);
console.log("window.variable  ---> ", window.variable);
console.log("window.fun()  ---> ", window.fun());

// Overwritting using 'window.___'
window.variable = "Overwritten Value";
console.log("variable (after overwritting)  ---> ", variable);
console.log("window.fun() (after overwritting)  ---> ", window.fun());
