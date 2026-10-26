/* ============================================================
   AK PHARMA — script.js
   Global component loader & UI interactions
   Works both on Web Servers (http/https) and Local Files (file://)
   ============================================================ */

(function () {
  'use strict';

  // 1. Unified Global Header & Footer Components
  const HEADER_HTML = `<nav class="nav nav--dark" id="mainNav">
  <div class="container">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo" aria-label="AK Pharma Home">
        <img src="images/logo-white-horizontal.png" alt="AK Pharma Logo" class="nav__logo-image" />
      </a>
      <ul class="nav__links">
        <li><a href="index.html"    class="nav__link">Home</a></li>
        <li><a href="about.html"    class="nav__link">About Us</a></li>
        <li><a href="products.html" class="nav__link">Products</a></li>
        <li><a href="careers.html"  class="nav__link">Careers</a></li>
        <li><a href="contact.html"  class="nav__link">Contact</a></li>
      </ul>
      <a href="contact.html" class="btn btn--outline-white nav__cta">Contact Us</a>
      <button class="nav__hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="nav__mobile">
    <a href="index.html"    class="nav__link">Home</a>
    <a href="about.html"    class="nav__link">About Us</a>
    <a href="products.html" class="nav__link">Products</a>
    <a href="careers.html"  class="nav__link">Careers</a>
    <a href="contact.html"  class="nav__link">Contact</a>
  </div>
</nav>`;

  const FOOTER_HTML = `<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <!-- Brand Profile -->
      <div>
        <a href="index.html" class="footer__logo-link" aria-label="AK Pharma Home">
          <img src="images/logo-white-horizontal.png" alt="AK Pharma Logo" class="nav__logo-image" style="height:48px;" />
        </a>
        <div class="footer__brand-tag">Smart Solutions for Healthier Living · Est. 2014</div>
        <p class="footer__brand-desc">Advancing healthcare access in Bangladesh through the importation and distribution of clinically validated pharmaceutical products.</p>
      </div>

      <!-- Main Navigation Links -->
      <div class="footer__col">
        <h5>Navigate</h5>
        <ul class="footer__links">
          <li><a href="index.html"    class="footer__link">Home</a></li>
          <li><a href="about.html"    class="footer__link">About Us</a></li>
          <li><a href="products.html" class="footer__link">Products</a></li>
          <li><a href="careers.html"  class="footer__link">Careers</a></li>
          <li><a href="contact.html"  class="footer__link">Contact</a></li>
        </ul>
      </div>

      <!-- Functional Category Jump Filters -->
      <div class="footer__col">
        <h5>Products</h5>
        <ul class="footer__links">
          <li><a href="products.html" onclick="return typeof filterCatFromFooter === 'function' ? filterCatFromFooter('maternal') : true;" class="footer__link">Maternal Health</a></li>
          <li><a href="products.html" onclick="return typeof filterCatFromFooter === 'function' ? filterCatFromFooter('wellness') : true;" class="footer__link">Sexual Wellness</a></li>
          <li><a href="products.html" onclick="return typeof filterCatFromFooter === 'function' ? filterCatFromFooter('vitamins') : true;" class="footer__link">Vitamins &amp; Supplements</a></li>
          <li><a href="products.html" onclick="return typeof filterCatFromFooter === 'function' ? filterCatFromFooter('rx') : true;" class="footer__link">Prescription Support</a></li>
        </ul>
      </div>

      <!-- Physical Contact Ledger -->
      <div class="footer__col">
        <h5>Contact</h5>
        <div class="footer__contact-item">
          <span class="footer__contact-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></span>
          <span>10/26, Rupnagar R/A, Mirpur,<br>Dhaka 1216, Bangladesh</span>
        </div>
        <div class="footer__contact-item">
          <span class="footer__contact-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></span>
          <span>+880 1798-112763</span>
        </div>
        <div class="footer__contact-item">
          <span class="footer__contact-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></span>
          <span>akpharmabd@gmail.com</span>
        </div>
      </div>
    </div>

    <!-- Administrative Legal Row -->
    <div class="footer__bottom">
      <p class="footer__copyright">&copy; 2026 AK Pharma Ltd. All rights reserved.</p>
      <div class="footer__legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">DGDA License</a>
      </div>
    </div>
  </div>
</footer>`;

  function initHeader() {
    const headerEl = document.getElementById('global-header');
    if (headerEl && !headerEl.querySelector('#mainNav')) {
      headerEl.innerHTML = HEADER_HTML;
    }

    const footerEl = document.getElementById('global-footer');
    if (footerEl && !footerEl.querySelector('.footer')) {
      footerEl.innerHTML = FOOTER_HTML;
    }

    // Nav scroll behavior
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

    // Mobile menu hamburger
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.nav__mobile');
    if (hamburger && mobileMenu) {
      // Avoid duplicate listener
      if (!hamburger.dataset.bound) {
        hamburger.dataset.bound = 'true';
        hamburger.addEventListener('click', (e) => {
          e.stopPropagation();
          hamburger.classList.toggle('open');
          mobileMenu.classList.toggle('open');
        });

        mobileMenu.querySelectorAll('.nav__link').forEach(link => {
          link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
          });
        });
      }
    }

    // Active link highlighting
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '' || currentPage === 'index.php') currentPage = 'index.html';
    // Clean URLs compatibility (e.g. /about -> about.html)
    if (!currentPage.includes('.')) currentPage += '.html';

    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || href === currentPage.replace('.html', '')) {
        link.classList.add('active');
      }
    });

    // Special handling on product-detail page if navbar needs solid bg
    if (window.location.pathname.includes('product-detail')) {
      const mainNav = document.getElementById('mainNav');
      if (mainNav) {
        mainNav.style.backgroundColor = '#142b3e';
        mainNav.style.position = 'relative';
        mainNav.style.width = '100%';
        mainNav.style.zIndex = '9999';
      }
    }
  }

  // Run immediately if DOM ready, or on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
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

  // Export helper globally so inline scripts or fallbacks can call it
  
  /* ── 4. Interactive FAQ Accordion ────────────────────────── */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!questionBtn || !answer) return;

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items in accordion
        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('active')) {
            other.classList.remove('active');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* ── 5. Animated Metric Counters (CountUp) ───────────────── */
  function initMetricCounters() {
    const metricElements = document.querySelectorAll('.metric-item__num, .hero__stat-num');
    if (!metricElements.length) return;

    function animateCount(el, start, end, suffix, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
        const current = Math.floor(ease * (end - start) + start);
        el.innerHTML = current + (suffix ? '<span>' + suffix + '</span>' : '');
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.innerHTML = end + (suffix ? '<span>' + suffix + '</span>' : '');
        }
      };
      window.requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const rawText = el.textContent.trim();
            const match = rawText.match(/^(\d+)(.*)$/);
            if (match) {
              const targetNum = parseInt(match[1], 10);
              const suffix = match[2] || '';
              animateCount(el, 0, targetNum, suffix, 1500);
            }
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.25 });

      metricElements.forEach(el => observer.observe(el));
    }
  }

  /* ── 6. Floating WhatsApp & Quick Contact Pill ───────────── */
  function initFloatingContact() {
    if (document.querySelector('.ak-floating-widget')) return;
    const widget = document.createElement('div');
    widget.className = 'ak-floating-widget';
    widget.innerHTML = `
      <a href="https://wa.me/8801798112763?text=Hello%20AK%20Pharma%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20products." 
         class="ak-floating-pill" 
         target="_blank" 
         rel="noopener noreferrer" 
         aria-label="Chat with AK Pharma on WhatsApp or Call +880 1798-112763">
        <div class="ak-floating-pill__icon">
          <span class="ak-floating-pill__pulse"></span>
          <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.5 0-2.97-.4-4.26-1.16l-.31-.18-3.16.83.84-3.08-.2-.32a8.18 8.18 0 01-1.25-4.33c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.73 2.64 4.19 3.7 2.46 1.06 2.46.71 2.9.66.45-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/></svg>
        </div>
        <div class="ak-floating-pill__text">
          <span class="ak-floating-pill__title">WhatsApp & Phone</span>
          <span class="ak-floating-pill__phone">+880 1798-112763</span>
        </div>
      </a>
    `;
    document.body.appendChild(widget);
  }

  // Initialize interactive features
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initFaqAccordion();
      initMetricCounters();
      initFloatingContact();
    });
  } else {
    initFaqAccordion();
    initMetricCounters();
    initFloatingContact();
  }

  window.initAKHeader = initHeader;
})();
