

/*

    data-structures
    ---------------

        - array / list

*/

// let products=new Array();
// or
let products = [
    { id: 123, name: 'item-1', price: 2000 },
    { id: 456, name: 'item-2', price: 4000 },
    { id: 789, name: 'item-3', price: 6000 },
    { id: 901, name: 'item-4', price: 8000 }
];

// adding new-item into an array
//---------------------------------------------------------------
let newItem = { id: 0, name: 'sample-item', price: 0.0 }
products.push(newItem); // mutate
let newProducts = products.concat(newItem); // immutable  ==> a change always produce new
//---------------------------------------------------------------

// filter
//---------------------------------------------------------------

// imperative style ( what + how)
let tempArray = [];
for (let i = 0; i < products.length; i++) {
    let item = products[i];
    if (item.price < 6000) {
        tempArray.push(item);
    }
}

// or

// functional-style ( what )
let lessPriceProducts = products.filter(function (item) {
    return item.price < 6000
});

// or
let result = products.filter(item => item.price < 6000); // arrow function

//---------------------------------------------------------------



// map
//---------------------------------------------------------------
/* 
// imperative style

let productNames1 = [];
for (let i = 0; i < products.length; i++) {
    let item = products[i];
    productNames1.push(item.name);
}

// or

let result2 = products.map(function (item) {
    return item.name + ":" + item.price;
});

// or

let result3 = products.map(item => item.name)
 */

//---------------------------------------------------------------

// reduce 
//---------------------------------------------------------------
/* 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// impretative style
let t = 0;
for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    t = t + n;
}

// functional style
let total1 = nums.reduce(function (acc, n) {
    //console.log(`acc - ${acc}`);
    //console.log(`n - ${n}`);
    return acc + n;
});
// console.log(total1)

// e.g

let totalPrice = products.reduce(function (acc, item) {
    console.log(`acc - ${acc}`);
    console.log(`n - ${item.price}`);
    return acc + item.price;
}, 0);
console.log(totalPrice);

// or

let total2 = products.reduce((acc, item) => acc + item.price, 0);
 */
//---------------------------------------------------------------



// every 
//---------------------------------------------------------------
/* 
let bo = products.every(function (item) {
    console.log(item);
    return item.price<5000;
});
console.log(bo); */


//---------------------------------------------------------------



// some 
//---------------------------------------------------------------

/* let bo = products.some(function (item) {
    console.log(item);
    return item.price > 5000;
});
console.log(bo);
 */


// find
//---------------------------------------------------------------

/* 
let item = products.find(function (item) {
    if (item.price === 2000) return true;
    else return false;
});
// console.log(item); */

//---------------------------------------------------------------

// findIndex
//---------------------------------------------------------------

/* let idx = products.findIndex(function (item) {
    if (item.price === 6000) return true;
    else return false;
});
console.log(idx);  */

//---------------------------------------------------------------

// forEach
//---------------------------------------------------------------
/* products.forEach(function (item) {
    console.log(item);
}); */

// // slice
// //---------------------------------------------------------------

// let sliceResult = products.slice(1, 2);



// splice
//---------------------------------------------------------------

// products.splice(1, 2); // to remove
// products.splice(1, 2, {}, {}); // to remove &  add in the same index

//---------------------------------------------------------------