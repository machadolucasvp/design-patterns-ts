
export default interface RouteStrategy {
  buildRoute(initialPoint: number, finalPoint: number): void
}

export class RoadStrategy implements RouteStrategy {
  buildRoute(initialPoint: number, finalPoint: number) {
    console.log(`Connecting point ${initialPoint} to ${finalPoint} by road`)
  }
}

export class PublicTransportStrategy implements RouteStrategy {
  buildRoute(initialPoint: number, finalPoint: number) {
    console.log(`Connecting point ${initialPoint} to ${finalPoint} by public transport`)
  }
}

export class WalkingStrategy implements RouteStrategy {
  buildRoute(initialPoint: number, finalPoint: number) {
    console.log(`Connecting point ${initialPoint} to ${finalPoint} by walking route`)
  }
}


