import templateSpinner from '../../../templates/spinner.hbs';

/**
 * Template the spinner with an optional message
 */
const show = (spinnerMessage) => {
  const spinnerElement = document.getElementById('spinner');

  spinnerElement.innerHTML = templateSpinner({ spinnerText: spinnerMessage });
  spinnerElement.classList.add('show');
};

/**
 * Hide the spinner
 */
const hide = () => {
  const spinnerElement = document.getElementById('spinner');

  spinnerElement.classList.remove('show');
  if (spinnerElement.querySelector('.spinner-text')) spinnerElement.querySelector('.spinner-text').innerHTML = '';
};

export default {
  show: show,
  hide: hide
}
