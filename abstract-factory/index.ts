import FurnitureFactory, {
  VictorianFurnitureFactory,
  ModernFurnitureFactory,
} from "./src/FurinitureFactory";
import {
  Chair,
  Sofa,
  CoffeTable,
} from "./src/furniture/index";

(function main() {
  const chairs: Chair[] = [];
  const coffeTables: CoffeTable[] = [];
  const sofas: Sofa[] = [];

  function makeCatalog(factory: FurnitureFactory){
    chairs.push(factory.createChair());
    coffeTables.push(factory.createCoffeTable());
    sofas.push(factory.createSofa());
  }

  makeCatalog(new ModernFurnitureFactory());
  makeCatalog(new VictorianFurnitureFactory());

  chairs.map(chair => chair.sitOn());
  coffeTables.map(coffeTable => coffeTable.restHandsIn());
  sofas.map(sofa => sofa.sitOn());
})();
