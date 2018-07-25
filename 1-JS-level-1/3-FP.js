"use strict";

/*

    imperative-style  ==> what + How
    functional-style  ==> what

*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // data

//---------------------------------------------------
// a. imperative styles ==> what + how

/* let evens = [];
for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n % 2 === 0) evens.push(n)
} */

//---------------------------------------------------
// b. functional style ==> what

/* let evens = nums.filter(function (n) {
    return n % 2 === 0;
}); */

//---------------------------------------------------


// Functional Programming ( FP )
// -----------------------------

/*

    principles

        - A function can be stored in a variable or value
        - The return value of a function can be a function
        - A parameter of a function can be a function


*/
//---------------------------------------------------------------------
/*

// how to create function in .js-lang ?

    a. function-declaration

            ==> Named function
            ==> function-obj created at scope-creation-phase
            ==> always get hoist with function-obj

    b. function-expression

            ==> Anonymous function
            ==> function-obj created at scope-execution-phase
            ==> we can invoke after function-expression


*/
//---------------------------------------------------------------------
// a. function-declaration
//---------------------------------------------------------------------

/* let r=add(12,13);
console.log(r);

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(12, 13)) */

//---------------------------------------------------------------------
// b. function-expression
//---------------------------------------------------------------------

/* console.log(add) // error

let add = function (n1, n2) {
    return n1 + n2;
}; 

console.log(add(12, 13)) */

//---------------------------------------------------------------------
// summary:
/*
    =>to keep default function within scope use 'function-declaration' syntax
    =>to create function after some step/condition , use 'function expression' syntax
*/
//---------------------------------------------------------------------
// principles
//---------------------------------------------------------------------

//a. A function can be stored in a variable or value

/* function greet() {
    console.log('hello...');
}

greet();
let sayHello = greet;
sayHello();
 */

//---------------------------------------------------------------------

// b. - A parameter of a function can be a function

function greet(f) {
    if (f) {
        f(); return;
    };
    console.log('hello..');
}

// greet();
let tnGreet = function () { console.log('nalvaravu') }
// greet(tnGreet);

// e.g
let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
nums.sort();
// console.log(nums);
nums.sort(function (a, b) { return a - b; });
// console.log(nums);


//---------------------------------------------------------------------

// c. - The return value of a function can be a function

/* 
function teach() {
    console.log('teaching...');
    let learn = function () {
        console.log('learning .js..');
    };
    learn();
    console.log('teaching...ends');
}
teach();
 */

//

/* 
function teach() {
    console.log('teaching...');
    let learn = function () {
        console.log('learning .js..');
    };
    console.log('teaching...ends');
    return learn;
}

let learnFunc=teach();
learnFunc();
learnFunc();
 */



//---------------------------------------------------------------------
// Function parameters:

// imp-note : by default .js-function params are optional 
//---------------------------------------------------------------------

// ES5
/* 

function func(a, b) {
    
    // imp-note : u must validate incoming params and if missed, assign default value

    // if (!a) { a = 10 }
    // if (!b) { b = 20 }

    // or

    a = a || 10
    a = b || 20

    console.log(a);
    console.log(b);
}
func();

 */
//---------------------------------------------------------------------
// function with default-params ( es6 )
//---------------------------------------------------------------------
/* 
function func(a = 10, b = 20) {
    console.log(a);
    console.log(b);
}

func(1) */

//---------------------------------------------------------------------
// function with rest param ( es6 )
//---------------------------------------------------------------------

/* function func(a = 1, b = 2, ...rest) {
    console.log(a);
    console.log(b);
}
func(10, 20, 30, 40, 50); */


//---------------------------------------------------------------------

// function func(...str) {
//     console.log(arguments);  // arguments ==> will contains all given params
// }
// func(10, 20, 30, 40, 50);


//---------------------------------------------------------------------

// e.g

/* function sum() {
    let result = 0,
        len = arguments.length,
        i = 0;
    while (i < len) {
        result = result + arguments[i];
        i++;
    }
    return result;
}
let sumResult = 0;
sumResult = sum();
sumResult = sum(1, 2);
sumResult = sum(1, 2, 3); */


//---------------------------------------------------------------------
// Function-binding
//---------------------------------------------------------------------

// data-in & data-out functions
/* function add(n1, n2) {
    return n1 + n2;
}
let result = add(1, 2);

// obj's function  ==> method
function doTraining() {
    console.log(this.name + " doing training to olam");
} */

// doTraining(); error // this function must run on trainer-object

//---------------------------------------------------------------------
/*

    2 types of function-binding

    1. static-function-binding
    2. dynamic-function-binding


*/

//---------------------------------------------------------------------
// 1. static-function-binding
//---------------------------------------------------------------------
/* 
let jsTrainer = {
    name: 'Nag',
    doTraining: function () {
        console.log(this.name + " teaching..");
    }
};
let javaTrainer = {
    name: 'Krishna',
    doTraining: function () {
        console.log(this.name + " teaching..");
    }
}; */

// or better-code
/* 
function olamDoTrainingForAll() {
    console.log(this.name + " teaching..");
}

let jsTrainer = {
    name: 'Nag',
    olamDoTraining: olamDoTrainingForAll // static function-binding
};
let javaTrainer = {
    name: 'Krishna',
    olamDoTraining: olamDoTrainingForAll
};

// doTrainingForAll();      //  error becoz, u must call on any trainer by binding
jsTrainer.olamDoTraining();  // Nag teaching
javaTrainer.olamDoTraining(); // krishna teaching

 */


//---------------------------------------------------------------------
// 2. dynamic-function-binding
//---------------------------------------------------------------------
/* 
// generic trainer
let trainer1 = { name: 'Nag' }
let trainer2 = { name: 'Krisna' }


// in olam-company
function olamDoTraining(sub, where) {
    console.log(this.name + " teaching.. " + sub + " in olam -" + where)
}

// static -function-binding
// trainer.olamDoTraining=olamDoTraining; // static 
// trainer.olamDoTraining('js','room-1');


// dynamic -function-binding
// way-1
// olamDoTraining.call(trainer1, ".js", 'room-1');
// olamDoTraining.call(trainer2, ".java", "room-2");
//way-2
// olamDoTraining.apply(trainer1,[".js", 'room-1'])
// olamDoTraining.apply(trainer2,[".java", 'room-1'])
//way-3
let newF = olamDoTraining.bind(trainer1, '.js', 'room1');
newF();
newF();
newF();
newF();
let newFF = olamDoTraining.bind(trainer1);
newFF('.js', 'room1')
newFF('.java', 'room2')


 */


//---------------------------------------------------------------------

// quiz & summary
/* 
function func() {
    console.log(this);
}
func();

// static function-binding
let o1 = { name: 'A', f: func }
o1.f();

// dynamic function-binding
let o2 = { name: 'B' }
func.call(o2);
func.apply(o2);
let newF = func.bind(o2);
newF(); */



//---------------------------------------------------------------------



// closures    
/*
    A closure is a function having access to the parent scope,
    even after the parent function has closed.
*/

function teach(sub) {
    console.log('teaching ' + sub);
    let notes = sub + '-notes'
    let fun = "fun-talk";
    function learn() {
        console.log('learning ..with ' + notes);
    }
    //learn();
    console.log('teaching ends..');
    return learn;
}


/* let learn = teach('.js');  // teach-scope
learn();
learn();
learn();
 */




/*

    // why / where we need closures ?

    1. to abstract public-behav
*/
// 1. to abstract public-behav keeping other members as private
/*
    e.g counter module

        - count
        - doCount()
        - getCount()
*/
function init() {
    let count = 0;  // private
    // public
    function internal() { };
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    return {
        doCount: doCount,
        getCount: getCount,
        f:function(){}
    }
}
const counter = init();
//---------------------------------------------------------------------


