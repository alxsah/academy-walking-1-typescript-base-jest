export function romanNumberConvertor(number: number): string {
    const romanMap: Map<number, string> = new Map();
    romanMap.set(4, 'IV');
    romanMap.set(5, 'V');

    return romanMap.get(number) || 'I'.repeat(number);
}
