function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// factorial(0) // 1
// factorial(25) // 1.5511210043330986e+25
factorial(50); // 3.0414093201713376e+64
