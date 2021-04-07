import 'normalize.css';
import "./style/style.scss";
import "./style/info-windows.scss";
import { initMap } from "./js/map/BuildMap";
import { plotTrains } from "./js/map/PlotTrains";

/**
 * ENTRY POINT
 * Initalizes Google Map, 
 * refreshes train markers every 5 seconds (5000ms)
 */

window.initMap = initMap;
plotTrains();
setInterval(function () {
  plotTrains();
}, 10000);

