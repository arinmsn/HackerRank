function plusMinus(arr) {
  let positives = 0,
    negatives = 0,
    zeros = 0;
  const n = arr.length || 0;

  if (n > 0 && n <= 100) {
    arr.map((elem, key) => {
      if (elem > 0) {
        positives++;
      } else if (elem < 0) {
        negatives++;
      } else {
        zeros++;
      }

      return elem;
    });
  }

  console.log(positives / n || 0);
  console.log(negatives / n || 0);
  console.log(zeros / n || 0);
}
