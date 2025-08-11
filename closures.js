function addClosure() {
  let x = 0;
  return function iteration() {
    return (x = x + 1);
  };
}
const add = addClosure();
console.log(add());
console.log(add());
//or
console.log(addClosure()());

// ====== closure with setTimeout to increase an num every 2 seconds
function iteration() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("I: ", i);
    }, i * 1000);
  }
}
iteration(); //Output 4 only instead of 0, 1, 2, 3, 4

// Solutions 1: use "let" or "Closures"
function iteration() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("I: ", i);
    }, i * 1000);
  }
}
iteration();

// Solutions 2: Using closures 1 IIFC
function iteration() {
  for (var i = 0; i < 4; i++) {
    (function (iCopy) {
      setTimeout(() => {
        console.log("I: ", iCopy);
      }, i * 1000);
    })(i);
  }
}
iteration();

//Solutions 3: Using Closure 2
function iteration() {
  for (var i = 0; i < 4; i++) {
    function addTime(iCopy) {
      setTimeout(() => {
        console.log("I: ", iCopy);
      }, i * 1000);
    }
    addTime(i);
  }
}
iteration();
