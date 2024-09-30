window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 * Adds an event listener to the form.
 */
function loaded() {
    const form = document.getElementById('options');
    form.addEventListener('submit', submitForm);
}

/**
 * This function is called when the form is submitted.
 * It prevents the default form submission and gets the selected option.
 * @param {Event} event the submit event
 */
function submitForm(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
            
    if (selectedOption) {
        const alertMessage = getAlertMessage(selectedOption.value);
        alert(alertMessage);
    } 
}

/**
 * This function returns a message based on the selected option
 * @param {*} option 
 * @returns 
 */

function getAlertMessage(option) {
    switch(option) {
        case '1':
            return 'You selected option 1';
        case '2':
            return 'You selected option 2';
        case '3':
            return 'You selected option 3';    
        }
}

