import Logistics ,{ RoadLogistics, SeaLogistics } from "./src/Logistics";

(function main() {
  const roadLogistic: Logistics = new RoadLogistics();
  const seaLogistic: Logistics = new SeaLogistics();

  roadLogistic.planDelivery();
  seaLogistic.planDelivery();
})();
