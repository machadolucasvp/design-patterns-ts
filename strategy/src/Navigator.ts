import RouteStrategy from './RouteStrategy';

export default class Navigator {
  routeStrategy: RouteStrategy

  setRouteStrategy(strategy: RouteStrategy) {
    this.routeStrategy = strategy;
  }

  buildRoute(initialPoint: number, finalPoint: number) {
    console.log('Setup environment to build a route...')
    this.routeStrategy?.buildRoute(initialPoint, finalPoint);
  }
}