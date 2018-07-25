(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log('-main.js-');


let greetMod=require('olam-greet')
greetMod.greet('tn');
greetMod.greet('en');
},{"olam-greet":3}],2:[function(require,module,exports){

//-----------------------------------------------------
/* 
var obj = {
    doWork: function () {
        console.log('im dev, working here');
    }
}; */

//-----------------------------------------------------

// soln:
/* var olam = olam || {};
(function init() {
    olam.mod3.doWork();
    var obj = {
        doWork: function () {
            console.log('im dev, working here');
        }
    };
    olam.mod2 = obj;
})(); */

//-----------------------------------------------------
console.log('-greet/en.js-');
function greet(){
    console.log('Hello..');
}
module.exports=greet;
},{}],3:[function(require,module,exports){

//-----------------------------------------------------
/* 
var obj = {
    doWork: function () {
        console.log('im tanmay, working here');
    }
}; */

//-----------------------------------------------------

// soln-1:
/* var olam = olam || {};
(function init() {
    var internal = 100; // private
    olam.mod2.doWork();
    var obj = {
        doWork: function () {
            console.log('im tanmay, working here');
        }
    };

    olam.mod1 = obj; // public

})(); */

//-----------------------------------------------------

console.log('-greet/index.js-');
let message = "good evening";

let en = require('./en');
let tn = require('./tn');

function greet(lang) {
    if (lang === "en") {
        en(); return;
    }
    if (lang === "tn") {
        tn(); return;
    }
    console.log('give me ur lang, to greet you');
}
// greet();
module.exports = {
    greet
};
},{"./en":2,"./tn":4}],4:[function(require,module,exports){

//-----------------------------------------------------
/* 
var obj = {
    doWork: function () {
        console.log('im lakshmi, working here');
    }
}; */

//-----------------------------------------------------

// soln:
/* var olam = olam || {};
(function init() {
    var obj = {
        doWork: function () {
            console.log('im lakshmi, working here');
        }
    };
    olam.mod3 = obj;
})(); */

//-----------------------------------------------------

console.log('-greet/tn.js-');
function greet(){
    console.log('vanakkam..');
}
module.exports=greet;
},{}]},{},[1]);
