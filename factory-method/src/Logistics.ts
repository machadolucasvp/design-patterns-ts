import Transport, { Truck, Ship } from "./Transport";

export default abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): void {
    const transport: Transport = this.createTransport();
    
    transport.deliver();
  }
}

export class RoadLogistics extends Logistics {

  createTransport(): Transport {
    return new Truck();
  }
}

export class SeaLogistics extends Logistics {

  createTransport(): Transport {
    return new Ship();
  }
}
