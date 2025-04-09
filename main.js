//  fuction js
// vi du
// let name = prompt("moi nhap ten: ");
// function xinChao(n) {
//   console.log(`Xin Chao ${n} den voi tuhoc.cc`);
// }

// xinChao(name);
// xinChao("Hens");

// // ham tinh tonh
// function tinhTong(a, b) {
//   let t = a + b;
//   return t;
// }

// let a = Number(prompt("moi nhap a: "));
// let b = Number(prompt("moi nhap b: "));
// console.log(`tong cua a + b = ${tinhTong(a, b)}`);

// // function expression
// let tich = function (c, d) {
//   return c * d;
// };
// let c = Number(prompt("moi nhap a: "));
// let d = Number(prompt("moi nhap b: "));
// let kq = tich(c, d);
// console.log(`tich c * d = ${kq}`);

// arrow function
// let tich1 = (a, b) => a * b;
// let a1 = Number(prompt("moi nhap a: "));
// let b1 = Number(prompt("moi nhap b: "));
// console.log(`tich cua a * b = ${tich1(a1, b1)}`);

// function expression
// let multiplyAndAdd = function (a, b) {
//   let p = a * b;
//   let t = a + b;
//   return p + t;
// };

// Arrow function
// let multiplyAndAddArrow = (a, b) => {
//   let p = a * b;
//   let t = a + b;
//   return p + t;
// };

// console.log(`kq1 = ${multiplyAndAdd(5, 5)}`);
// console.log(`kq2 = ${multiplyAndAddArrow(5, 5)}`);

// function calling other function
// ham thuc hien phep tinh cong
let tong = function (a, b) {
  return a + b;
};

// ham thuc hien phep tinh nhan
let tich = function (a, b) {
  return a * b;
};

// function calling other function
function congNhan(num1, num2, num3) {
  let sum = tong(num1, num2);
  let product = tich(sum, num3);
  return product;
}

let num1 = Number(prompt("num1 = "));
let num2 = Number(prompt("num2 = "));
let num3 = Number(prompt("num3 = "));
let rs = congNhan(num1, num2, num3);
console.log(`kq = ${rs}`);
