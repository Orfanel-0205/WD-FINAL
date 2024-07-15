document.addEventListener("DOMContentLoaded", function() {
    const subnav = document.querySelector('.subnav');
    const subnavContent = document.querySelector('.subnav-content');

    subnav.addEventListener('mouseenter', function() {
        subnavContent.style.display = 'block';
    });

    subnav.addEventListener('mouseleave', function() {
        subnavContent.style.display = 'none';
    });
});
