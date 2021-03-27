import "./style/style.scss";
import { initMap, deleteMarkers } from "./js/map/BuildMap";
import { plotTrains } from "./js/map/PlotTrains";

/**
 * ENTRY POINT
 * IIFE that initalizes Google Map refreshes
 * train markers every 5 seconds (5000ms)
 */
(async function () {
  window.initMap = initMap;
  plotTrains();
  setInterval(function () {
    deleteMarkers();
    plotTrains();
  }, 10000);
})();
