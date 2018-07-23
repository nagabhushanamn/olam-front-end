

/*

    -----------------------------------------------

    what is object ?

        - info,data,prop,attr   ==> State
        - func,method,work,oprn ==> Behavior
        - addr,loc,reference    ==> Identitify
      
    i.e obj ==> SBI
    
        obj's template  ==> class 

        class  --> instance(s) 

    -----------------------------------------------

    types of objects

    -> dependent
    -> dependency

    -------------------------------------------------------------- 

    OO concepts

        - Abstraction / Interface / obj's front-end

            why we need ?

            -> easy to use/learn by dependent
            -> for loose-coupling

        - Encapsulation / Implementation . obj's back-end
        
            why we need ?

              -> hide complexity
        
        - Inheritance
        
            why we need ?

             -> to re-use common state & behav from generalized-class to specialized class objects

        - Polymorphism
        
            why we need ?

                - on different strategy , obj should able to work

        --------------------------------------------------------------  

*/


// let p1 = { name: 'Nag', age: 30, sayName: function () { console.log('im ' + this.name) } }


// ES-5 class  ( Naive approach )

/* function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im ' + this.name);
    }
    this.sayAge = function () {
        console.log('im ' + this.age + " old");
    }
}

let p1 = new Person('Nag', 35);
let p2 = new Person('Kishore', 34);
p2.address = "chennai";
p2.sayAddress = function () {
    console.log('i live in ' + this.address);
} */


//ES-5 class ( better approach )
/*
    'prototype'
        => parent-object, which contains common properties for other objects
*/
/* 

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}

let p1 = new Person('Nag', 35);
let p2 = new Person('Kishore', 34); */


// --------------------------------------------------------------  

// ES6 - class ( New OO syntax )


/*

    2 types of behav

    - class-level/static level methods
    - instance level methods


*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.v = 10;
        console.log('Person::constructor');
    }
    sayName() {
        console.log('im ' + this.name);
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

let p1 = new Person('person-1', 35);
// let p2 = new Person('Kishore', 34);


class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        console.log('Employee::constructor');
    }
    saySalary() {
        console.log('i get ' + this.salary + " only");
    }
    askForBonus() {
        return this.salary * 0.02;
    }
}

let emp1 = new Employee('emp-1', 35, 1000.00);

class Boss extends Employee {
    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();;
    }
}

let boss = new Boss('boss-1', 35, 1000.00);
class Abc {
    static staMethod() {
        console.log('stat Method on Abc')
        // console.log(this);
    }
}
Abc.staVar = 123;

class Xyz extends Abc {
    // static staMethod() {
    //     console.log('stat Method on Xyz')
    // }
}

// Abc.staMethod();
// Xyz.staMethod();

