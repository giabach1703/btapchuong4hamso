// bai tap van dung
// bai 22
// function tinhGiaithua(n) {
//   t = 1;
//   for (let i = 1; i <= n; i++) {
//     t = t * i;
//   }

//   return t;
// }

// n = Number(prompt("moi nhap n: "));
// while (!Number.isInteger(n) || n < 0) {
//   n = Number(prompt("moi nhap lai n: "));
// }
// alert(`!${n} = ${tinhGiaithua(n)}`);

// bai 23
// tao ham giai phuong trinh bac 2
let giaiPtbachai = function (a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    console.log("phuong trinh vo nghiem");
  } else if (delta === 0) {
    console.log(`phuong trinh co nghiem kep la x1 = x2 = ${-b / (2 * a)}`);
  } else if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`phuong trinh co hai nghiem x1 = ${x1}, x2 = ${x2}`);
  }
};

let a = Number(prompt("a = "));
let b = Number(prompt("b = "));
let c = Number(prompt("c = "));
giaiPtbachai(a, b, c);
