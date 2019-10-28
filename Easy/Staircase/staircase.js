function staircase(n) {
  const line = Array(n - 1).fill(" ");
  for (let i = n - 1; i >= 0; i--) {
    line[i] = "#";
    console.log(line.join(""));
  }
}
