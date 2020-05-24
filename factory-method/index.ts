import Logistics ,{ RoadLogistics, SeaLogistics } from "./src/Logistics";
import Transport from "./src/Transport";

(function main() {
  const roadLogistic: Logistics = new RoadLogistics();
  const seaLogistic: Logistics = new SeaLogistics();

  roadLogistic.planDelivery();
  seaLogistic.planDelivery();
})();
