function arrayManipulation(n, queries) {
  // If arry has 10 elements, we will have 11 elements
  const arr = Array(n + 1);
  let maxValue = 0;
  queries.forEach(([startRange, endRange, value]) => {
    // 'start' is our + operation; 'end' is our - operation
    arr[startRange] = arr[startRange] || { start: 0, end: 0 };
    arr[endRange] = arr[endRange] || { start: 0, end: 0 };

    arr[startRange].start += value;
    arr[endRange].end += value;
  });

  let currentNum = 0;
  arr.forEach(cell => {
    if (cell) {
      currentNum += cell.start;
      if (currentNum > maxValue) {
        maxValue = currentNum;
      }
      currentNum -= cell.end;
    }
  });

  return maxValue;
}
