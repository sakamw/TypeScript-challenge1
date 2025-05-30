// Sum of two numbers
var sum = function (a, b) {
    return a + b;
};
var result = sum(10, 20);
console.log(result);
// Convert Minutes to Seconds
var convert = function (minutes) {
    return minutes * 60;
};
var seconds = convert(5);
console.log(seconds);
// Perimeter of a Rectangle
var findPerimeter = function (length, width) {
    return 2 * (length + width);
};
var perimeter = findPerimeter(6, 7);
console.log(perimeter);
// Check Negative
var isNegative = function (num) {
    return num < 0;
};
var checkNegative = isNegative(-5);
console.log(checkNegative);
// Can Drive
var canDrive = function (name, age) {
    if (age >= 18) {
        console.log("".concat(name, " can drive."));
    }
    else {
        console.log("".concat(name, " cannot drive."));
    }
};
var driveStatus = canDrive("Jane", 22);
