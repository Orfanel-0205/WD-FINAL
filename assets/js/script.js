

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    const footerPosition = footer.getBoundingClientRect().top;

    function fadeInFooter() {
        if (footerPosition <= window.innerHeight) {
            footer.classList.add('in-view');
            window.removeEventListener('scroll', fadeInFooter);
        }
    }

    window.addEventListener('scroll', fadeInFooter);
});
