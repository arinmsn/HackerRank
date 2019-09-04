/*

-loop through all the elements of the matrix

-if the sum of the indexes (i + j) is equal 
to the length of the matrix minus one: i + j === n — 1

-add that number to the diag2 -> representing 
the total sum for the second diagonal

    Getting rid of second inner loop can improve algorithm
    from O(n * n) to O(n)

    To better understand why [i][n — i — 1] is used
    Let's take a look at the matrix

    (0, 0)  (0, 1)  (0, 2)
    (1, 0)  (1, 1)  (1, 2)
    (2, 0)  (2, 1)  (2, 2)

    For the second diagonal, we will get:

    n = 3, i = 0 => we get the element (0, 3 — 0 — 1) = (0, 2)
    n = 3, i = 1 => we get the element (1, 3 — 1 — 1) = (1, 1)
    n = 3, i = 1 => we get the element (2, 3 — 2 — 1) = (2, 0)
*/

/*  1st Solution
function calculateDiagonals(arr){
    var n = arr.length;
    var diag1 = 0;
    var diag2 = 0;
    for(var i=0; i<n; i++){
        for(var j=0; j<n; j++){
            // an element from the main diagonal
            if(i === j) { 
                diag1 += arr[i][j];
            }
            // an element from the counterdiagonal
            if(i + j === n - 1){
                diag2 += arr[i][j];
            }
        }
    }
    return Math.abs(diag1 - diag2);
}
*/

// 2nd Solution - More performant

function calculateDiagonals(arr) {
  var n = arr.length;
  var diag1 = 0;
  var diag2 = 0;
  for (var i = 0; i < n; i++) {
    diag1 += arr[i][i];
    diag2 += arr[i][n - i - 1];
  }
  return Math.abs(diag1 - diag2);
}
