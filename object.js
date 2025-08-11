const obj = {
  id: 1,
  name: "Abebe",
};

//===== change object to array =====
const arr1 = [];
for (key in obj) {
  arr1.push(key); //keys
}
for (key in obj) {
  arr1.push(obj[key]); //values
}
for (key in obj) {
  arr1.push(key, obj[key]); //values and values
}
for (key in obj) {
  arr1.push([key, obj[key]]); //keys and values in nested array
}
console.log(arr1[0]);
arr1 = Object.values(obj);
arr1 = Object.keys(obj);
arr1 = Object.entries(obj);
console.log(arr1);
