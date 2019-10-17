// Solution 1
function birthdayCakeCandles(n, ar) {
  const max = Math.max(...ar);
  return ar.filter(x => x === max).length;
}

// Solution 2
function birthdayCakeCandles(ar) {
  ar.sort((a, b) => a - b);
  const max = ar[ar.length - 1];
  return ar.filter(candleHeight => candleHeight === max).length;
}

ar = [3, 2, 1, 3]; // 2
birthdayCakeCandles(ar);
