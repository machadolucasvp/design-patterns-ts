import Prototype from './Prototype';

export default class PrototypeRegistry {
  prototypes: Map<string, Prototype>;

  constructor() {
    this.prototypes = new Map();
  }

  addPrototype(prototype: Prototype) {
    this.prototypes.set(prototype.getIdentifier(), prototype);
  }

  addPrototypes(prototypes: Prototype[]) {
    prototypes.map(prototype => this.addPrototype(prototype));
  }

  getByIdentifier(identifier: string) {
    return this.prototypes.get(identifier);
  }
}