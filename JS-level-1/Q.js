
"use strict"

// let pName = "global";
// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         //let pName = "local";
//         console.log('im ' + pName); // read in scope hierarchy
//         console.log('im ' + person.pName); // read referenceing object
//         console.log('im ' + this.pName);
//     }
// };
// person.sayName();

//----------------------------------------------------------------

let i = 10;
function func() {
    console.log(i);
    console.log(this.i);
}
func();