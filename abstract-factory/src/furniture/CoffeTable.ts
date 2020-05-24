export default interface CoffeTable {
  hasLegs(): boolean;
  restHandsIn(): void;
}

export class VictorianCoffeTable implements CoffeTable{
  hasLegs(): boolean{
    return true;
  }

  restHandsIn(): void {
    console.log('Resting hands in a victorian coffe table')
  }
}

export class ModernCoffeTable implements CoffeTable{
  hasLegs(): boolean{
    return true;
  }

  restHandsIn(): void {
    console.log('Restings hands in a modern coffe table')
  }
}
