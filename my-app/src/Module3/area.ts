abstract class Shape {
    constructor(protected name: string) {}
  
    abstract area(): number;
  
    displayArea(): void {
      console.log(`The area of this ${this.name} is ${this.area()}`);
    }
  }
  
  class Circle extends Shape {
    constructor(private radius: number) {
      super("circle");
    }
  
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super("rectangle");
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  let circle = new Circle(5);
  let rectangle = new Rectangle(4, 6);
  
  circle.displayArea(); // The area of this circle is approximately 78.54
  rectangle.displayArea(); // The area of this rectangle is 24