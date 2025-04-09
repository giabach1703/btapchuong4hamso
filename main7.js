//viet hoa chu cai dau
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
