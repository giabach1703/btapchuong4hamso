// ví dụ về một hàm trả về một hàm
// function createGreeting(greeting) {
//   return function (name) {
//     return greeting + ", " + name + "!";
//   };
// }

// const sayHello = createGreeting("Hello");
// const sayHi = createGreeting("Hi");

// let name = prompt("name: ");
// console.log(sayHello(name));
// console.log(sayHi(name));

// // phep cong
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// let so = sum(10);

// let n = Number(prompt("n = "));
// console.log(so(n));

// ví dụ 2:
function hamTinh(loai) {
  return function (a, b) {
    if (loai === "cong") {
      return a + b;
    } else if (loai === "tru") {
      return a - b;
    } else if (loai === "nhan") {
      return a * b;
    } else if (loai === "chia") {
      return a / b;
    }
  };
}
const phepCong = hamTinh("cong");
console.log(phepCong(17, 3));
