// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to John Doe's Portfolio!");

    const downloadCVButton = document.querySelector('.download-cv');
    downloadCVButton.addEventListener('click', () => {
        alert('Download CV button clicked!');
    });

    // Scroll arrow visibility
    const scrollArrow = document.querySelector('.scroll-arrow');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        const heroBottom = heroSection.offsetHeight;
        const scrollTop = window.scrollY;

        if (scrollTop > heroBottom) {
            scrollArrow.classList.add('visible');
        } else {
            scrollArrow.classList.remove('visible');
        }
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Update icon
        themeToggle.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});