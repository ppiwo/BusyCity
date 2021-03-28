import "./style/style.scss";
import './style/bottom-bar.scss';
import { initMap, deleteMarkers } from "./js/map/BuildMap";
import { plotTrains } from "./js/map/PlotTrains";
import { initUI } from "./js/ui/UIController";

/**
 * ENTRY POINT
 * IIFE that initalizes Google Map refreshes
 * train markers every 5 seconds (5000ms)
 */
(async function () {
  window.initMap = initMap;
  //plotTrains();
  initUI();
  // setInterval(function () {
  //   deleteMarkers();
  //   plotTrains();
  // }, 10000);
})();
