document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.querySelector('.resume-btn');
    resumeBtn.addEventListener('mouseover', () => {
        resumeBtn.style.transform = 'scale(1.1)';
    });
    resumeBtn.addEventListener('mouseout', () => {
        resumeBtn.style.transform = 'scale(1)';
    });
});
