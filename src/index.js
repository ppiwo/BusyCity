import "./style/style.scss";
import { getAllTrains } from './js/Api';
import { initMap } from './js/GoogleMaps';

//get train data
let trainData = getAllTrains();

initMap();

//