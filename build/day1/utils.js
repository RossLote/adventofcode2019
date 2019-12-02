"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
exports.getInputFromFile = function (filename) {
    var data = fs_1.readFileSync(filename).toString().trim().split('\n');
    return data.map(function (n) { return parseInt(n); });
};
exports.rocketEquation = function (n) {
    return Math.floor(n / 3) - 2;
};
