import modal from '../../../templates/modal.hbs';

/**
 * Show the modal with the desired message
 */
const showmodal = (message) => {
    templatemodal(message);
    modalCloseEvent();
}

/**
 * Add event listener for modal close
 */
const modalCloseEvent = () => {

}

/**
 * Clear modal contents and hide the modal
 */
const hidemodal = () => {

}


/**
 * Call handlebars to template the modal
 */
 const templatemodal = (message) => (document.getElementById('modal').innerHTML = modal(message));


export default showmodal;