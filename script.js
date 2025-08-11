// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, observerOptions);

// Observe menu items for animation
document.querySelectorAll('.menu-item').forEach((item) => {
  observer.observe(item);
});

// Add hover scale effect on buttons and menu items
document.querySelectorAll('.btn, .menu-item').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.02)';
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
  });
});
