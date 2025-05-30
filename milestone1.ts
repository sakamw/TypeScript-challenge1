// Sum of two numbers
const sum = (a: number, b: number): number => {
  return a + b;
};
const result = sum(10, 20);
console.log(result);

// Convert Minutes to Seconds
const convert = (minutes: number): number => {
  return minutes * 60;
};
const seconds = convert(5);
console.log(seconds);

// Perimeter of a Rectangle
const findPerimeter = (length: number, width: number): number => {
  return 2 * (length + width);
};
const perimeter = findPerimeter(6, 7);
console.log(perimeter);

// Check Negative
const isNegative = (num: number): boolean => {
  return num < 0;
};
const checkNegative = isNegative(-5);
console.log(checkNegative);

// Can Drive
const canDrive = (name: string, age: number): void => {
  if (age >= 18) {
    console.log(`${name} can drive.`);
  } else {
    console.log(`${name} cannot drive.`);
  }
};
const driveStatus = canDrive("Jane", 22);
