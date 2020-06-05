import RouteStrategy,
{
  RoadStrategy,
  PublicTransportStrategy,
  WalkingStrategy
} from './src/RouteStrategy';
import Navigator from './src/Navigator';

(function main() {
  const navigator = new Navigator();

  const handleRouteTypeButtonClick = (strategy: RouteStrategy) => {
    navigator.setRouteStrategy(strategy)
  };

  const handleConfirmRouteButtonClick = (initialPoint: number, finalPoint: number) => {
    navigator.buildRoute(initialPoint, finalPoint)
  }

  handleRouteTypeButtonClick(new RoadStrategy());
  handleConfirmRouteButtonClick(23131, -3434)

  handleRouteTypeButtonClick(new WalkingStrategy());
  handleConfirmRouteButtonClick(123, 321);

  handleRouteTypeButtonClick(new PublicTransportStrategy());
  handleConfirmRouteButtonClick(-10, -50);
})()
