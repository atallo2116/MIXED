// ===== access with class
// ====
const xx = document.querySelector(".classX");
xx.innerHTML = "Class gggg";

// ====== access with id
// ====
const xx = document.querySelector("#idX");
xx.textContent = "ID ggggg";

// ==== access with tag name
// ====
const xx = document.querySelector("div");
xx.textContent = "Tag ggggg";

// ===== querySelectorAll using for of
// ====
const xx = document.querySelectorAll(".xx");
for (x of xx) {
  x.textContent = "ccc";
}

// ==== querySelectorAll using for loop
// ====
const xx = document.querySelectorAll(".xx");
for (let i = 0; i < xx.length; i++) {
  xx[i].textContent = "ooo";
}

console.log(typeof xx.filter); //undefined but expected function   xx is collection not array
const xxArr = Array.from(xx); //change to array
console.log(typeof xxArr.filter); //function

// ==== childe nodes
// ====
const xx = document.querySelector(".yy");

xx.children[0].textContent = "jjj";

for (let i = 0; i < xx.children.length; i++) {
  xx.children[i].textContent = i + ": cccc";
}

for (let i = 0; i < xx.childNodes.length; i++) {
  xx.childNodes[i].textContent = i + ": cccc"; //display 6 including text nodes like new line
}

for (let i = 0; i < xx.childNodes.length; i++) {
  if (xx.childNodes.nodeType === xx.childNodes.ELEMENT_NODE) {
    xx.childNodes[i].textContent = i + ": cccc"; //display 3 only element node
  }
}

for (x of xx.children) {
  x.textContent = "vvvv";
}

for (x of xx.childNodes) {
  x.textContent = "vvvv"; //display 6 including text nodes like new line
}

for (x of xx.childNodes) {
  if (x.nodeType === x.ELEMENT_NODE) x.textContent = "vvvv"; //display 6 including text nodes like new line
}

// ==== sibling
// ====
const xx = document.querySelector(".yy");

xx.nextSibling.textContent = "NextSibling";
xx.nextElementSibling.textContent = "NextSibling";
xx.parentNode.textContent = "Parent node";
xx.previousSibling.textContent = "Previous Sibling"; //text node
xx.previousElementSibling.textContent = "Previous Sibling"; //on the element like div

// ==== styling
// ====
const xx = document.querySelector(".yy");
xx.textContent = "ll";
xx.style.background = "red";
console.log(xx.innerHTML);
alert(xx.innerHTML);

// ==== closeset
// #  is a method that lets you find the nearest ancestor element
// # (including the element itself) that matches a given CSS selector
// ====
const p = document.querySelector(".xxP");
const nearestYY = p.closest(".yy");
console.log(nearestYY);

// ==== attributes
// ====
const xx = document.querySelector(".yy");
const idAtt = xx.id;
console.log("ID attribute:  ", idAtt);
const dataAtt = xx.dataset.test;
console.log("Data attribute:  ", dataAtt);

// ==== attributes
// ====
const xx = document.querySelector(".yy");
console.log(xx.hasAttribute("id"));
console.log(xx.getAttribute("id"));
console.log(xx.setAttribute("id", "changedId"));
xx.removeAttribute("class");

// ==== attributes are typed
// ==== checked is boolean
const checkBox = document.querySelector("#input");
console.log(checkBox.checked);

// ==== modifying the dom
// ==== #creating Element
const div = document.createElement("div");
div.textContent = "gggggg";
div.innerHTML = "<strong>Hi there </strong> You've read an important message.";
const yy = document.querySelector(".yy");
yy.append(div);

// ==== modifying the dom
// ==== #creating textNode
const textNode = document.createTextNode("Text ....");
const yy = document.querySelector(".yy");
// yy.append(textNode)
// yy.prepend(textNode)
// yy.after(textNode)
yy.before(textNode);
setTimeout(() => textNode.remove(), 3000);
const cloneTextNode = textNode.cloneNode(); // cloning  #deep clone the element

// ==== styles
// ==== #
const yy = document.querySelector(".yy");
yy.innerHTML = "John is running";
yy.classList.add("addClass"); //adding classes
yy.classList.remove("addClass"); //remove classes
console.log(yy.classList.contains("yy"));
yy.classList.toggle("xx");
console.log("1st class name: ", yy.classList[0]);
// for (c of yy.classList){
//     console.log("Class: ", c)
// }
for (let i = 0; i < yy.classList.length; i++) {
  console.log("Class", i, ": ", yy.classList[i]);
}
