
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            navbar.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });
});