import toast from '../../../templates/toast.hbs';

/**
 * Show the toast with the desired message
 */
const showToast = (message) => {
    templateToast(message);
    modalCloseEvent();
}

/**
 * Add event listener for modal close
 */
const modalCloseEvent = () => {

}

/**
 * Clear toast contents and hide the toast
 */
const hideToast = () => {

}


/**
 * Call handlebars to template the toast
 */
 const templateToast = (message) => (document.getElementById('toast').innerHTML = toast(message));


export default showToast;