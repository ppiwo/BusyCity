import { map, trainMarkers } from './map';
import infoWindow from './info-window';

/**
 * Delegate marker actions, if a marker exists, we update it, if not we add it
 * @param {Object} markerInfo Contains info for each marker and it's infoWindow
 */
export let addMarker = (markerInfo) => {  
  if (markerInfo.type === 'train') markerExists(markerInfo) ? updateTrainMarker(markerInfo) : addTrainMarker(markerInfo);
};

/**
 * Check if there is an existing marker for this train already on the map
 * @param {Object} markerInfo Marker we are looking for
 * @returns {Number}
 */
const markerExists = (markerInfo) => {
  // Only trains are supported at this moment
  if (!markerInfo.trainID) return;
  const { trainID, lineColor } = markerInfo;
  if (trainMarkers[lineColor + '_' + trainID]) return true;
  else return false;
};

/**
 *  Build a custom marker Icon based on markerInfo
 *  @param {String} lineColorHex
 * @returns {Object}
 */
const buildIcon = (lineColorHex, markerSize = 8) => {
  const marker = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: markerSize,
    strokeColor: 'white',
    strokeWeight: 1,
    fillColor: lineColorHex,
    fillOpacity: 1.0
  };
  return marker;
};

/**
 * Add a marker to the map and assign it an ID,
 * we assign an ID so we can update it's position later
 * @param {Object} markerInfo
 */
const addTrainMarker = (markerInfo) => {
  const { lat, lon, lineColorHex, lineColor, trainID } = markerInfo;
  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lon },
    icon: buildIcon(lineColorHex),
    size: new google.maps.Size(18, 15),
    map: map
  });

  trainMarkers[lineColor + '_' + trainID] = marker;

  // Add listener for train marker popup on click
  marker.addListener('click', () => {
    infoWindow.close();
    infoWindow.open(marker, markerInfo);
  });
};

/**
 * Called when a marker exists, we reuse the same marker and just update it's info & position
 * @param {Object} markerInfo
 */
const updateTrainMarker = (markerInfo) => {
  const { trainID, lat, lon, lineColor } = markerInfo,
    markerNewPosition = new google.maps.LatLng(lat, lon);

  trainMarkers[lineColor + '_' + trainID].setPosition(markerNewPosition);
  // See if current marker's infowindow is open & update
  infoWindow.update(markerInfo);
};

export default {
  add: addMarker
};
