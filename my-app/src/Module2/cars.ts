//type make, model, year, mileage,isElectric
type Car = {
    make: string;
    model: string;
    year: number;
    mileage: number;
    isElectric: boolean;
  };
  
  // Function to print car details
  function printCarDetails(car: Car): void {
    console.log(`${car.year} ${car.make} ${car.model}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Electric: ${car.isElectric ? "Yes" : "No"}`);
  }
  
  // Create a car object
  const myCar: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    mileage: 15000,
    isElectric: true
  };
  
  // Print the car details
  printCarDetails(myCar);