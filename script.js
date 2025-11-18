// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to John Doe's Portfolio!");


    const downloadCVButton = document.querySelector('.download-cv');
    downloadCVButton.addEventListener('click', () => {
        alert('Download CV button clicked!');

    });
});