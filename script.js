document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navWrap = document.querySelector('.nav-wrap');
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
  const open = navWrap.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navWrap.classList.remove('open'));
});

// scroll-spy: highlight active section in nav
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = (id) => {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
