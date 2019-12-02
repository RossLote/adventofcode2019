"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var utils_2 = require("./utils");
var recursiveRocketEquation = function (n) {
    var t = utils_2.rocketEquation(n);
    if (t <= 0) {
        return 0;
    }
    return t + recursiveRocketEquation(t);
};
var mapRocketEquation = function (d) {
    return d.map(utils_2.rocketEquation);
};
var mapRecursiveRocketEquation = function (d) {
    return d.map(recursiveRocketEquation);
};
var part1 = utils_1.pipe(utils_2.getInputFromFile, mapRocketEquation, utils_1.sum);
var part2 = utils_1.pipe(utils_2.getInputFromFile, mapRecursiveRocketEquation, utils_1.sum);
function default_1() {
    var part1Result = part1('resources/day1/input.txt');
    var part2Result = part2('resources/day1/input.txt');
    return "    Part 1 result: " + part1Result + "\n    Part 2 result: " + part2Result + "\n    ";
}
exports.default = default_1;
