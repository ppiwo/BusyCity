import { trainMarkers } from "../../map/map";

/**
 * Initialize train marker resize feature
 */
export const initMarkerResize = () => {
  setEventListener();
};

/**
 * Event handler
 */
const setEventListener = () => {
  const markerSizeInput = document.getElementById("markerSize");
  markerSizeInput.addEventListener("change", (e) => changeMarkerSize(parseInt(e.target.value)));
};

/**
 * Changes train marker sizes to the user's input
 * @param {Number} newMarkerSize
 */
const changeMarkerSize = (newMarkerSize) => {
  for (const marker in trainMarkers) {
    const markerObj = trainMarkers[marker];
    let markerIcon = markerObj.getIcon();
    markerIcon.scale = newMarkerSize;
    markerObj.setIcon(markerIcon);
  }
};
