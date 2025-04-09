// viet ham ghep hai xau ky tu lai voi nhau
function connectString(n1, n2) {
  let newString = n1.concat(n2);
  return newString;
}

let n1 = prompt();
let n2 = prompt();
console.log(connectString(n1, n2));
