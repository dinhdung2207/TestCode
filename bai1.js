// Find fibonacci
const calculateFibonanci = (n) => {
  if (n <= 1) {
    return n;
  }

  return calculateFibonanci(n - 1) + calculateFibonanci(n - 2);
};

console.log(calculateFibonanci(0))
console.log(calculateFibonanci(1))
console.log(calculateFibonanci(10))
