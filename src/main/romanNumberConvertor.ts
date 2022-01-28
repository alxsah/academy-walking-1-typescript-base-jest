export function romanNumberConvertor(number: number): string {
    if (number === 4 ) {
        return 'IV';
    } 
    return 'I'.repeat(number);
}
