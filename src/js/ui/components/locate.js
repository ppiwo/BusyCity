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
  const locateBtn = document.querySelector("[data-locate]");
  locateBtn.addEventListener("click", () => locateUser());
};

/**
 * Ask user for their location
 */
const locateUser = () => {
  navigator.geolocation.getCurrentPosition(checkBoundries, locationError);
};

/**
 * Check if user's location is within city limits
 * @param {Object} e 
 */
const checkBoundries = (location) => {
  // check if within city limits
  //42.073238, -87.928565 (UPPER LEFT)
  //41.781158, -87.565850 (LOWER RIGHT)
};

/**
 * User's browser doesn't support geolocation or user denied permission
 */
const locationError = () => {
  console.log("location error");
};

// display error
// position map (& zoom)
