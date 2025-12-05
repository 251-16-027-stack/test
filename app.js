/*
 * app.js
 * This file is connected to index.html using the <script> tag.
 */

// We wait until the entire HTML document is fully loaded before running the script.
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the HTML elements we want to interact with
    const button = document.getElementById('actionButton');
    const message = document.getElementById('message');

    // 2. Define the action to take when the button is clicked
    function handleButtonClick() {
        // Change the text content of the message paragraph (DOM manipulation)
        message.textContent = 'JavaScript executed successfully! The DOM has been updated.';

        // Change the style of the message paragraph (CSS manipulation via JS)
        message.style.color = '#007bff';
        
        // Disable the button after the first click
        button.disabled = true;
        button.textContent = 'Action Complete!';
    }

    // 3. Attach the action to the button's 'click' event
    // This connects the JavaScript logic to the HTML element
    if (button) {
        button.addEventListener('click', handleButtonClick);
    } else {
        console.error("Button element not found in the HTML.");
    }
});