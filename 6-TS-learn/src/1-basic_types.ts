

import 'bootstrap/dist/css/bootstrap.css';
console.log('-index.ts-');

//-------------------------------------------------------------------------

// implicit typing

/* 

let myName = "Nag";
let myAge = 35;
console.log(myName);
console.log(myAge); 

*/

// explicit typing

/* let myName: string;
myName = "Nag";
 */

//-------------------------------------------------------------------------
// basic types
//-------------------------------------------------------------------------

// boolean
let isDone: boolean = false;

// numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744

// string
let color: string = "blue";
color = 'red';

// array
let list1: number[] = [1, 2, 3]; // way-1
let list2: Array<number> = [1, 2, 3];// way-2

// Declare a tuple type
let x: [string, number];
x = ["hello", 1];

// enum   ==> to group related constants together with Type-name
enum Gender {
    MALE, FEMALE
}

let gender: Gender = Gender.MALE;

// Any  
let v: any;
v = 12;
v = "string"

// undefined
let u: undefined;
u = undefined;

// null
let nu: null;
nu = null;

// object
let obj: object;
obj = {};




//-------------------------------------------------------------------------
// Variable Declarations
//-------------------------------------------------------------------------

// 3 ways  , ==> var , let, const 



//-------------------------------------------------------------------------
// OO
//-------------------------------------------------------------------------


/*

    1. car      ( dependent )
        -move()
    2. wheel    ( dependency ) 
        -rotate()
        
*/


// wheel module
//--------------------------------------------------------------------------
class MRFWheel {
    constructor() {
        console.log('MRF-wheel instance created...');
    }
    rotate() {
        console.log('MRF-wheel rotating...');
    }
}
//--------------------------------------------------------------------------


// wheel module
//--------------------------------------------------------------------------
class CEATWheel {
    constructor() {
        console.log('CEAT-wheel instance created...');
    }
    rotate() {
        console.log('CEAT-wheel rotating...');
    }
}
//--------------------------------------------------------------------------
// car module
//--------------------------------------------------------------------------
class Car {
    wheel: MRFWheel; // dependency
    constructor() {
        console.log('car instance created...');
    }
    move() {
        this.wheel = new MRFWheel();
        this.wheel.rotate();
        console.log('car moving...');
    }
}
//--------------------------------------------------------------------------

/*

// design & performance issues

    => tight-coupling b/w dependent & dependency    
            -> cant extend with new-features issues
    => too many duplicate dependencies created & destroyed
            -> slow, memory use high , too much resource consumption
    => unit-testing not possible becox tight-coupling
            -> dev & bug fix slow


why these issues are occuring here ?

    => dependent itself creating its own dependency 
    
    soln:

    => don't create dependency in dependent's class, do lookup

    limitation on lookup:

    ==> location tight-coupling

    best-soln:

    ==> dont create/lookup , injected by 'some-one'  ( IOC ( Inversion Of Control ))

        how to implement IOC ?

            -> using 'dependency injection' ( DI )

                how to do DI ?

                    => constructor DI
                    => setter DI

     
    OO principles
    -----------------
    
    S.O.L.I.D


    S — Single responsibility principle
    O — Open for extension & closed for modification principle
    L — Liskov substitution principle
    I — Interface segregation principle
    D — Dependency Inversion principle




*/

//--------------------------------------------------------------------------

console.log("-----------------------------------------------------");
let car: Car = new Car();
console.log("-----------------------------------------------------");
car.move();
car.move();
car.move();
car.move();
console.log("-----------------------------------------------------");