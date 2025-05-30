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
//Largest Number
var findLargest = function (a, b, c) {
    var largest = Math.max(a, b, c);
    return largest;
};
var largestNumber = findLargest(10, 20, 15);
console.log(largestNumber);
// BMI Calculator
var calculateBMI = function (weight, height) {
    var BMI = weight / (height * height);
    if (BMI < 18.5) {
        console.log("Your BMI is ".concat(BMI.toFixed(1), " - Underwight"));
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        console.log("Your BMI is ".concat(BMI.toFixed(1), " - Normal weight"));
    }
    else if (BMI >= 25 && BMI < 29.9) {
        console.log("Your BMI is ".concat(BMI.toFixed(1), " - Overweight"));
    }
    else {
        console.log("Your BMI is ".concat(BMI.toFixed(1), " - Obese"));
    }
    return BMI;
};
var bmi = calculateBMI(68, 1.75);
//Greet Based on Time
var greetUser = function (name, hour) {
    var hour24 = hour % 24;
    if (hour24 >= 5 && hour24 <= 11) {
        console.log("Good morning, ".concat(name, "!"));
    }
    else if (hour24 > 11 && hour24 <= 17) {
        console.log("Good afternoon, ".concat(name, "!"));
    }
    else if (hour24 > 17 && hour24 <= 21) {
        console.log("Good evening, ".concat(name, "!"));
    }
    else {
        console.log("Good night, ".concat(name, "!"));
    }
};
var greet = greetUser("Alice", 5);
