import modal from '../../../templates/modal.hbs';

/**
 * Show the modal with the desired message
 */
const showmodal = (message) => {
    const modal = templatemodal(message);
    modalCloseEvent(modal);
}

/**
 * Add event listener for modal close
 */
const modalCloseEvent = (modal) => {
    
}

/**
 * Clear modal contents and hide the modal
 */
const hidemodal = () => {

}


/**
 * Call handlebars to template the modal
 */
 const templatemodal = (message) => {
     const modalElement = document.getElementById('modal');
     modalElement.innerHTML = modal(message);
     return modalElement;
 }


export default showmodal;