// Intersection Observer setup
const sections = document.querySelectorAll('.section');
const currentSection = document.getElementById('currentSection');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title').textContent;
            currentSection.textContent = title;
        }
    });
}, {
    threshold: 0.8
});

sections.forEach(section => observer.observe(section));

// Active nav link
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});