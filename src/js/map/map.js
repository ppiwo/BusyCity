import { initTrainFilters } from '../ui/components/filter-trains';
import navbar from '../ui/components/navbar';
import infoWindow from './info-window';
import trains from './trains';

const trainLinesKmz = 'https://www.dropbox.com/s/shu56zohfegtxuf/cta_el_tracks.kmz?dl=1';

export let map;
export let trainMarkers = {};

/**
 * Init map and add KML layers with CTA Routes & Train Stations
 * (called by callback in google maps script tag in index.html)
 */
function init() {
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
    infoWindow.close();
    navbar.closeAllDrawers();
  });
  
  initTrainFilters();
  trains.plot();
}

/**
 * Pans map to the specified lat/long value
 * @param {Number} latitude
 * @param {Number} longitude
 */
export const panMap = (position) => {
  map.panTo(position);
  map.setZoom(16);
};

export default {
  init: init
}
