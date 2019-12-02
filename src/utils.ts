export const pipe = (...funcs: any[]): any => {
    let fn1 = funcs.shift()
    return function piper(...args: any[]) {
        return funcs.reduce((accumulator, nextFunc) => {
            return nextFunc(accumulator)
        }, fn1(...args))
    }
}

export const sum = (d: number[]): number => {
    return d.reduce((left, right) => left + right, 0);
}