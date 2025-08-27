let str = "test";

let revStr = (s) => [...s].reverse().join("");
console.log(revStr(str));

const number = 255;
number.toString(); // "255" as number in decimal system
number.toString(2); // "11111111" as number in binary system
number.toString(16); // "ff" as number in hex system
