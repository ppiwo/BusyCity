import trainInfoTemplate from "../../templates/trainInfo.hbs";
const trainLinesKmz = "http://patpiwo.dev/projects/busy-city/map-data/cta_el_tracks.kmz";

export let map;
export let trainMarkers = {};
let infoWindowOpen = undefined;

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

  google.maps.event.addListener(map, "click", function (event) {
    if (infoWindowOpen) {
      infoWindowOpen.infoWindow.content.style.display = "none";
    }
  });
}

/**
 * Add a marker to the map and assign it an ID,
 * we assign an ID so we can update it's position later
 * IF the marker exists, we call updateMarker to update it's location
 * @param {Object} markerInfo Contains info for each marker and it's infoWindow
 */
export let addMarker = (markerInfo) => {
  if (markerInfo.type === "train") {
    let markerExists = getTrain(markerInfo);
    // If marker is not found, add it
    if (!markerExists) {
      const marker = new google.maps.Marker({
        position: { lat: markerInfo.lat, lng: markerInfo.lon },
        map: map
      });

      trainMarkers[markerInfo.trainID] = marker;
      // Add listener for train marker popup on click
      marker.addListener("click", () => {
        buildInfoWindow(map, marker, markerInfo);
      });
      // Marker already exists, let's update it
    } else {
      updateMarker(markerInfo);
    }
  }
};

/**
 * Check if there is an existing marker for this train already on the map
 * @param {Object} markerInfo Marker we are looking for
 */
const getTrain = (markerInfo) => {
  const trainID = markerInfo.trainID;
  if (trainMarkers[trainID]) return true;
  else return false;
};

/**
 * Update a marker's position on the map
 * @param {*} markerInfo New markerInfo
 */
let updateMarker = (markerInfo) => {
  const trainID = markerInfo.trainID;
  trainMarkers[trainID].setPosition(new google.maps.LatLng(markerInfo.lat, markerInfo.lon));
};

/**
 * Parses markerInfo into HTML template using Handlebars
 * REFERENCE: https://developers.google.com/maps/documentation/javascript/infowindows
 * @param {Object} markerInfo - An object containing data for each train's InfoWindow
 * @returns {Object} HTML content to be displayed in infoWindow
 */
export let trainInfo = (markerInfo) => {
  const trainInfoContainer = document.getElementById("custom-info-window");
  trainInfoContainer.innerHTML = trainInfoTemplate(markerInfo);
  trainInfoContainer.classList = "";
  trainInfoContainer.classList.add(`info-window__${markerInfo.lineColor}`);
  // Remove display none if it's there
  trainInfoContainer.style.display = "";

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
  map.zoom = 16;
  map.panTo(marker.getPosition());
  infoWindow.open(map, marker);
  infoWindowOpen = { infoWindow, marker };

  return infoWindow;
};

/**
 * Map markers have been updated - update everything else
 */
export const mapTick = () => {
  // TODO refresh infoWindow
  //TODO move functionalities to their own methods
  if (infoWindowOpen) {
    const markerPosition = infoWindowOpen.marker.getPosition();
    infoWindowOpen.infoWindow.map.panTo(markerPosition);
  }
};