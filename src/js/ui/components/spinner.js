import templateSpinner from '../../../templates/spinner.hbs';

/**
 * Template the spinner with an optional message
 */
export const showSpinner = (spinnerMessage) => {
  const spinnerElement = document.getElementById('spinner');
  spinnerElement.innerHTML = templateSpinner({ spinnerText: spinnerMessage });
  spinnerElement.classList.add('show');
};

/**
 * Hide the spinner
 */
export const hideSpinner = () => {
  const spinnerElement = document.getElementById('spinner');
  spinnerElement.classList.remove('show');
  if (spinnerElement.querySelector('.spinner-text')) spinnerElement.querySelector('.spinner-text').innerHTML = '';
};
