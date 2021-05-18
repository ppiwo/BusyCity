import { trainMarkers } from '../../map/build-map';

/**
 * Initialize Train Filters
 */
export const initTrainFilters = () => {
  addListeners();
};

/**
 * Add Event Listeners on the train filters inside settings pane
 */
const addListeners = () => {
  const filterToggles = document.querySelectorAll('[toggle-line]');
  filterToggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      const toggledColor = e.target.getAttribute('toggle-line'),
        checkBoxValue = e.target.checked;
      toggleTrainLine(toggledColor, checkBoxValue);
    });
  });
};

/**
 * Toggle the visibility of train markers
 * @param {String} lineColor
 * @param {Boolean} checkBoxValue
 */
const toggleTrainLine = (lineColor, checkBoxValue) => {
  for (const key in trainMarkers) {
    if (key.includes(lineColor + '_')) {
      const currentMarker = trainMarkers[key];
      currentMarker.setVisible(checkBoxValue);
    }
  }
};
