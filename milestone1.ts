// Challenge 1: Sum of two numbers
const sum = (a: number, b: number): number => {
  return a + b;
};
const result = sum(10, 20);
console.log(result);

// Challenge 2: Convert Minutes to Seconds
const convert = (minutes: number): number => {
  return minutes * 60;
};
const seconds = convert(5);
console.log(seconds);

// Challenge 3: Perimeter of a Rectangle
const findPerimeter = (length: number, width: number): number => {
  return 2 * (length + width);
};
const perimeter = findPerimeter(6, 7);
console.log(perimeter);

// Challenge 4: Check Negative
const isNegative = (num: number): boolean => {
  return num < 0;
};
const checkNegative = isNegative(-5);
console.log(checkNegative);

// Challenge 5: Can Drive
const canDrive = (name: string, age: number): void => {
  if (age >= 18) {
    console.log(`${name} can drive.`);
  } else {
    console.log(`${name} cannot drive.`);
  }
};
const driveStatus = canDrive("Jane", 22);

//Challenge 6: Largest Number
const findLargest = (a: number, b: number, c: number): number => {
  const largest = Math.max(a, b, c);
  return largest;
};
const largestNumber = findLargest(10, 20, 15);
console.log(largestNumber);

// Challenge 7: BMI Calculator
const calculateBMI = (weight: number, height: number): number => {
  const BMI = weight / (height * height);

  if (BMI < 18.5) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Underwight`);
  } else if (BMI >= 18.5 && BMI < 24.9) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Normal weight`);
  } else if (BMI >= 25 && BMI < 29.9) {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Overweight`);
  } else {
    console.log(`Your BMI is ${BMI.toFixed(1)} - Obese`);
  }
  return BMI;
};
const bmi = calculateBMI(68, 1.75);

// Challenge 8: Greet Based on Time
const greetUser = (name: string, hour: number): void => {
  const hour24 = hour % 24;

  if (hour24 >= 5 && hour24 <= 11) {
    console.log(`Good morning, ${name}!`);
  } else if (hour24 > 11 && hour24 <= 17) {
    console.log(`Good afternoon, ${name}!`);
  } else if (hour24 > 17 && hour24 <= 21) {
    console.log(`Good evening, ${name}!`);
  } else {
    console.log(`Good night, ${name}!`);
  }
};
const greet = greetUser("Alice", 5);

// Challenge 9: FizzBuzz
const fizzBuzzCheck = (number: number): void => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number.toString());
  }
};
const fizzBuzzResult = fizzBuzzCheck(7);

// Challenge 10: Perimeter 2
type shape = "s" | "c";
const perimeter2 = (letter: shape, num: number): number | string => {
  if (letter === "s") return num * 4;
  if (letter === "c") return num * 6.28;
  return "Invalid Input";
};
console.log(perimeter2("s", 7));
