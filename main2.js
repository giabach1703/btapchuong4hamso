// var, let va hoisting trong js
console.log("gia tri cua bien c = " + c);
// khoi tao c
var c = 9;
// cach js hieu
/*
var c;
console.log("gia tri cua bien c = " + c);
// khoi tao c
c = 9
*/

// js hieu
function examPleVar() {
  if (true) {
    var y = 20;
    console.log(`${y} trong block scope`);
  }
  console.log(`${y} trong function scope`);
}
examPleVar();
