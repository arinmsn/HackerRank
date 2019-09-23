function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
    while (i + 1 !== arr[i]) {
      let temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
      swap += 1;
    }
  }
  return swap;
}

// arr = [4 ,3 ,1, 2]
arr = [1, 3, 5, 2, 4, 6, 7];
minimumSwaps(arr); //3
