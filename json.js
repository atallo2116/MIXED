//==== Json to stringfy
//====
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

//========================================
//===== json in premitives
//=======
// a number in JSON is just a number
alert(JSON.stringify(1)); // 1
// a string in JSON is still a string, but double-quoted
alert(JSON.stringify("test")); // "test"
alert(JSON.stringify(true)); // true
alert(JSON.stringify([1, 2, 3])); // [1,2,3]

//========================================
//======  JSON is data-only language-independent specification
//=======
let user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};
alert(JSON.stringify(user)); // {} (empty object)

//========================================
//====  nested objects are supported and converted automatically.
//====
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

alert(JSON.stringify(meetup));
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

//=====
