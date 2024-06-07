document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbar = document.getElementById('navbar');
    var closeIcon = document.getElementById('close');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
        closeIcon.style.display = 'initial';
    });

    closeIcon.addEventListener('click', function() {
        navbar.classList.remove('show');
        closeIcon.style.display = 'none';
    });
});