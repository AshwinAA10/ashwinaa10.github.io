// Initialize AOS (Animation on Scroll)
AOS.init({
    once: true, // Animations run only once
    easing: 'ease-out',
    offset: 100,
    delay: 0,
    duration: 1000
});

// Typed.js Animation for "Full-Stack Developer" Text
const typedText = new Typed('.typing-text', {
    strings: ['Full-Stack Developer', 'Web Designer', 'Problem Solver'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
});

// Hamburger Menu Toggle for Mobile Responsiveness
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.navigation');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links and Buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });

            // Disable AOS animations for the target section after scrolling
            setTimeout(() => {
                AOS.refreshHard(); // Refresh AOS to prevent re-triggering animations
            }, 1000); // Match the duration of the scroll animation
        }
    });
});