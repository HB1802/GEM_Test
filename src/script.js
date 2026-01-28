document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.cta-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Redirecting to order page...');
    });
  });

  // Smooth scroll behavior for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
