// Challenge 1: Sum of two numbers
var sum = function (a, b) {
    return a + b;
};
var result = sum(10, 20);
console.log(result);
// Challenge 2: Convert Minutes to Seconds
var convert = function (minutes) {
    return minutes * 60;
};
var seconds = convert(5);
console.log(seconds);
// Challenge 3: Perimeter of a Rectangle
var findPerimeter = function (length, width) {
    return 2 * (length + width);
};
var perimeter = findPerimeter(6, 7);
console.log(perimeter);
// Challenge 4: Check Negative
var isNegative = function (num) {
    return num < 0;
};
var checkNegative = isNegative(-5);
console.log(checkNegative);
// Challenge 5: Can Drive
var canDrive = function (name, age) {
    if (age >= 18) {
        console.log("".concat(name, " can drive."));
    }
    else {
        console.log("".concat(name, " cannot drive."));
    }
};
var driveStatus = canDrive("Jane", 22);
//Challenge 6: Largest Number
var findLargest = function (a, b, c) {
    var largest = Math.max(a, b, c);
    return largest;
};
var largestNumber = findLargest(10, 20, 15);
console.log(largestNumber);
// Challenge 7: BMI Calculator
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
// Challenge 8: Greet Based on Time
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
// Challenge 9: FizzBuzz
var fizzBuzzCheck = function (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 === 0) {
        console.log("Fizz");
    }
    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(number.toString());
    }
};
var fizzBuzzResult = fizzBuzzCheck(7);
var Perimeter2 = function (letter, num) {
    if (letter === "s")
        return num * 4;
    if (letter === "c")
        return num * 6.28;
    return "Invalid Input";
};
console.log(Perimeter2("s", 7));
// Challenge 11: Sum of Even Numbers
function sumOfEvenNumbers(n) {
    if (n % 2 === 0)
        return (n += n);
    return n;
}
console.log(sumOfEvenNumbers(6));
// Challenge 12: Multiply by Itself
function powerUp(num, times) {
    var power = 1;
    for (var i = 0; i < times; i++) {
        power *= num;
    }
    return power;
}
console.log(powerUp(2, 3));
// Challenge 13: Factorial Calculator
var Factorial = function (n) {
    if (n < 0)
        return "Inalid Input";
    var result = 1;
    for (var i = 1; i <= n; i++)
        n *= i;
    return result;
};
console.log(Factorial(0));
