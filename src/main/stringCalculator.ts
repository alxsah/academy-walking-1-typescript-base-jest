
export const returnSumOfString = (inputString: string): number => {
    if (inputString === "") return 0;
    const stringArray = inputString.split(",");
    let count:number = 0;
    stringArray.forEach(element => {
        count += Number.parseInt(element)
    })  
    return count;
}
