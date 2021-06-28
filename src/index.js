import "./style/Main.scss";
import initUI from "./js/ui/ui";
import buildMap from "./js/map/map";
import trains from "./js/map/trains";

/**
 * ENTRY POINT
 * Initalizes Google Map,
 * refreshes train markers every 5 seconds (5000ms)
 */

// Assign to window namespace - this is called by callback param in embeded Google map
window.initMap = buildMap.init;
initUI();
setInterval(function () {
  trains.plot();
}, 10000);
