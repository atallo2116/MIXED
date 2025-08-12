let num = Number("123"); // convert a string to number
let x = "34";
console.log(typeof Number(x));

//========================================
//JavaScript uses the toString() method for all other data types to output
console.log(123); // '123'
console.log(NaN); // 'NaN'
console.log(undefined); // 'undefined'
console.log(null); // 'null'
console.log(true); // 'true'
console.log([1, 2, 3]); // '1,2,3'

//Objects to string
const obj = { name: "John" };
const myJSON = JSON.stringify(obj);
// console.log(myJSON); // '{name: "John"}'

//conver to number
Number("2"); //2
Number(""); //0
Number("some text"); //NaN
Number(NaN); //NaN
Number(true); //1
Number(false); //0
Number(undefined); //NaN
Number(null); //0
Number([]); //0
Number([3]); //3
Number([1, 2, 3]); //NaN
Number({ a: 1 }); //NaN

//checking if an expression is falsy or not
if (!"") {
  //'', null, undefined, 0
  console.log("empty string is falsy");
}

//an empty array ([]) is an object, and all objects are truthy — even if they look empty
if ([]) {
  //also {}, function(){}, (new Boolean(false)
  console.log("[]  is true");
}
if ("0") {
  console.log("string 0 is true");
}
null == undefined; // true  (loose equality: both are "no value")
null === undefined; // false (strict equality: different types)

// //==== Loose equality but the if is different
console.log([] == false); // true  (array → "" → 0 → false)
console.log(![] == false); // true  (![] → false, false == false → true)
console.log({} == false); // false (object → NaN, NaN == false → false)
console.log([0] == false); // true  ([0] → "0" → 0 → false)
console.log([1] == true); // true  ([1] → "1" → 1 → true)\

//Here you go if
if ([]) {
  console.log("Truthy, but...");
  if ([] == false) {
    console.log("...loose equality says it's false");
  }
}

//Boolean
Boolean(2); //true
Boolean(0); //false
Boolean(""); //false
Boolean("some text"); //true
Boolean(NaN); //false
Boolean(true); //true
Boolean(false); //false
Boolean(undefined); //false
Boolean(null); //false
Boolean([]); //true
Boolean([1, 2, 3]); //true
Boolean({ a: 1 }); //true
