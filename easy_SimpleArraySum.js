/*
Simple Array Sum
Given an array of integers, can you find the sum of its elements?
Input Format
The first line contains an integer, , denoting the size of the array.
The second line contains space-separated integers representing the array's elements.
Output Format
Print the sum of the array's elements as a single integer.
Sample Input
6
1 2 3 4 10 11
Sample Output
31
Explanation
We print the sum of the array's elements, which is: 1+2+3+4+10+11=31.
*/
function simpleArraySum(ar) {
  const reducer = (sum, currentValue) => sum + currentValue;
  return ar.reduce(reducer);
}
ar = [1, 2, 3, 4, 5];
simpleArraySum(ar);

// Solution 2
/*
function simpleArraySum(ar) {
  var total = 0;
    for (i = 0; i < ar.length; i++){
        total += i;
    }
  return total;
}
*/
