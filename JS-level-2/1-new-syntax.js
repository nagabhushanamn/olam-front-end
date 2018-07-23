

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


//----------------------------------------------------------


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