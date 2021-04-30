import { trainMarkers, buildMarker } from "../../map/build-map";

export const initMarkerResize = () => {
    inputHandler();
}

const inputHandler = () => {
    const markerSizeInput = document.getElementById('markerSize');

    markerSizeInput.addEventListener('change', (e) => changeMarkerSize(e.target.value));
}

const changeMarkerSize = (newMarkerSize) => {
//5 8 11
    for (const marker in trainMarkers) {
        const markerObj = trainMarkers[marker];
        const lineColor = marker.split('_')[0];
        markerObj.setIcon(buildMarker(lineColor))
      //buildMarker(markerSizeInput);
    }
}