"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    var fn1 = funcs.shift();
    return function piper() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return funcs.reduce(function (accumulator, nextFunc) {
            return nextFunc(accumulator);
        }, fn1.apply(void 0, args));
    };
};
exports.sum = function (d) {
    return d.reduce(function (left, right) { return left + right; }, 0);
};
