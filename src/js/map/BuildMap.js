import trainInfoTemplate from "../../templates/trainInfo.hbs";
const trainLinesKmz = "http://patpiwo.dev/projects/busy-city/map-data/cta_el_tracks.kmz";

let map;
let trainMarkers = [];

/**
 * Init map and add KML layers with CTA Routes & Train Stations
 * (called by callback in google maps script tag in index.html)
 */
export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "4520b10c36453300",
    center: { lat: 41.881832, lng: -87.623177 },
    zoom: 15,
    disableDefaultUI: false
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
 * @param {Object} markerInfo Contains info for each marker and it's infoWindow
 */
export let addMarker = (markerInfo) => {
  if (markerInfo.type === "train") {
    //if (!markerIsUnique(markerInfo.trainID)) //deleteMarkers(marker)
    const marker = new google.maps.Marker({
      position: { lat: markerInfo.lat, lng: markerInfo.lon },
      map: map
    });

    trainMarkers.push({ trainID: markerInfo.trainID, marker: marker });
    console.log(trainMarkers);

    // Add listener for train marker popup on click
    marker.addListener("click", () => {
      buildInfoWindow(map, marker, markerInfo);
    });
  }
};

/**
 * Clears all markers off of the map
 */
export let deleteMarkers = () => {
  markers.forEach((marker) => marker.setMap(null));
  markers = [];
};

/**
 * Parses markerInfo into HTML template using Handlebars
 * REFERENCE: https://developers.google.com/maps/documentation/javascript/infowindows
 * @param {Object} markerInfo - An object containing data for each train's InfoWindow
 * @returns {Object} HTML content to be displayed in infoWindow
 */
export let trainInfo = (markerInfo) => {
  console.log(markerInfo);
  const trainInfoContainer = document.getElementById("custom-info-window");
  console.log(markerInfo);
  trainInfoContainer.innerHTML = trainInfoTemplate(markerInfo);
  trainInfoContainer.classList = "";
  trainInfoContainer.classList.add(`info-window__${markerInfo.lineColor}`);

  return trainInfoContainer;
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
  map.zoom = 13;
  map.panTo(marker.getPosition());
  infoWindow.open(map, marker);

  return infoWindow;
};

/**
 * Check if there are existing markers for this train already on the map
 * @param {*} trainID Train ID we are checking for duplicates on
 */
const markerIsUnique = (trainID) => {
  let duplicateMarkers = trainMarkers.filter((train) => train.trainID === trainID).length > 0;
  if (duplicateMarkers) return false;
  else return true;
};
