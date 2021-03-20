import "./style/style.scss";
import { getAllTrains } from './js/Api';
import { initMap } from './js/map/BuildMap';

//get train data
let trainData = getAllTrains();

initMap();

//