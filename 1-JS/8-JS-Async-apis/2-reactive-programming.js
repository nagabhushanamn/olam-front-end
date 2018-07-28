



let Rx = require('rxjs/Rx');
let { Subject } = Rx;
let { filter } = Rx.operators;


let numberStream = new Subject();

// producer-module
//--------------------------------------------------------
setInterval(() => {
    let rn = Math.floor(Math.random() * 1000);
    console.log('emitting new random-number => ' + rn);
    numberStream.next(rn);
}, 1000);

//--------------------------------------------------------


// consumer-module =1
//--------------------------------------------------------

numberStream
    .pipe(filter(n => n % 2 === 0))
    .subscribe(n => {
        console.log('c1 : subscribing => ' + n);
    });

//--------------------------------------------------------


// consumer-module =2
//--------------------------------------------------------

numberStream.subscribe(n => {
    console.log('c2 : subscribing => ' + n);
});

//--------------------------------------------------------