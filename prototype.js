// const arr = [1, 3, 4];
// const x1 = arr.__proto__;
// const x2 = arr.__proto__.__proto__;
// const x3 = arr.__proto__.__proto__.__proto__;
// console.log(x1); //[at: ƒ, concat: ƒ, ...
// console.log(x2); //{__defineGetter__: ƒ, __defineSetter_, ...
// console.log(x3); //null

// //Everything in javascript is an object
// const obj = {
//   name: "Abebe",
//   age: 19,
// };

// const y1 = obj.__proto__;
// const y2 = obj.__proto__.__proto__; //stops here
// // const y3=obj.__proto__.__proto__.__proto__ //error
// console.log("Y1: ", y1); //{__defineGetter__: ƒ, __defineSetter_, ...
// console.log("Y2: ", y2); //null
// // console.log("Y3: ", y3) //error

// //function
// function add() {}
// const z1 = add.__proto__;
// const z2 = add.__proto__.__proto__;
// const z3 = add.__proto__.__proto__.__proto__;
// console.log(z1); //ƒ () { [native code] }
// console.log(z2); //{__defineGetter__: ƒ, __defineSetter_, ...
// console.log(z3); //null

// //==================
// let person={fName: 'John'}

// console.log(Object.prototype)
