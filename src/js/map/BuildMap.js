const trainLinesKmz = "http://patpiwo.dev/projects/busy-city/map-data/cta_el_tracks.kmz";

let map;
let markers = [];

/**
 * Init map and add KML layers with CTA Routes & Train Stations
 * (called by callback in google maps script tag in index.html)
 */
export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.881832, lng: -87.623177 },
    zoom: 15,
    disableDefaultUI: true,
  });

  new google.maps.KmlLayer({
    url: trainLinesKmz,
    suppressInfoWindows: true,
    map: map
  });
}

/**
 * Add a marker to the map and assign it an ID,
 * we assign an ID so we can update it's position later
 * @param {string} type Type of marker (currenly only 'train')
 * @param {number} lat Latitudinal position
 * @param {number} long Longitudinal position
 * @param {number} heading Heading (in degrees)
 */
export let addMarker = (type, lat, long, heading) => {
  if (type === "train") {
    const marker = new google.maps.Marker({
      position: { lat: lat, lng: long },
      map: map
    });
    markers.push(marker);
  }
};

/**
 * Clears all markers off of the map
 */
export let deleteMarkers = () => {
  markers.forEach((marker) => marker.setMap(null));
  markers = [];
};
