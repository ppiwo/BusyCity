import trainInfoTemplate from '../../templates/trainInfo.hbs';
import { initTrainFilters } from '../ui/components/filter-trains';
import { plotTrains } from './plot-trains';

const trainLinesKmz = 'http://patpiwo.dev/projects/busy-city/map-data/cta_el_tracks.kmz';

export let map;
export let trainMarkers = {};
let infoWindowOpen = undefined;

/**
 * Init map and add KML layers with CTA Routes & Train Stations
 * (called by callback in google maps script tag in index.html)
 */
export function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    mapId: '4520b10c36453300',
    center: { lat: 41.881832, lng: -87.623177 },
    zoom: 15,
    disableDefaultUI: false,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false
  });

  new google.maps.KmlLayer({
    url: trainLinesKmz,
    suppressInfoWindows: true,
    map: map
  });

  // When any part of the map except the marker or infowindow is clicked
  map.addListener('click', () => {
    if (infoWindowOpen) {
      infoWindowOpen.infoWindow.close();
      infoWindowOpen = undefined;
    }
  });
  initTrainFilters();
  plotTrains();
}

/**
 * Add a marker to the map and assign it an ID,
 * we assign an ID so we can update it's position later
 * IF the marker exists, we call updateMarker to update it's location
 * @param {Object} markerInfo Contains info for each marker and it's infoWindow
 */
export let addMarker = (markerInfo) => {
  if (markerInfo.type === 'train') {
    let markerExists = getTrain(markerInfo);

    // If marker is not found, add it
    if (!markerExists) {
      const marker = new google.maps.Marker({
        position: { lat: markerInfo.lat, lng: markerInfo.lon },
        icon: buildMarker(markerInfo.lineColor),
        size: new google.maps.Size(18, 15),
        map: map
      });

      trainMarkers[markerInfo.lineColor + '_' + markerInfo.trainID] = marker;

      // Add listener for train marker popup on click
      marker.addListener('click', () => {
        if (infoWindowOpen) infoWindowOpen.infoWindow.close();
        buildInfoWindow(map, marker, markerInfo);
      });

      // Marker already exists, let's update it
    } else {
      updateMarker(markerInfo);
    }
  }

  // If the current trainData is an opened windowInfo, we need to update infoWindow
  if (infoWindowOpen && currentInfoWindow(markerInfo) === true) updateInfoWindow(markerInfo);
};

/**
 *  Build a custom marker for each train
 */
export const buildMarker = (lineColorString, markerSize) => {
  if (lineColor) {
    const marker = {
      path: google.maps.SymbolPath.CIRCLE,
      //rotation: 180,
      scale: markerSize || 8,
      strokeColor: 'white',
      strokeWeight: 1,
      fillColor: lineColor(lineColorString),
      fillOpacity: 1.0
    };
    return marker;
  }
};

/**
 * Returns the hex value for the official CTA colors for each line
 * @param {String} lineColorString 
 * @returns 
 */
const lineColor = (lineColorString) => {
  let lineColorValue;
  if (lineColorString) {
    switch (lineColorString) {
      case 'red':
        lineColorValue = '#C60C30';
        break;
      case 'blue':
        lineColorValue = '#00a1de';
        break;
      case 'brn':
        lineColorValue = '#62361b';
        break;
      case 'g':
        lineColorValue = '#009b3a';
        break;
      case 'org':
        lineColorValue = '#f9461c';
        break;
      case 'p':
        lineColorValue = '#522398';
        break;
      case 'pink':
        lineColorValue = '#e27ea6';
        break;
      case 'y':
        lineColorValue = '#f9e300';
        break;
      case 'grey':
        lineColorValue = '#565a5c';
        break;
    }
    return lineColorValue;
  }
};

/**
 * Check if there is an existing marker for this train already on the map
 * @param {Object} markerInfo Marker we are looking for
 */
const getTrain = (markerInfo) => {
  const trainID = markerInfo.trainID;
  if (trainMarkers[markerInfo.lineColor + '_' + markerInfo.trainID]) return true;
  else return false;
};

/**
 * Update a marker's position on the map
 * @param {*} markerInfo New markerInfo
 */
let updateMarker = (markerInfo) => {
  const trainID = markerInfo.trainID,
    markerNewPosition = new google.maps.LatLng(markerInfo.lat, markerInfo.lon);

  trainMarkers[markerInfo.lineColor + '_' + markerInfo.trainID].setPosition(markerNewPosition);
};

/**
 * Parses markerInfo into HTML template using Handlebars
 * REFERENCE: https://developers.google.com/maps/documentation/javascript/infowindows
 * @param {Object} markerInfo - An object containing data for each train's InfoWindow
 * @returns {Object} HTML content to be displayed in infoWindow
 */
export let trainInfo = (markerInfo) => {
  const infoWindowElement = document.createElement('section');

  infoWindowElement.id = 'custom-info-window';
  infoWindowElement.innerHTML = trainInfoTemplate(markerInfo);
  infoWindowElement.classList.add(`info-window__${markerInfo.lineColor}`);

  return infoWindowElement;
};

/**
 * Builds and opens a infoWindow on the map
 * @param {Object} map Map on which infoWindow will be place
 * @param {Object} marker  Marker which this infoWindow belongs to
 * @param {Object} markerInfo Data to be displayed inside of the infoWindow
 * @returns {Object} infoWindow object
 */
const buildInfoWindow = (map, marker, markerInfo) => {
  const infoWindow = new google.maps.InfoWindow({
    content: trainInfo(markerInfo)
  });

  map.zoom = 16;
  map.panTo(marker.getPosition());
  infoWindow.open(map, marker);
  infoWindowOpen = { infoWindow, marker, trainID: markerInfo.trainID };

  return infoWindow;
};

/**
 * Update the infoWindow object
 * @param {Object} markerInfo
 */
const updateInfoWindow = (markerInfo) => {
  const infoWindowElement = document.querySelector('#custom-info-window'),
    markerPosition = infoWindowOpen.marker.getPosition();

  infoWindowElement.innerHTML = trainInfoTemplate(markerInfo);
  map.panTo(markerPosition);
};

/**
 * Current marker being updated has it's infoWindow open
 * @param {Object} markerInfo
 * @returns {Boolean}
 */
const currentInfoWindow = (markerInfo) => {
  if (infoWindowOpen.trainID === markerInfo.trainID) return true;
};

/**
 * Pans map to the specified lat/long value
 * @param {Number} latitude
 * @param {Number} longitude
 */
export const panMap = (position) => {
  map.panTo(position);
  map.setZoom(16);
};
