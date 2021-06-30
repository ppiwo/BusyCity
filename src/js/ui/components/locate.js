import { panMap } from '../../map/map';
import spinner from './spinner';
import navbar from '../components/navbar';
import modal from './modal';

/**
 * Initialize location feature
 */
const init = () => setEventListener();

/**
 * Set listener on location btn
 */
const setEventListener = () => {
  const locateBtn = document.querySelector('[data-locate]');

  locateBtn.addEventListener('click', () => { 
    navbar.closeAllDrawers();
    locateUser()
  });

};

/**
 * Ask user for their location
 */
const locateUser = () => {
  const options = { enableHighAccuracy: true };

  // Display spinner
  spinner.show('Fetching location please wait');
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
      long: { start: -87.56585, end: -87.928565 }
    };

  if (
    latitude >= chicagoBoundries.lat.start &&
    latitude <= chicagoBoundries.lat.end &&
    longitude <= chicagoBoundries.long.start &&
    longitude >= chicagoBoundries.long.end
  ) {
    spinner.hide();
    positionMap({ lat: latitude, lng: longitude });
  }
  else {
    // User not in not within Chicago boundries
    spinner.hide();
    // Show modal 'This feature only works for users within the city of Chicago'
    modal({header: 'Boundary Error', body: 'Location detected as out of Chicago bounds. <br> <br> This feature is currently only avaliable for users located in Chicago.'});
  }
};

/**
 * User's browser doesn't support geolocation or user denied permission
 */
const locationError = () => {
  spinner.hide();
  // Show location error modal
  modal({header: 'Location Error', body: 'We were unable to obtain your location. <br> Please make sure location services are enabled.'});
};

/**
 * Position the center of the map to the user's location
 * @param {*} latitude
 * @param {*} longitude
 */
const positionMap = (latitude, longitude) => {
  panMap(latitude, longitude);
};

export default {
  init: init
}
