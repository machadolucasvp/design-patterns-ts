export default interface Sofa {
  hasLegs(): boolean;
  sitOn(): void;
}

export class VictorianSofa implements Sofa{
  hasLegs(): boolean{
    return true;
  }

  sitOn(): void {
    console.log('Resting in a victorian sofa')
  }
}

export class ModernSofa implements Sofa{
  hasLegs(): boolean{
    return true;
  }

  sitOn(): void {
    console.log('Resting in a modern sofa')
  }
}
