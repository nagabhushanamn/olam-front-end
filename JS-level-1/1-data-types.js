console.log('-1-data-types-');


/*
    data-types

    1. simple / primitives  ==> values
    2. complex / reference  ==> objects

*/

//-----------------------------------------------
// 1. simple / primitives  ==> values
//-----------------------------------------------

//-----------------------------------------------
// a. undefined

var v;

//-----------------------------------------------

// b. boolean  ( truthy | falsy )

var isHoliday = true;

/*
    falsy values ==> false,undefined,null,"",0,NAN
    and
    rest of all data-items are truthy
*/

//-----------------------------------------------

// c. number

var count = 12;
var cost = 12.00;

//-----------------------------------------------

// d. string

var name = "Nag";
var selection = 'abc';
var gst = 30;
var dynamicStr = 'biryani ' + (221 + gst) + ' ands beer - ' + (227 + gst) + ' ..'
// or ( string interpolation )
var dynamicString = `biryani - ${221 + gst} and beer - ${227 + gst}`;
var multLineString = `
    line 1 - ${10 + 10}
    line 2
    line 3
`;
//----------------------------------------------------------
// 2. complex / reference  ==> objects
//----------------------------------------------------------
/*
    e.g

    object ==> group of related key(property)+value pairs about any entity
    e.g person ==> name:'Nag', age:35

    how to create object in .js-lang ?

    syntax:
        var ref=new Constructor();

*/

// obj's template ==> class
function Person(n, a) {
    this.name = n;
    this.age = a;
}
// obj/instance
var p1 = new Person('Nag', 35);
var p2 = new Person('Kishore', 34);

p1.address = "chennai";  // we can add new-property to an object on fly ( if required )
delete p2.age; // we can delete any property if not required


// summary : by default , every js.obj is an extensible & configurable

//----------------------------------------------------------

// on-fly object
var req = new Object();  // when we need one , single-purpose object
req.url = "http://"
req.httpMethod = "GET";
req.authToken = "dfg6087g6p8g75z7dvxz5v65zxcv7";

// to loop-through obj's properties
for (var p in req) {
    console.log(`${p} : ${req[p]}`)
}

//----------------------------------------------------------
// literal-style objects ==> can create object without 'new' keyword ==> we get compact syntax
//----------------------------------------------------------

// a. Object
var req = new Object();
req.url = "http://"
req.httpMethod = "GET";
req.authToken = "dfg6087g6p8g75z7dvxz5v65zxcv7";

// or ( literal-style)
var req = {
    url: 'http://',
    method: 'GET',
    authToken: "dfg6087g6p8g75z7dvxz5v65zxcv7"
}

//----------------------------------------------------------

// b. Array

var lunchMenu = new Array();
lunchMenu[0] = "curd-rice";
lunchMenu[1] = "sambar-rice";
lunchMenu.push('jeera-rice');

// or ( literal-style)
var lunchMenu = ["curd-rice", "sambar-rice", "jeera-rice"];
lunchMenu.push("some-rice");
delete lunchMenu[2];

//----------------------------------------------------------

// c. RegExp   

/*
    
    why we need ?  common use-case is 'pattern-matching'

    mobile-input   = 1234567890
    mobile-pattern = \d{10}   , refer, regular expression cheat-sheats

*/

// var mobilePattern=new RegExp('\\d{10}');
// or ( literal-style )
var mobilePattern = /\d{10}/;

//----------------------------------------------------------

// d. Function

// imp-note : function is object in .js-lang

var add = new Function("n1", "n2", "n3", "var result=n1+n2+n3;return result");

// or ( literal style )

function add(n1, n2, n3) {
    var result = n1 + n2 + n3;
    return result;
}

//----------------------------------------------------------


// how to access obj's properties  ?

// way- 1 : '.' notation for property without '-' or 'space'
// else
// way-2  : '[]'

var person = {
    name: 'Nag',
    'home-address': 'chennai',
    1: 'one',
    '100': 'hundred'
};

person.name = "kishore"; // set
// console.log(person.name); // get

person['home-address'] = "chengalpattu";
// console.log(person["home-address"])
// console.log(person[1]);

//----------------------------------------------------------
