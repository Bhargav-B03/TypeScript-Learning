// ------------- TypeScript NOTES -------------

// TypeScript helps just while the development process to prevent errors(before code gets compiled).
// It is a statically typed language.

// Types:

// Literal Type:
// We can assign specific literal(string) type to any variable.
// Ex: let x: "Hello" = "Hello";
// x = "Howdy" // we cannot do this.

// By combining literals into unions, we can express a much more useful concept - for example, functions that only accept a certain set of known values:

// Never Type:
// never can be assigned to any(all the types of TS) typed variable but any(all the types of TS) typed variable cannot be assigned to never type. It is used to specify when we want a function to return nothing.

// ******** Type Alias ********
// A type alias is exactly that - a name for any type which can be used to refer it anywhere else in the code.
// Ex:type Point = {
//   x: number;
//   y: number;
// };

// We can also define a variable's type as a function which expects a function to be assigned as a value.

// ******** Union Types ********
// TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union "string | number", you can’t use methods that are only available on string

// NOTE: While using Union Types we need to take care of the scenarios where the methods and preoperties to be invoked should be available on all types of the union type.

// ******** Intersection Types ********
// We can combine two types into a single type which is known as intersection type.
// case-1 : in the case of combining two object types, it takes all the properties from both types. (it works same as inheritance)
// case-2 : when combining two union types, it takes whatever is common among them.

// ******** Contextual Typing ********
// Whenever the context that function occurred within informs what type it should have is called as Contextual Typing.

// ******** Type Assertions ********
// Sometimes TypeScript can't know about the information of a value that we know, in that case we use Type Assertion to specify the type.

// Ex: const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement; -OR-
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// Type Assertions are removed at compile-time.

// ******** Return Types ********

// TypeScript determines the return type of a function on its own OR else we can also define by ourselves. But it doesn't allow us to return a different type than specified there.

// TypeScript allows void as a return type, but not undefined if the function is not returning anything. If we specifically want to return undefined, then we need to fill the function with an empty return statement otherwise it will throw an error. But that we can do with the help of void too, so it is better to use void in case of function not returning anything.

// We can also specify (callback) function as argument in function parameters. But we can only specify the arrow type function there to specify which type of parameters and return type it expects. and when we call the function which expects callback function we need to write function in the argument only rather than passing an already defined function. Because it kind of overrides the expected function. (understood as of now..!)

// Here note that the return type "void" of function we specify at parameter list of calling function only tells that calling function doesn't expect the callback function to return anything, but it doesn't force us to define function accordingly. So, if we even specify return values in callback function, it doesn't throw any error. The simple reason behind it is the function doesn't expect any return value but there is no problem with the return value as well.

// Promise as return type of function
// async function getFavoriteNumber(): Promise<number> {
//   return 26;
// }

// ******** TS configure options ********

// noEmit :- To not create output file when we run the ts file

// noEmitOnError :- To not create output file(js file) when there is any error in the ts file

// outDir :- To set the output directory where the output files will be generated

// rootDir :- To set the ts file directory to let compiler know where to look for source files.
// Note :- The key benefit here is the source file folder structure is followed as it is by the output folder(by setting the outDir)

// noUnusedLocals :- option to set to true if we want TypeScript to throw error when we declare a variable and don't use it (in the local scope).

// noUnusedParameters :- option when setting to true gives error when the parameter passed to function is never used

// noImplictReturns :- when set to true, if there is any branch in the function returning any value, then one must need to specify a global return for the function in the case of if branch does not get executed function returns something.

// removeComments :- removes comment from the generated js output file


// ******** Access Modifiers ********

// read-only :- data with the read-only modifier cannot be changed or altered

// SPECIAL FEATURE :- We can directly specify the access modifiers ahead of parameters in the constructor function to avoid manual assignment of the value. It automatically declares and assigns the value of the upcoming arguments

// Ex :
// class Aclass = {
// constructor(private data: string, public displayText: string){}
// };

// ******** Class - Interface ********

// -> Singleton Pattern :-
// It ensures that only a single instance of a class is created. And it can be achieved by making a class constructor private. And creating the instance of it through the static method defined inside the class.

// NOTE :- We can use this keyword inside the static method to access any static property of class from inside of class only.

// ### DIFFERENCE Between Abstract Class & Interface
// Abstract Class can contain some abstract methods which are to be implemented by child class and other implemented methods as well. While an interface can never contain any method implementation inside it. It just specifies the number of items there should be for implemention but do not specify the implemntation of any of them.

// Inside interface we can only use "readonly" modifier not public, private or protected

// optional property in interface :-
// We can specify any proprty of the interface as optional by adding "?" after it. So we can use it for methods as well.
// Ex: output? : number;
// We can also add optional parameter

// JavaScript does not know the concept of interface. So whenever the TS code is converted into JS code there is no implementation of interface in it. It is a pure Typescript feature to provide more clear structure to the code.

// ******** Generics ********

// Generics allow us to use the same function for various types.

// ### DIFFERENCE Between Generics and Union type
// The main difference between generics and union types is that generics allow us to lock a type through out the function which is a major deawback in using union type. Hence it is more dynamic option

// ==> Note that we can set a property called "noUnusedLocals" which yields error if we don't use the declared variables. And the same way works "noUnusedParameters" property for the parameters that are not used. (in these scenarios we can replace the parameter name with _ - a special variable)

// DECORATORS :

// Definition:-

// Decorators can change or update the behavior of the property to which they are applied.
// NOTE:- they can replace a class definition, function definition and accessor definition by returning the new definition.

// Types of Decorators:-
// 1. Class Decorator
// 2. Method Decorator (for the methods of class)
// 3. Accessor Decorator (for the getter and setter functions of the class)
// 4. Property Decorator (for the variables of the class)
// 5. Parameter Decorator (for the parameters we pass to the function)

// SideNote:- Abstract class can only be inherited, cannot be instatiated.

// Declare keyword :-
// TS provides a declare keyword which lets TS know about some feature/variable/packages which TS is not able to know but we as an developer know they exist. We can declare a variable or a package by appending a declare keyword ahead of it.
// Ex: declare const GLOBAL: string;

// Narrowing:-
// TypeScript performs special checks and dig deeper down to check types and assignments. This process of refining types to more specific types than declared is called Narrowing.

// Non-null assertion (!) - the symbol which we put at the end of any value to give surity of existence to the type-checker of TypeScript.
