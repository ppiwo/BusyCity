//imports
import trainInfoTemplate from '../../templates/trainInfo.hbs';
import { map } from './build-map';

//constants
let infoWindowOpen = false,
  infoWindow,
  previousZoom;

/**
 * Update infoWindow if necessary
 * @param {Object} markerInfo
 */  
let updateInfoWindow = (markerInfo) => {
 if (infoWindowOpen && infoWindowOpen.trainID === markerInfo.trainID) {
  const infoWindowElement = document.querySelector('#custom-info-window'),
  markerPosition = infoWindowOpen.marker.getPosition();
  infoWindowElement.innerHTML = trainInfoTemplate(markerInfo);
  map.panTo(markerPosition);
 };
}

const closeInfoWindow = () => {

}



// core logic
/**
 * Builds and opens a infoWindow object on the map
 * @param {Object} marker  Marker which this infoWindow belongs to
 * @param {Object} markerInfo Data to be displayed inside of the infoWindow
 * @returns {Object} infoWindow object
 */
 const buildInfoWindow = (marker, markerInfo) => {
  infoWindow = new google.maps.InfoWindow({
    content: template(markerInfo)
  });

  open(marker, markerInfo.trainID);
};

/**
 * Open the infoWindow, save the previous zoom level and zoom in
 * @param {Object} marker  Marker which this infoWindow belongs to
 * @param {Number} trainID The train's ID
 */
const open = (marker, trainID) => {
  previousZoom = map.getZoom();
  map.zoom = 16;
  map.panTo(marker.getPosition());
  infoWindow.open(map, marker);
  infoWindowOpen = { infoWindow, marker, trainID: trainID };
};

/**
 * 
 * @returns InfoWindowOpen object { infoWindow, marker, trainID: trainID }
 */
const getOpenedWindow = () => infoWindowOpen;

/**
 * Parses markerInfo into HTML template using Handlebars
 * REFERENCE: https://developers.google.com/maps/documentation/javascript/infowindows
 * @param {Object} markerInfo - An object containing data for each train's InfoWindow
 * @returns {Object} HTML content to be displayed in infoWindow
 */
 let template = (markerInfo) => {
  const infoWindowElement = document.createElement('section');

  infoWindowElement.id = 'custom-info-window';
  infoWindowElement.innerHTML = trainInfoTemplate(markerInfo);
  infoWindowElement.classList.add(`info-window__${markerInfo.lineColor}`);
  
  return infoWindowElement;
};


export default {
  build: buildInfoWindow,
  getOpened: getOpenedWindow,
  update: updateInfoWindow
}