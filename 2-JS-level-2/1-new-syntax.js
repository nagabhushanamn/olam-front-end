"use strict"

console.log('-new-syntax.js-');

// ---------------------------------------------------------
// - de-structuring
// ---------------------------------------------------------

// to read obj or array with simple one-line expression

// a. object

// let person = {
//     name: 'Nag',
//     age: 35
// };

// let myName = person.name;
// let myAge = person.age;
//or 
// let { name: myName, age: myAge } = person;  // de-structuring

// let { name: name, age: age } = person;
// or
// let { name, age } = person;



// let name, age;

// name=person.name;
// age=person.age;
// or
// ({ name, age } = person); 


// b. array

// let nums = [10, 20, 30, 40, 50, 60, [70, 80]];

// let n1 = nums[0];
// let n2 = nums[1];
// let n3 = nums[2];

// or

// let [n1, n2, n3, n4 = 400, , n6, [n7, n8]] = nums;


// ---------------------------------------------------------
// - spread operator
// ---------------------------------------------------------

// e.g-1

/* 
function func(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let inpArr = [10, 20, "str"];

// func(inpArr[0], inpArr[1], inpArr[2]);
// or
func(...inpArr); */

// e.g-2
/* 
let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];
let str = "OLAM";

let newArr = [...arr1, 4, 5, 6, ...arr2, ...str];

 */



// ---------------------------------------------------------
// - obj-literal enhancements
// ---------------------------------------------------------


let name = "olam";
let address = "chennai";
let addressType = "client"; // head | client

// es5  
let company = {
    name: name,
    address: address,
    doWork: function () {
        console.log('work on agri products');
    },
};

let where = "CP"; // // HQ | CP | ....
// es6
let newCompany = {
    name,
    [addressType + "-address"]: address,
    [1 + 10 + 100]: 'value',
    doWork() {
        console.log('work on agri products');
    }
};


//  
/* 
let pName = "Nag";
let pAge = 35;

// es-5

let person = {
    pName: pName,
    pAge: pAge,
    address: 'chennai'
}

// es6

let pAddressType = 'office' // hoem | office | vacation | onsite
let newPerson = {
    pName,
    pAge,
    [pAddressType + "-address"]: '.....',
    ['say Name']() {
        console.log('i wont say');
    }
};
 */
// imp-ote : in es6 , obj's property names can be dynamically computable

// newPerson['say Name']();


//e.g

// let cart = {};

/*

    {
        "123":{name:'',price:0.0,qty}
    }

*/
/* 
function addToCart(item, qty) {
    let id = item.id;
    let line;
    if (cart[id]) {
        line = cart[id];
        line = { name: line.name, price: line.price, qty: line.qty + qty }
    } else {
        line = { name: item.name, price: item.price, qty }
    }
    cart = Object.assign({}, cart, { [id]: line });
}

let lap = { id: 111, name: 'Laptop', price: 1000.00 }
let mob = { id: 222, name: 'Mobile', price: 2000.00 }

addToCart(lap, 1)
addToCart(lap, 2)
addToCart(mob, 1)
addToCart(mob, 1)
addToCart(mob, 1)
addToCart(mob, 1)
addToCart(mob, 1)
console.dir(cart)

 */



// another ex

// before ES6

let txn = {
    "123": "txn detail"
};

// after Es6

// do Txn..
let txnResponse = { id: 35234234, message: 'success' } //response from server

let newTxn = {
    [txnResponse.id]: txnResponse.message
};


//----------------------------------------------------------
// - arrow function
//----------------------------------------------------------

// let getPrice = function () {
//     return 100 + 200;
// };

// or


/* let getPrice = () => {
    return 100 + 200;
};
 */

/* let getPrice = (count) => {
    return count * (100 + 200);
}; */
// or
/* let getPrice = count => {
    return count * (100 + 200);
}; */

/* let getPrice = (count, tax) => {
    return count * (100 + 200) + tax;
}; */
// or
// let getPrice = (count, tax) => count * (100 + 200) + tax;


/* let getPrice = (count, tax) => {
    let cost = count * (100 + 200);
    let total = cost + tax;
    return total
}; */

//-------------------------------------------------------

// why / where we need arrow-function?
/*
    => to make compact function-arg
    => to capture 'this'
*/

//-------------------------------------------------------

// => to make compact function-arg

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort();
// nums.sort(function (a, b) { return a - b; });
// or
// nums.sort((a, b) => { return a - b; });
// or
nums.sort((a, b) => a - b); // concise cose
// nums.forEach(n => console.log(n))

//-------------------------------------------------------

/* remember-noet : 

 => by default global-scope always executed by 'global-object'

    global-object

    browser-envi ==> window
    node.js      ==> process

*/


// => to capture 'this'

/*

    imp-note :

     ==> arrow-function always bound to creator/owner
     ==> we cannot bind arrow-functions to any object either statically or dynamically

*/
/* 
let normalFunc = function () {
    console.log(this);
};
let arrowFunc = () => {
    console.log(this);
};

// normalFunc();
// arrowFunc();

let o1 = { name: 'A' }
normalFunc.call(o1);
arrowFunc.call(o1); */



// e.g


let trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");

        /* let self = this;
        let askQues = function (q) {
            console.log(self.name + " answering " + q);
        }
        */

        // or

        let askQues = (q) => {
            console.log(this.name + " answering " + q);
        }


        console.log('teaching ends..');
        return askQues;
    },
    // askQues:function(){
    //...
    // }
};

/* // today
let nagAskQues = trainer.doTeach();
nagAskQues('Q1');
nagAskQues('Q2');

//tomorrow
let tempTrainer = { name: 'Kishore' }
let kiAskQues = trainer.doTeach.call(tempTrainer);
kiAskQues('Q3');

nagAskQues.call(tempTrainer,"Q4"); // 
 */

//-----------------------------------------------------



// e.g

//-----------------------------------------------------
/* let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " processed..");
    }
}; */
//-----------------------------------------------------
// or
//-----------------------------------------------------
// let normalFunc = function () {
//     console.log('INV-' + this.num + " processed..");
// };
// let invoice = {
//     num: 123,
//     process: normalFunc
// };
//-----------------------------------------------------

// let invoice = {
//     num: 123,
//     process: ()=>{
//         console.log('INV-' + this.num + " processed..");
//     }
// };
//-----------------------------------------------------
// or
//-----------------------------------------------------
/* let arrowFunc = () => {
    console.log('INV-' + this.num + " processed..");
};
let invoice = {
    num: 123,
    process: arrowFunc
}; */
//-----------------------------------------------------
/* let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " processed partialy");
        let normalFunc = function () {
            console.log('INV-' + this.num + " processed completly");
        }
        return normalFunc;
    }
};
 */
//-----------------------------------------------------
/* let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " processed partialy");
        let self=this;
        let normalFunc = function () {
            console.log('INV-' + self.num + " processed completly");
        }
        return normalFunc;
    }
}; */
//-----------------------------------------------------
/* let invoice = {
    num: 123,
    process: function () {
        console.log('INV-' + this.num + " processed partialy");
        let arrowFunc = () => {
            console.log('INV-' + this.num + " processed completly");
        }
        return arrowFunc;
    }
};
let completeFunc = invoice.process();
// by admin
completeFunc();
let otherInvoice = { num: 321 };
completeFunc.call(otherInvoice);
 */


//-----------------------------------------------------



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        /* let self=this;
        let incAge = function () {
            self.age++;
            console.log(self.name + ":" + self.age)
        };
        setInterval(incAge, 1000); */

        // or
        let incAge = () => {
            this.age++;
            console.log(this.name + ":" + this.age)
        };
        //setInterval(incAge, 1000);

    }
}

let p1 = new Person('Ria', 3);


//-----------------------------------------------------
// symbols
//-----------------------------------------------------

/*

    ==> unique & immutable value in .js-runtime

    why we need ?

    => used obj's identifier property

*/
/* 
let frontEnd = Symbol.for('front-end')
let backEnd = Symbol.for('back-end')

let e1 = { name: 'A', [frontEnd]: 'html,css,js,ng,kendoui' };
let e2 = { name: 'B', [backEnd]: 'java,spring,micro' };
let e3 = { name: 'C' };
let e4 = { name: 'D' };


if(e1[frontEnd]){
    console.log('he is front-end guy');
}
 */


//-----------------------------------------------------
// Iterable
//-----------------------------------------------------
/* 
let menu = [
    "item1",
    "item2",
    "item3",
    "item4"
];

let [m1, m2, m3, m4] = menu;  // de-structuring
let newMenu = [...menu, 'item-5']; // spreadable
for (let m of menu) {   // works with iterable objects only
    console.log(m);
}
 */


let idMaker = {
    [Symbol.iterator]: function () {
        let id = 0;
        return {
            next: function () {
                console.log('next()');
                id++;
                if (id <= 100)
                    return { value: id, done: false }
                else
                    return { value: undefined, done: true }
            }
        };
    }
};

// let ids = [...idMaker];
// let [id1, , , , , , , id2, id3, id4, id5] = idMaker;
// let [id6, id7, id8, id9, id10] = idMaker;
/* for (let id of idMaker) {
    console.log(id);
} */


//-----------------------------------------------------
// Collection  / data-structures
//-----------------------------------------------------

let menu1 = [];
menu1.push("biryani");
menu1.push("biryani");
menu1.push("meal");

// Set  ==> data-structure holds unique elements

let menu2 = new Set();
menu2.add('biryani');
menu2.add('biryani');
menu2.add('meals');


class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let e1 = new Employee('Nag', 35);
let e2 = new Employee('Nag', 35);

let employeesSet = new Set();
employeesSet.add(e1);
employeesSet.add(e2);


// Map  ( data-structure assoicative mapping  i.e key + value )

let o = {
    key1: 'value1',
    key2: 'value2'
};


class Owner {
    constructor(name) {
        this.name = name;
    }
}
class Car {
    constructor(model, color) {
        this.model = model
        this.color = color
    }
}
let ow1 = new Owner('Nag');
let ow2 = new Owner('Ria');

let car1 = new Car('BMW', 'black');
let car2 = new Car('Toy-var', 'red');

let map = new Map();
map.set(ow1, car1);
map.set(ow2, car2);
console.log(map.get(ow1));