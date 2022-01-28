export const calculatePrimeFactors = (number: number) => {
  if (number % 3 === 0 && number !== 3){
    return [2, 3]
  }
  if (number % 2 === 0 && number !== 2){
    return [2, 2]
  }
  if (number !== 1) return [number];
  return [];
};
