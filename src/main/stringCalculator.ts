
export const returnSumOfString = (inputString: string): number => {
    if (inputString === "") return 0;
    return inputString
      .split(",")
      .map(value => Number.parseInt(value))
      .reduce((prev: number, current: number) => prev + current);
}
