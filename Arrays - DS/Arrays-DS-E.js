var a = [1, 2, 3, 4];

// Solution #1
function reverseArray(a) {
  var string = "";
  for (var i = a.length - 1; i >= 0; i--) {
    string = string.concat(a[i]) + " ";
  }
  console.log(string.trim());
}

// Solution #2
function reverseArray(a) {
  let string = "";
  arr.reverse().forEach(item => (string = `${string} ${item}`));
  console.log(string.trim());
}

// Solution #3
function reverseArray(a) {
  let string = "";
  arr.reverse().reduce((prev, item) => (string = `${string} ${item}`), 0);
  console.log(string.trim());
}

// Solution #4
function reverseArray(a) {
  a.reverse();
  return a;
}
