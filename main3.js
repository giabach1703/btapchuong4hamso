// hoisting in function
/*
1. Hoisting:
Function Declaration: co hoisting. Ban co the goi ham truoc
*/
hoisetedFunction();
function hoisetedFunction() {
  console.log("Hello");
}

// engine cua trinh duyen doc
function hoisetedFunction() {
  console.log("Hello");
}
hoisetedFunction();

// function expression
//nonhoistedFunction();-> Lỗi
let nonhoistedFunction = function () {
  console.log("Hello");
};
nonhoistedFunction();

// Arrow function
// arrownonhoistedFunction(); -> Lỗi
let arrownonhoistedFunction = () => {
  console.log("Hello");
};
arrownonhoistedFunction();
