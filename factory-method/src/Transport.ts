export default interface Transport {
  deliver(): void;
}

export class Truck implements Transport {
  deliver(): void {
    console.log("Delivering the package with a truck");
  }
}

export class Ship implements Transport {
  deliver(): void {
    console.log("Delivering the package with a ship");
  }
}
