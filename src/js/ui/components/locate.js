import { panMap } from '../../map/build-map';

/**
 * Initialize location feature
 */
export const initLocate = () => {
  setEventListener();
};

/**
 * Set listener on location btn
 */
const setEventListener = () => {
  const locateBtn = document.querySelector('[data-locate]');
  locateBtn.addEventListener('click', () => locateUser());
};

/**
 * Ask user for their location
 */
const locateUser = () => {
  const options = { enableHighAccuracy: true };
  navigator.geolocation.getCurrentPosition(checkBoundries, locationError, options);
};

/**
 * Check if user's location is within city limits
 * @param {Object} e
 */
const checkBoundries = (location) => {
  const { latitude, longitude } = location.coords,
    chicagoBoundries = {
      lat: { start: 41.781158, end: 42.073238 },
      long: { start: -87.56585, end: -87.928565 },
    };

  if (latitude >= chicagoBoundries.lat.start && latitude <= chicagoBoundries.lat.end && longitude <= chicagoBoundries.long.start && longitude >= chicagoBoundries.long.end) {
    positionMap({ lat: latitude, lng: longitude });
  }
};

/**
 * User's browser doesn't support geolocation or user denied permission
 */
const locationError = () => {
  console.log('location error');
};

/**
 * Position the center of the map to the user's location
 * @param {*} latitude 
 * @param {*} longitude 
 */
const positionMap = (latitude, longitude) => {
  panMap(latitude, longitude)
}
