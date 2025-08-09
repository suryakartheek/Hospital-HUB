// Function for a generic fade-in animation on scroll
const faders = document.querySelectorAll('.doctor-card, .ambulance-content, .map-placeholder, .review-card, .footer-column');
const appearOptions = {
    threshold: 0.5,
};
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.style.opacity = 0; // Start with elements invisible
    fader.style.transform = 'translateY(20px)';
    appearOnScroll.observe(fader);
});

// Ambulance button functionality
document.getElementById('ambulance-btn').addEventListener('click', () => {
    alert('Instant Ambulance Service initiated! A driver is being located.');
    // In a full application, this would trigger an API call to a backend service.
});

// Animation for popular search categories
const quickLinks = document.querySelectorAll('.quick-link-btn');
quickLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert(`You clicked on: ${link.dataset.specialty}. Redirecting to search results...`);
        // Here you would implement logic to filter search results and navigate.
    });
});
