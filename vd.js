// cau truc du lieu map()
const Student = new Map([
  ["name", "Bach"],
  ["age", 19],
  ["job", "data engineer"],
]);
console.log(Student.get("name"));

const user = new Map();
user.set("name", "John");
user.set("age", "20");
user.set("job", "data engineer");
console.log(user.keys());
console.log(user.values());
console.log(user.get("job"));
console.log(user.has("address"));

// cau truc du lieu set()
// set() la cau truc du lieu mang 1 chieu
const letters = new Set();
// them phan tu vao set()
letters.add("a");
letters.add("c");
letters.add("b");
console.log(letters); // -> {a,c,b}
console.log(1 % 3);

// set ko luu cac gia tri trung lap
