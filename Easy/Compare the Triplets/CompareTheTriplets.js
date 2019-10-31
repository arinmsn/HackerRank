/*
// Fastest
function compareTriplets(a0, a1, a2, b0, b1, b2){
  let totalA = 0;
  let totalB = 0;

  function checker(a,b){
    if (a > b){
      totalA++;
    } else if (a < b){
      totalB++;
    }
  }
  checker(a0, b0);
  checker(a1, b1);
  checker(a2, b2);

  return [totalA, totalB];
};

compareTriplets(1, 5, 10, 3, 5, 10);
*/

// Slowest
function compareTriplets(a, b) {
  let score = [];
  let aTotal = 0;
  let bTotal = 0;

  for (let i in a) {
    if (a[i] > b[i]) {
      aTotal++;
    } else if (a[i] < b[i]) {
      bTotal++;
    }
  }
  score.push(aTotal, bTotal);
  return score;
}

a = [1, 5, 10];
b = [3, 5, 10];

compareTriplets(a, b);

// Faster
function compareTriplets(a, b) {
  const score = [0, 0];
  for (let i = 0; i < 3; i++) {
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : (score[1] = score[1]);
  }
  return score;
}

a = [1, 5, 10];
b = [3, 5, 10];
compareTriplets(a, b);
