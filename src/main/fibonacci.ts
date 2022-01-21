export const returnFibonacci = (position: number): number => {
  if (position === 0 || position === 1) return position;
  return returnFibonacci(position - 2) + returnFibonacci(position - 1);
}

export const fibonacciIterative = (position: number): number => {
  if (position === 0) return 0;
  let nMinus2 = 0, nMinus1 = 1, newValue;
  for (let i=0; i<position-1; i++) {
    newValue = nMinus2 + nMinus1;
    nMinus2 = nMinus1;
    nMinus1 = newValue;
  }
  return nMinus1;
}
