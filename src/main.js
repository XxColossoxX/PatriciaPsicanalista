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

  // Animação de rolagem suave ao clicar nos links do header
  document.querySelectorAll('header a[href^="#"], #mobile-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

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

  // Carrossel de depoimentos
  const depoimentosTrack = document.getElementById('depoimentos-track');
  const depoimentosPrev = document.getElementById('depoimentos-prev');
  const depoimentosNext = document.getElementById('depoimentos-next');
  const depoimentosDots = document.getElementById('depoimentos-dots');

  if (depoimentosTrack && depoimentosDots) {
    const slides = depoimentosTrack.querySelectorAll('.depoimento-slide');
    const total = slides.length;
    let current = 0;
    let autoInterval;

    function goTo(index) {
      current = ((index % total) + total) % total;
      depoimentosTrack.style.transform = `translateX(-${current * 100}%)`;
      depoimentosDots.querySelectorAll('button').forEach((btn, i) => {
        btn.classList.toggle('bg-brand-500', i === current);
        btn.classList.toggle('bg-brand-200', i !== current);
      });
    }

    function next() {
      goTo(current + 1);
    }

    function prev() {
      goTo(current - 1);
    }

    // Criar dots
    for (let i = 0; i < total; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-3 h-3 rounded-full transition-colors ${i === 0 ? 'bg-brand-500' : 'bg-brand-200'}`;
      btn.setAttribute('aria-label', `Ir para depoimento ${i + 1}`);
      btn.addEventListener('click', () => goTo(i));
      depoimentosDots.appendChild(btn);
    }

    if (depoimentosPrev) depoimentosPrev.addEventListener('click', prev);
    if (depoimentosNext) depoimentosNext.addEventListener('click', next);

    // Auto-rotacionar a cada 6 segundos
    function startAuto() {
      autoInterval = setInterval(next, 6000);
    }
    function stopAuto() {
      clearInterval(autoInterval);
    }
    startAuto();
    depoimentosTrack.closest('section')?.addEventListener('mouseenter', stopAuto);
    depoimentosTrack.closest('section')?.addEventListener('mouseleave', startAuto);
  }

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
