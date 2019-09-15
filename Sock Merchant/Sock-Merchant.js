// Solution 1
function sockMerchant(n, ar) {
  let sorted = ar.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}
console.log("Solution 1: ", sockMerchant(n, socks));

// Solution 2
function stockAndCount(n, arr) {
  let pairs = 0;
  const colors = arr.reduce((acc, val) => {
    !!acc[val] ? (acc[val] += 1) : (acc[val] = 1);
    return acc;
  }, {});
  Object.keys(colors).forEach(n => {
    let _pair = parseInt(colors[n] / 2);
    if (_pair >= 1) pairs += _pair;
  });
  return pairs;
}

console.log("Solution 2: ", stockAndCount(n, socks));
const n = 9;
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// Output: 3
