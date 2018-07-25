

//1.
/* 
function foo(b) {
    var a = 10;
    return a + b + 11;
}
function bar(x) {
    var y = 3;
    return foo(x * y);
}
console.log(bar(7)); //returns 42 */


// 2.
/* function foo(){}
function bar(){foo()}
function baz(){bar()}
baz(); */


// 3.
/* 
function foo(){
    throw new Error('hate js');
}
function bar(){foo()}
function baz(){bar()}
baz();

 */

 // 4.
 /* function foo(){
     foo();
 }
 foo(); */


 // 5.
/* 
 function longTraining(){
     var i=0;
     while(i<10){
         console.log('long..');
         i++;
     }
 }
 function shortTraining(){
     console.log('short...');
 }

 longTraining();
 shortTraining(); */


 //------------------------------------------------------------------

 // 6.

 // on event , How .js programs are running ?

 /*

    <button class="veg">veg-1</button>
    <button class="veg">veg-2</button>
    <button class="non-veg">non-veg</button>

 */


/* console.log('initial script...');

 $.on('.veg','click',function vegHandler(e){
     console.log('handling event on .veg elements');
 });
 $.on('.non-veg','click',function nonVegHandler(e){
    console.log('handling event on .non-veg elements');
 }); 

console.log('cont if any other work exist..'); 
function longTraining(){
    var i=0;
    while(i<10){
        console.log('long..');
        i++;
    }
}
longTraining();
 */

// 7.

// Non blocking IO

console.log('initial script');

// IO
setTimeout(function(){
    console.log('after timeout..');
},5000);
console.log('cont if any other work exist..'); 

