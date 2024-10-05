// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a scroll effect to the header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add a simple animation to the hero content
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('#hero > div');
    if (heroContent) {
        heroContent.classList.add('animate-fadeInUp');
    }
});

// Form submission handling
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Mobile menu toggle
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const nav = document.querySelector('nav');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}