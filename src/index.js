import "./style/style.scss";
import { initMap } from "./js/map/BuildMap";
import { plotTrains } from "./js/map/PlotTrains";

/**
 * ENTRY POINT
 * IIFE that initalizes Google Map refreshes
 * train markers every 5 seconds (5000ms)
 */
(function () {
  window.initMap = initMap;
  plotTrains();
  // const trainInterval = setInterval(function() {
  //     trainDataParse();
  // }, 5000);
})();
