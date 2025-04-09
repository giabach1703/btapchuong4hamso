// bai 1: Viết hàm ghép hai xâu ký tự lại với nhau.
// Nếu độ dài xâu ghép lớn hơn 10 ký tự thì thay thế các ký tự từ vị trí thứ 11 bằng xâu "...";
function connectString(s1, s2) {
  let newString = s1.concat(s2);
  if (newString.length > 10) {
    newString = newString.slice(0, 11) + "...";
  }
  return newString;
}

let s1 = prompt();
let s2 = prompt();
console.log(connectString(n1, n2));

// // bai 2: Lấy ví dụ về một hàm trả về một hàm
function createGreeting(greeting) {
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

let name = prompt("name: ");
console.log(sayHello(name));
console.log(sayHi(name));

// bai 3: Viết hàm đệ quy tính a^n.
function tinhSomu(a, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / tinhSomu(a, -n);
  } else {
    return a * tinhSomu(a, n - 1);
  }
}

let a = Number(prompt("a ="));
let n = Number(prompt("n ="));
console.log(tinhSomu(a, n));

// bai 4:Viết hàm đệ quy tính số Fibonacci thứ N. Số Fibonacci được xác định bởi công thức sau:
// F(0) = 1
// F(1) = 1
// F(N) = F(N-1) + F(N-2) (N ≥ 2)

function F(n1) {
  if (n1 < 2) {
    return 1;
  } else {
    return F(n1 - 1) + F(n1 - 2);
  }
}

let n1 = Number(prompt("moi nhap n: "));
console.log(`F(${n1}) = ${F(n1)} `);

// bai 5: Viết một hàm capitalize(str) nhận vào một chuỗi, và trả về chuỗi đó với chữ cái đầu tiên của các từ viết hoa, các chữ còn lại viết thường
//Ví dụ: capitalize(“buu chiNH”) → “Buu Chinh”;
function capiTalize(str) {
  let newString = str.split(" ");
  for (let i = 0; i < newString.length; i++) {
    if (newString[i].length > 0) {
      newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
    }
  }
  return newString.join(" ");
}

let str = prompt("str = ");
console.log(capiTalize(str));
