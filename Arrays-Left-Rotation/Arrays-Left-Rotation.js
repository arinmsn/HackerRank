function rotLeft(a, d) {
  a = a.concat(a.splice(0, d));
  // Rotating the array to right
  // a = a.concat(a.splice(0, a.length - d));
  return a;
}
