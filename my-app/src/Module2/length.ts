function getTotalLength(input: string | string[]): number {
    if (typeof input === "string") {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.reduce((totalLength, str) => totalLength + str.length, 0);
    } else {
        throw new Error("Invalid input type. Expected string or string array.");
    }
}
console.log(getTotalLength("Hello")); // 5
console.log(getTotalLength(["Hello", "World"])); // 10