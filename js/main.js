// Scroll reveal animation for dashboard sections.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${index * 0.08}s`;
  revealObserver.observe(element);
});

// Prevent placeholder module buttons from submitting or refreshing the page.
document.querySelectorAll('.module-card .primary-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
  });
});
