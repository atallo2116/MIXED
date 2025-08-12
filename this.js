// ===== this in Global
console.log(this);

("use strict");
function x() {
  console.log(this);
}
x(); //undefined
window.x();

// ===== this in function expression
var x = 5;
const y = 6;
const fn = function () {
  console.log("Normal this", this); //window
  console.log("Var ", this.x); //5  b/c  var is in global scope
  console.log("Const ", this.y); //undefined, b/c let&const are in script scope
};
fn();

// ===== this in strict mode with function
("use strict");
var x = 5;
const y = 5;
function fn() {
  console.log("Normal this: ", this); //undefined
  console.log("Var: ", this.x); //Type error
  console.log("Const: ", this.y); //Type error
}
fn();

// ===== Arrow function "this" looks its Lexical Environment
// ===== Window in this case
const obj = {
  name: "Abebe",
  fn: () => {
    console.log(this);
  },
};
obj.fn();

// ===== Arrow function "this" looks its Lexical Environment
// ===== fn2 in this case
const obj = {
  name: "Abebe",
  fn2() {
    return (fn = () => {
      console.log(this);
    });
  },
};
const fnCall = obj.fn2();
fnCall();

// ===== Arrow function "this" in strict mode
// ===== looks fn2
("use strict");
const obj = {
  name: "Abebe",
  fn2() {
    const fn = () => {
      console.log(this);
      console.log(this.name);
    };
    fn();
  },
};
obj.fn2();

//===== this in function inside objects
//===== fn3 contains object
("use strict");
const obj = {
  name: "Abebe",
  fn3() {
    console.log(this.name);
  },
};
obj.fn3();

//===== this be lost when extracting a method
//===== Type error
// Now output is simply a plain function, no longer attached to obj
// this is dynamic and determined by how a function is called, not where it’s defined
// When you remove the method from its object, it loses the object context
("use strict");
const obj = {
  name: "Abebe",
  fn3() {
    return this.name;
  },
};
const output = obj.fn3;
console.log(output());

// ===== this be lost callback a method
function sayHi() {
  console.log(`Hello ${this.name}!`);
}
let user = {
  name: "Bart",
  sayHi,
};
function hi(callback) {
  callback();
}
hi(user.sayHi); // Hello undefined!

// ===== this be lost callback a method (setTimeout)
function sayHi() {
  console.log(`Hello ${this.name}!`);
}
let user = {
  name: "Bart",
  sayHi,
};
setTimeout(user.sayHi, 1000); // Hello undefined!

// ====== this in normal function in objects
function sayHi() {
  console.log(this.name);
}
let user = {
  name: "Bart",
  sayHi,
};
user.sayHi(); // Bart

//==== this in call apply and bind
const student1 = {
  name: "Abebe",
  printName: function () {
    console.log(this.name);
  },
};
// student1.printName()
const student2 = {
  name: "Ayele",
  age: 18,
  updatedName: this,
};
console.log("Updatedcname: ", student2.updatedName); //window
//call: Invokes the function immediately, passing arguments one by one.
student1.printName.call(student2); // Output: "Ayele"
// Using apply — same as call but arguments are passed as an array
student1.printName.apply(student2); // Output: "Ayele"
// Using bind — creates a new function permanently bound to student2
const boundPrintName = student1.printName.bind(student2);
boundPrintName(); // Output: "Ayele"

//==== this in arrow function
//==== arrow fun take the outer lexical environment
const student3 = {
  name: "John",
  age: 18,
  printName: () => {
    console.log(this);
  },
};
//window b/c the arrow fun is enclosed in global space(global lexical env)
student3.printName();

const student4 = {
  name: "John",
  age: 30,
  nameOtput: function () {
    const printName = () => {
      console.log(this);
    };
    printName();
  },
};
//student4 object b/c it is enclosed in the function lexical environment
student4.nameOtput();

//===== this in DOM
//=====
const xx = document.querySelector(".btn");
xx.addEventListener("click", (e) => {
  alert(this);
});

///==== this in OOP
// ==== this refer object that is currently the context of execution
class Person {
  constructor(name) {
    this.name = name; // 'this' points to the new object
  }
}
const p = new Person("Alice");
console.log(p.name); // Alice

// ===static methods
class MathHelper {
  static description() {
    console.log(this === MathHelper); // true
  }
}
MathHelper.description(); // true
