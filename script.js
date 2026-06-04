/* ============================================================
   AK PHARMA — script.js
   Minimal JavaScript for UI interactions only
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav scroll behavior ─────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ── Mobile hamburger menu ───────────────────────────────── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close when a mobile link is clicked
    mobileMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Active nav link highlight ───────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Product filter ──────────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        productCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
          } else {
            if (card.dataset.category === filter) {
              card.style.display = '';
              setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'scale(0.97)';
              setTimeout(() => { card.style.display = 'none'; }, 220);
            }
          }
        });
      });
    });
  }

  /* ── Contact form – client-side only ────────────────────── */
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Message Sent';
      btn.disabled = true;
      btn.style.background = '#1a9c54';
      btn.style.borderColor = '#1a9c54';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        contactForm.reset();
      }, 3500);
    });
  }

  /* ── Application form – client-side only ────────────────── */
  const appForm = document.querySelector('#applicationForm');
  if (appForm) {
    appForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Application Submitted';
      btn.disabled = true;
      btn.style.background = '#1a9c54';
      btn.style.borderColor = '#1a9c54';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.borderColor = '';
        appForm.reset();
      }, 3500);
    });
  }

  /* ── Smooth fade-in on scroll ────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('revealed'));
  }

})();