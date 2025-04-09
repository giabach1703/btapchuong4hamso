// đệ quy trong js
// đệ quy là cách dùng hàm để tự gọi lại chính nó
// giải bằng đệ quy cần 2 điều kiện
// 1.điểm dừng của bài toán
// 2.quy luật của bài toán
// vd. tính giai thừa của một số nhập vào bằng đệ quy
// function giaiThua(N) {
//   if (N === 1) {
//     return 1;
//   } else {
//     return N * giaiThua(N - 1);
//   }
// }
// let n = Number(prompt("moi nhap n: "));
// while (!Number.isInteger(n) || n < 0) {
//   n = Number(prompt("moi nhap lai n: "));
// }
// console.log(`!${n} = ${giaiThua(n)}`);

// // dãy Fibonacci
function F(n) {
  if (n < 2) {
    return 1;
  } else {
    return F(n - 1) + F(n - 2);
  }
}

let n1 = Number(prompt("moi nhap n: "));
console.log(`F(${n1}) = ${F(n1)} `);

// tinh tong
function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

let n = Number(prompt());
if (n % 1 !== 0 || n < 0) {
  console.log(false);
} else {
  console.log(sum(n));
}
