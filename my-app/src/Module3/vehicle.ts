interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car1 implements Vehicle {
    // your code here
    constructor(
        public make: string,
        public model: string,
        public year: number
      ) {}
   
      start(): void {
        console.log(`${this.make} ${this.model} engine is starting...`);
      }

  }
  
  class Motorcycle implements Vehicle {
   
    constructor(
        public make: string,
        public model: string,
        public year: number
      ) {}
    start(): void{
        console.log (`${this.make} is revving up`)
    }
  }
  
  let myCar1 = new Car1("Toyota", "Corolla", 2020);
  let myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2019);
  
  myCar1.start(); // Toyota Corolla engine is starting...
  myMotorcycle.start(); // Harley-Davidson Street 750 is revving up!