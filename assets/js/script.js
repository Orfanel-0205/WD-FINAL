document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById('menu');
    const nbar = document.querySelector('.nbar');
    menu.addEventListener('click', function() {
        nbar.classList.toggle('active');
    });

    const moon = document.getElementById('moon');
    moon.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
