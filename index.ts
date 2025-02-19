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




    //functions: parameter type annotations

    function greet2(name: string) {
        console.log("Hello, " + name.toUpperCase() + "!!")
    }

    greet2(42) //passing the wrong type of argument, which is a number not a expected string


    // functions: return type annotations

    function getFavoriteNumber(num: number): string {
        return String(num) 
        
        //if I didn't use String method, 
        // this would go against return type annotation
    }

    getFavoriteNumber(24)


    //functions: return type for promises!!!

        async function getFavNum(): Promise<number> {
            return 26
        }

        getFavNum()


    //Object types

        function printCoord(point: { x: number ; y: number}) {
            //can use , or ; to separate prop: type pairs
            console.log("The coordinate's x value is " + point.x);
            console.log("The coordinate's x value is " + point.y);
        }

        printCoord({x: 7, y: 10})


    //union types

        function printId(id: number | string) {
            console.log("Your ID is: ", id)
        }

        //okay
        printId(101);

        //also, okay
        printId('202');

        //error: argument of type {myID: number; } is not assignable 
        // to parameters of printID, i.e., number \ string
        printId({myID: 22342})

    
    // working with union types

        function printId(id: number | string) {
            console.log(id.toUpperCase());
        }

        //this will lead to error!!
        //TypeScript will only allow an operation 
        // if it is valid for every member of the union. 

        function printId(id: number | string) {
            if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
            } else {
            // Here, id is of type 'number'
            console.log(id);
            }
        }

    //Type Aliases!!!

        //A type alias is exactly that - a name for any type.

        type Point = {
            x: number;
            y: number;
        };

        //using the alias type Point for the parameter 'point'
        
        function prntCoord(point: Point) {
            console.log( "the coordinate's x value is " + point.x);
            console.log( "the coordinate's y value is " + point.y);
        }

        prntCoord({x: 100, y: 100});


        //Interfaces!!!

            //an interface declaration is another way to name an object type

            interface Point2 {
                x: number;
                y: number;
            }

            function prtCood(point: Point2) {
                console.log("The coordinate's x value is " + point.x);
                console.log("The coordinate's y value is " + point.y);
            }

            prtCood({x: 100, y: 100})


            //Type Assertions (start here!!!)




            //Type literals

                // But by combining literals into unions, 
                // you can express a much more useful concept - for example, 
                // functions that only accept a certain set of known values:


                function printText(s: string, alignment: "left" | "right" | "center") {
                    // ...
                }
                printText("Hello, world", "left");
                printText("G'day, mate", "centre"); 

                //Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.


                //Example of numerical literal types working similiarly:

                function compare(a: string, b: string): -1 | 0 | 1 {
                    return a === b ? 0 : a > b ? 1 : -1;
                }



                // With strictNullChecks on, when a value is null or undefined, 
                // you will need to test for those values before 
                // using methods or properties on that value. 

                    function doSomething(x: string | null) {
                        if (x === null) {
                        // do nothing
                        } else {
                        console.log("Hello, " + x.toUpperCase());
                        }
                    }