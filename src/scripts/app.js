// This file contains the JavaScript code for the web page. It may include functions for interactivity, event handling, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.textContent = 'Button clicked! Welcome to my web page!';
    });
});