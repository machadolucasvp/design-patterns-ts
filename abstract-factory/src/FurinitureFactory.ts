import {
  Chair,
  CoffeTable,
  Sofa,
  VictorianChair,
  VictorianCoffeTable,
  VictorianSofa,
  ModernChair,
  ModernCoffeTable,
  ModernSofa,
} from "./furniture/index";

export default interface FurnitureFactory {
  createChair(): Chair;
  createCoffeTable(): CoffeTable;
  createSofa(): Sofa;
}

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createCoffeTable(): CoffeTable {
    return new VictorianCoffeTable();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createCoffeTable(): CoffeTable {
    return new ModernCoffeTable();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }
}
