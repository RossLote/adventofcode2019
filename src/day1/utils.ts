import { readFileSync } from 'fs';

export const getInputFromFile = (filename: string): number[] => {
    let data = readFileSync(filename).toString().trim().split('\n');
    return data.map((n: string) => parseInt(n))
}

export const rocketEquation = (n: number): number => {
    return Math.floor(n / 3) - 2;
}