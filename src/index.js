import 'normalize.css';
import "./style/style.scss";
import "./style/info-windows.scss";
import "./style/navbar.scss";
import './js/ui/ui'
import { initMap } from "./js/map/build-map";
import { plotTrains } from "./js/map/plot-trains";

/**
 * ENTRY POINT
 * Initalizes Google Map, 
 * refreshes train markers every 5 seconds (5000ms)
 */

window.initMap = initMap;
plotTrains();
setInterval(function () {
  plotTrains();
}, 5000);

