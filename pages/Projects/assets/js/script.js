document.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.getElementById('main-img');

    mainImg.addEventListener('mouseover', function() {
        setTimeout(function() {
            mainImg.src = 'assets/img/450590030_393644869917791_4972001812372923820_n.jpg';
        }, 4); 
    });

    mainImg.addEventListener('mouseout', function() {
        mainImg.src = 'assets/img/441930533_975816594262388_8791712594973653961_n.jpg';
    });
});
