// viet ham de quy tinh a^n
function tinhSomu(a, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / tinhSomu(a, -n);
  } else {
    return n * tinhSomu(a, n - 1);
  }
}

let a = Number(prompt("a ="));
let n = Number(prompt("n ="));
console.log(tinhSomu(a, n));
