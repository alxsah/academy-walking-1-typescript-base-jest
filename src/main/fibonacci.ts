export const returnFibonacci = (position: number): number => {
  if (position === 0 || position === 1) return position;
  return returnFibonacci(position - 2) + returnFibonacci(position - 1);
}
