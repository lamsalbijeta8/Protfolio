document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Aayush's Portfolio!");

    // Download CV Button Functionality
    const downloadCVButton = document.querySelector('.download-cv');
    downloadCVButton.addEventListener('click', () => {
        console.log('Download CV process initiated.');
    });

    // Contact Info Button Functionality (UPDATED FOR SMOOTH SCROLL)
    const contactInfoButton = document.querySelector('.contact-info');
    const contactSection = document.querySelector('#contact'); // Make sure this is still defined
    
    contactInfoButton.addEventListener('click', () => {
        // Scroll smoothly to the #contact section
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error("Contact section (#contact) not found.");
        }
    });

    // Arrow visibility logic
    const scrollUpArrow = document.querySelector('.scroll-up-arrow');
    // Note: contactSection is now defined globally for the DOMContentLoaded scope

    const checkArrowVisibility = () => {
        // Ensure the section exists before calculating its position
        if (!contactSection) return; 
        
        const contactSectionTop = contactSection.offsetTop;
        const scrollBottom = window.scrollY + window.innerHeight;

        // Show/hide scroll-up arrow
        if (scrollBottom >= contactSectionTop) {
            scrollUpArrow.classList.add('visible');
        } else {
            scrollUpArrow.classList.remove('visible');
        }
    };
    
    // Initial call and event listener for the arrow logic
    window.addEventListener('scroll', checkArrowVisibility);
    checkArrowVisibility();

    // Dark Mode Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme'); 
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        themeToggle.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});