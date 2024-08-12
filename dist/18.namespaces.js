// Declare Namespace using 'namespace' keyword
var PrintNamespace;
(function (PrintNamespace) {
    function printNamespace(namespaceParameter) {
        return "Parameter Passed  --->  ".concat(namespaceParameter);
    }
    PrintNamespace.printNamespace = printNamespace;
})(PrintNamespace || (PrintNamespace = {}));
// Declare Namespace using 'namespace' keyword
var HelloNamespace;
(function (HelloNamespace) {
    var namespaceVariable = "Namespace Value";
    function helloNamespace() {
        return "Hello Namespaces --- ".concat(namespaceVariable);
    }
    HelloNamespace.helloNamespace = helloNamespace;
})(HelloNamespace || (HelloNamespace = {}));
// Make namespace available to access using 'reference path'
/// <reference path="namespaceA.ts"/>
/// <reference path="namespaceB.ts"/>
// Call the functions inside namespace using 'NamespaceName.functionName(argument)'
console.log("Calling 'printNamespace(\"namespaceArgument\")' function from 'namespaceA.ts' file in the '18.namespaces.ts' file\n", PrintNamespace.printNamespace("namespaceArgument"));
console.log("Calling 'helloNamespacee()' function from 'namespaceB.ts' file in the '18.namespaces.ts' file\n", HelloNamespace.helloNamespace());
/*  Namespace files cannot be compiled as it uses 'reference path'
    On compiling the '18.namespaces.ts' file it generates '18.namespaces.js'
    Compiling this file will automatically compile the namespace files
    It shows the error
        Uncaught ReferenceError: PrintNamespace is not defined

    Solution:
    Compile the '18.namespaces.ts' file to generate '18.namespaces.js' which concatenates the namespaces inside it
        tsc --outFile ./dist/18.namespaces.js ./18.namespaces.ts
    Include the generated '18.namespaces.js' file in the 'index.html' file
        <script src="dist/18.namespaces.js"></script>
*/
console.log("window  ---> ", window);
console.log("window.PrintNamespace  ---> ", window.PrintNamespace);
console.log("window.HelloNamespace  ---> ", window.HelloNamespace);
// console.log("window.namespaceVariable  ---> ", window.namespaceVariable);
console.log("window.namespaceVariable  --->  Property 'namespaceVariable' does not exist on type 'Window & typeof globalThis'");
// console.log(
//   "HelloNamespace.namespaceVariable  ---> ",
//   HelloNamespace.namespaceVariable
// );
console.log("HelloNamespace.namespaceVariable  --->  Property 'namespaceVariable' does not exist on type 'typeof HelloNamespace'");
// console.log("namespaceVariable  ---> ", namespaceVariable);
console.log("namespaceVariable  --->  Cannot find name 'namespaceVariable'");
console.log("'namespaceVariable' doesn't belong to the 'window' object");
