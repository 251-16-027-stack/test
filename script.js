// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Targets the user's provided class names for connection
    // Menu Toggle Button: <button class="menu-toggle">
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Main Navigation Container: <nav class="container navbar">
    const navContainer = document.querySelector('.navbar'); 
    
    // Check if both elements are found before attaching listeners
    if (menuToggle && navContainer) {
        // Initialize ARIA state for accessibility
        menuToggle.setAttribute('aria-expanded', 'false');

        menuToggle.addEventListener('click', () => {
            // 1. Toggle the CSS state class on the main container (navbar)
            navContainer.classList.toggle('c-nav--is-open');

            // 2. Update the ARIA expanded attribute for accessibility
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isExpanded));
        });
    }

    // ===========================================
    // NEW: Scroll-to-Top Button Logic
    // ===========================================
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrollThreshold = 300; // Pixels to scroll before button appears

    if (scrollToTopBtn) {
        // Function to toggle button visibility
        const toggleVisibility = () => {
            if (window.scrollY > scrollThreshold) {
                scrollToTopBtn.classList.add('is-visible');
            } else {
                scrollToTopBtn.classList.remove('is-visible');
            }
        };

        // Attach the visibility toggle to the scroll event
        window.addEventListener('scroll', toggleVisibility);
        
        // Attach the click handler for smooth scrolling
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling!
            });
        });
        
        // Initial check on page load (in case the page loads scrolled down)
        toggleVisibility(); 
    }
});
