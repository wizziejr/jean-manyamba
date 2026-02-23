// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (menuToggle.classList.contains('is-active')) {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            }
        });
    });


    // --- Contact Form Handling ---
    const contactForm = document.getElementById('portfolio-contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault();

            // Get values from inputs (in a real app, you'd send these to a backend)
            const nameInput = document.getElementById('name').value;

            // Simulate sending data
            formFeedback.style.color = "green";
            formFeedback.textContent = `Thanks, ${nameInput}! Your message has been sent successfully. (Demo only)`;

            // Clear the form inputs
            contactForm.reset();

            // Remove the success message after 5 seconds
            setTimeout(() => {
                formFeedback.textContent = '';
            }, 5000);
        });
    }

    // --- Smooth Scroll for Safari/Older Browsers (Optional Polyfill-like behavior) ---
    // Note: CSS scroll-behavior: smooth handles most modern browsers, but this is a fallback.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});