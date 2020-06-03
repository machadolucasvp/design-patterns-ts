export default interface Subscriber {
  identifier: number;
  update(): void;
}

export class ConcreteSubscriber implements Subscriber {
  identifier: number;

  constructor(identifier: number) {
    this.identifier = identifier;
  }

  update(): void {
    console.log(`Yay! Update needed for subscriber with id ${this.identifier}, `
      + 'doing some business logic...');
  }
}



