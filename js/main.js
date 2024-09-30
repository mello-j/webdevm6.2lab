window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const form = document.getElementById('option');
    form.addEventListener('submit', submitForm);
}

/**
 * This function is called when the form is submitted.
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

export { getAlertMessage };