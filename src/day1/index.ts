import { pipe, sum } from '../utils';
import { getInputFromFile, rocketEquation } from './utils';

const recursiveRocketEquation = (n: number): number => {
    let t = rocketEquation(n);
    if (t <= 0) {
        return 0;
    }
    return t + recursiveRocketEquation(t);
}

const mapRocketEquation = (d: number[]): number[] => {
    return d.map(rocketEquation)
}
const mapRecursiveRocketEquation = (d: number[]): number[] => {
    return d.map(recursiveRocketEquation)
}
const part1 = pipe(
    getInputFromFile,
    mapRocketEquation,
    sum,
);

const part2 = pipe(
    getInputFromFile,
    mapRecursiveRocketEquation,
    sum,
);

export default function(): string {
    const part1Result = part1('resources/day1/input.txt');
    const part2Result = part2('resources/day1/input.txt');

    return `\
    Part 1 result: ${part1Result}
    Part 2 result: ${part2Result}
    `
}

