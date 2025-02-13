// TypeScript Handbook
// 
// 1. THE BASICS

    //greets the world
    console.log('hello world!');

    //this is an industrial-grade general-purpose greeter function:

    // function greet(person, date) {
    //     console.log(`Hello ${person}, today is ${date}!`);
    // }

    // greet('branden')

    //get an error when compiling: Expect 2 arguments, but got 1

    // Explicit Types

    function greet(person: string, date: Date) {
        console.log(`Hello ${person}, today is ${date.toDateString()}!`);
    }

    //greet('Maddison', Date()) //error: Date() returns a string! 

    //fix call by adding a "new Date()"
    greet('Maddison', new Date())

    // can adjust strictness of type-checking in 
    // tsconfig.json file where strict: true makes all commented out true