import { trainMarkers, buildMarker } from "../../map/build-map";

/**
 * Initialize train marker resize feature
 */
export const initMarkerResize = () => {
  inputHandler();
};

/**
 * Event handler
 */
const inputHandler = () => {
  const markerSizeInput = document.getElementById("markerSize");
  markerSizeInput.addEventListener("change", (e) => changeMarkerSize(parseInt(e.target.value)));
};

/**
 * Changes train marker sizes to the user's input
 * @param {Integer} newMarkerSize
 */
const changeMarkerSize = (newMarkerSize) => {
  for (const marker in trainMarkers) {
    const markerObj = trainMarkers[marker];
    let markerIcon = markerObj.getIcon();
    markerIcon.scale = newMarkerSize;
    markerObj.setIcon(test);
  }
};
