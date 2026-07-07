(function() {
  // Theme toggle
  function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const theme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.classList.add(theme);
    updateThemeButton();
    
    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.remove(current);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton();
      });
    }
  }

  function updateThemeButton() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const isDark = document.documentElement.classList.contains('dark');
    toggle.innerHTML = isDark 
      ? '☀️' 
      : '🌙';
  }

  // Smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe metric fills for animation
  document.querySelectorAll('.metric').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });

  // Initialize theme on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();