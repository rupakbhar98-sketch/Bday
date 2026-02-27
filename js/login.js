// UI-only auth forms: suppress submit reload and provide subtle interaction feedback.
document.querySelectorAll('.auth-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('.primary-btn');
    const originalText = button.textContent;

    button.textContent = 'Processing...';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 900);
  });
});
