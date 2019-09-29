// Solution 1
function minimumBribes(q) {
  let count = 0;
  for (let i = 0; i < q.length; i += 1) {
    const number = q[i];
    let diff = 0;
    for (let k = i + 1; k < q.length; k += 1) {
      if (number > q[k]) {
        diff += 1;
      }
    }
    if (diff > 2) {
      return "Too chaotic";
    }
    count += diff;
  }
  return count;
}

// Solution 2
function minimumBribes(q) {
  let counter = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) >= 3) return "Too chaotic";
    for (let j = Math.max(0, q[i] - 2); j < i; j++) if (q[j] > q[i]) counter++;
  }
  return counter;
}

//let q = [2,1,5,3,4]; // 3
let q = [2, 5, 1, 3, 4]; // Too chaotic
console.log(minimumBribes(q));
