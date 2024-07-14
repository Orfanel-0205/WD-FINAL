document.addEventListener('DOMContentLoaded', function () {
    const photoFrames = document.querySelectorAll('.photo-frame');
    
    photoFrames.forEach(frame => {
        frame.addEventListener('click', function () {
            this.classList.toggle('zoom');
        });
    });
});
