

/*

    scope / execution-context

    //-------------------------------------------------------------------------
    
    memory / stack-frame with args & locals
    to execute given instructions in seq

    phase-1 : creation / push

            ==> any variable declared with 'var' keyword any-where in that scope,
                always get hoisted with default-value(undefined) in that scope

    phase=2 : execution / pop

    //-------------------------------------------------------------------------

    imp-note : every function-invocation also creates new-scope,
               which is child of in-which scope that function has declared/created 
               
    

*/

//-------------------------------------------------------------------------

// console.log(a);
// var a=12;

//-------------------------------------------------------------------------


// var a=12;
// function f1(){
//     console.log(a);
//     var a=13;
// }
// f1();  // f1-scope  <- global-scope

//-------------------------------------------------------------------------

// Quiz

/* var v = 12;
function f1() {
    function f2() {
        console.log(v);
    }
    f2(); // f2-scope<-- f1-scope
    var v = 13;
}
f1();// f1-scope <-- global-scope */

//-------------------------------------------------------------------------

/* 
var v=12;
var v=13;  // we can re-declare same variable within scope
 */


//-------------------------------------------------------------------------

//  var v=12;
//  if(true){
//     var v=13;  // No block-scope
//  }
//  console.log(v);

//-------------------------------------------------------------------------


// summary :

/*

   problems with 'var' keyword 

   => always get hoist
   => can re-declare same variable within scope
   => no block scope

   soln : using 'let' & 'const' keywords  with block-scope  ( from ES6 )

*/


//-------------------------------------------------------------------------
/* 
 console.log(v); // error
 let v=13; // it will never hoist */

//-------------------------------------------------------------------------

//  let v=12;
//  let v=13;

//-------------------------------------------------------------------------
/* 
let v=12;
if(true){
    let v=13;  // belongs to if-block
    console.log(v);
}
console.log(v) */

//-------------------------------------------------------------------------

const olam = {
    trainer: 'Nag'
};

// olam=null;//  error

olam.trainer = "krishna";

//-------------------------------------------------------------------------

// summary :

/*

    let   ==> mutable reference
    const ==> immutable reference
    var   ==> try to avoid it

*/

//-------------------------------------------------------------------------