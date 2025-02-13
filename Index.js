// TypeScript Handbook - The Basics 
//greets the world
console.log('hello world!');
//this is an industrial-grade general-purpose greeter function:
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
// }
// greet('branden')
//get an error when compiling: Expect 2 arguments, but got 1
// Explicit Types
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
//greet('Maddison', Date()) //error: Date() returns a string! 
//fix call by adding a "new Date()"
greet('Maddison', new Date());
