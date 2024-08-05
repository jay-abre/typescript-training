// Union type
let id: number | string;
id = 101; // OK
id = "202"; // Also OK

// Function using union type
function printId1(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId1(101);
printId1("202");

// Type narrowing with union types
function getLength(obj: string | string[]) {
  if (typeof obj === "string") {
    return obj.length; // TypeScript knows obj is a string here
  } else {
    return obj.length; // TypeScript knows obj is an array here
  }
}

console.log(getLength("Hello")); // 5
console.log(getLength(["Hello", "World"])); // 2