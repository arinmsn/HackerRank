function miniMaxSum(arr) {
  const maxArr = [...arr].sort((a, b) => a - b);
  const minArr = [...arr].sort((a, b) => b - a);
  const max = maxArr.slice(arr.length - 4).reduce((acc, no) => (acc += no), 0);
  const min = minArr.slice(arr.length - 4).reduce((acc, no) => (acc += no), 0);
  console.log(`${min} ${max}`);
}
arr = [1, 3, 5, 7, 9];
// We expect to get '16 24'
// minimum sum 1 + 3 + 5 + 7 = 16
// maximum sum 3 + 5 + 7+ 9 = 24
