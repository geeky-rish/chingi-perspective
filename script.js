document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });

    // Prevent closing when clicking inside the menu
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('show');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });

    // Prevent closing when clicking inside the menu
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close mobile menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add any page-specific JavaScript here
});