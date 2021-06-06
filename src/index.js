import "./style/Main.scss";
import initUI from "./js/ui/ui";
import { initMap } from "./js/map/build-map";
import { plotTrains } from "./js/map/plot-trains";
import modal from './js/ui/components/modal';

/**
 * ENTRY POINT
 * Initalizes Google Map,
 * refreshes train markers every 5 seconds (5000ms)
 */

// Assign to window namespace - this is called by callback param in embeded Google map
window.initMap = initMap;
initUI();
modal({header: 'Location Error', body: 'We were unable to obtain your location. <br> Please make sure location services are enabled.'});
//plotTrains();
setInterval(function () {
  //plotTrains();
}, 10000);
