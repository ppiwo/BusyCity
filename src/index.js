import "./style/style.scss";
import { getAllTrains } from './js/Api';
import { initMap } from './js/map/BuildMap';

/**
 * Set Google maps init method to window 
 * so it can be accessed by Google maps callback in index.html
 */
window.initMap = initMap;

//get train data from CTA API
let trainData = getAllTrains();

//when trainData is ready and map is loaded, hide spinner and reveal map
