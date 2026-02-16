import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle with smooth animation
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
        // Trigger animation after removing hidden class
        requestAnimationFrame(() => {
          mobileMenu.style.transform = 'translateY(0)';
          mobileMenu.style.opacity = '1';
        });
      } else {
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.opacity = '0';
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        // Hide after animation completes
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    });
  }

  // Close mobile menu on link click with smooth animation
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.opacity = '0';
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Header Scroll Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('bg-white/90', 'shadow-md');
        header.classList.remove('bg-white/80', 'border-white/20');
      } else {
        header.classList.remove('bg-white/90', 'shadow-md');
        header.classList.add('bg-white/80', 'border-white/20');
      }
    }
  });

  // Contact Form WhatsApp Redirect
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;

      const phoneNumber = '5511993091455';
      const text = `Olá, meu nome é ${name}. ${message}`;
      const encodedText = encodeURIComponent(text);

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');
    });
  }
});
