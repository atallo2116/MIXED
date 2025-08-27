// const obj = {
//   id: 1,
//   name: "Abebe",
// };

// //==================================
// // //===== change object to array =====
// const arr1 = [];
// for (key in obj) {
//   arr1.push(key); //keys
// }
// for (key in obj) {
//   arr1.push(obj[key]); //values
// }
// for (key in obj) {
//   arr1.push(key, obj[key]); //values and values
// }
// for (key in obj) {
//   arr1.push([key, obj[key]]); //keys and values in nested array
// }
// console.log(arr1[0]);
// arr1 = Object.values(obj);
// arr1 = Object.keys(obj);
// arr1 = Object.entries(obj);
// console.log(arr1);

// //==================================
// // ==== multiword property names
// const user={
//     name:"Abebe",
//     'likes dogs':true
// }
// user['likes cats']=false //adding multiword property
// console.log(user['likes dogs'])
// console.log(user['likes cats'])

// //==================================
// // ==== square brackets
// const user = {};
// const key = 'likes dogs';
// user[key] = true;
// console.log(user); // { likes dogs: true }

// //==================================
// // ==== computed properties 1
// const nameProperty = 'name';
// const user = {
// [nameProperty]: 'John',
// };
// console.log(user); // { name: 'John' }🤩

// //==================================
// // ==== computed properties 2
// const prop = 'likes';

// const user = {
//     [`${ prop }Dogs`]: true,
//     [prop + 'Cats']: true,
// };
// console.log(user); // { likesDogs: true, likesCats: true }

// //==================================
// // ==== property value shorthan not good
// const name = 'John Doe';
// const email = 'john@example.com';
// const age = 25;

// const user = {
//     name: name,
//     email: email,
//     age: age,
// };

// //==================================
// // ==== property value shorthan not good
// const name = 'John Doe';
// const email = 'john@example.com';
// const age = 25;

// const user = {
//     name,
//     email,
//     age,
// };

// Number
// BigInt
// String
// null
// undefined
// boolean
// Symbol
// Object

// const x=Symbol('id');
// console.log(typeof x)

// console.log(Number([3,6]))

// //==================================
// const obj={
//     fName:'Abebe',
//     age:20,
// }

// let arr1=Object.keys(obj)
// console.log(arr1)
// let arr2=Object.values(obj)
// console.log(arr2)
// let arr3=Object.entries(obj)
// console.log(arr3[0][0])

// =============================
//Object.assign
let obj1 = {
  fName: "Abebe",
  age: 14,
  height: 175,
};

let objCopy = {};
for (let keys in obj1) {
  objCopy[keys] = obj1[keys];
}
console.log("Obj Copy", objCopy);

let obj2 = Object.assign({}, obj1);
console.log("Obj 2: ", obj2);

let obj3 = structuredClone(obj1);
console.log("Obj 3: ", obj3);

let obj4 = JSON.parse(JSON.stringify(obj1));
console.log("Obj 4: ", obj4);

let obj5 = { ...obj1 };
console.log("Obj 5: ", obj5);
