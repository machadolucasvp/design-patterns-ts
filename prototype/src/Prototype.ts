export default abstract class Prototype {
  readonly identifier;

  getIdentifier(): string {
    return this.identifier;
  }

  constructor() {
    this.identifier = this.constructor.name;
  }

  abstract clone(): Prototype;

}

export class Button extends Prototype {

  private color: string;

  constructor(color: string) {
    super();
    this.color = color;
  }

  clone(): this {
    console.log(`Cloning a ${this.identifier}`)
    return Object.assign({}, this);
  }

  getColor(): string {
    return this.color;
  }
}

export class Input extends Prototype {

  private value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  clone(): this {
    console.log(`Cloning a ${this.identifier}`)
    return Object.assign({}, this);
  }

  getValue(): string {
    return this.value;
  }
}