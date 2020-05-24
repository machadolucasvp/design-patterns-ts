export default interface Chair {
  hasLegs(): boolean;
  sitOn(): void;
}

export class VictorianChair implements Chair{
  hasLegs(): boolean{
    return true;
  }

  sitOn(): void {
    console.log('Siting in a victorian chair')
  }
}

export class ModernChair implements Chair{
  hasLegs(): boolean{
    return false;
  }

  sitOn(): void {
    console.log('Siting in a modern chair')
  }
}
