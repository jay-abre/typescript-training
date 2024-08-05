// main.ts
// Import specific exports from a module
import { add, subtract, PI, Circle } from './math';

console.log(add(5, 3));  // 8
console.log(subtract(10, 4));  // 6
console.log(PI);  // 3.14159

const circle = new Circle(5);
console.log(circle.area());  // ~78.54