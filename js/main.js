/* ================================================================
   Eclipse Chauffeur — main.js
   ================================================================ */

// ── Header scroll state ──────────────────────────────────────────
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Mobile menu ──────────────────────────────────────────────────
const menuToggle  = document.getElementById('menuToggle');
const mobileNav   = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function closeMenu() {
  menuToggle.classList.remove('is-active');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileNav.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// ── Smooth scroll for internal anchors ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const offset = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

// ── FAQ accordion ────────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen    = btn.getAttribute('aria-expanded') === 'true';
    const answerId  = btn.getAttribute('aria-controls');
    const answer    = document.getElementById(answerId);

    // Collapse all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      const a = document.getElementById(b.getAttribute('aria-controls'));
      if (a) a.style.maxHeight = '0';
    });

    // Expand clicked one if it was closed
    if (!isOpen && answer) {
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── Scroll-reveal via IntersectionObserver ───────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    // Stagger siblings inside a grid/list
    const siblings = Array.from(
      entry.target.parentElement.querySelectorAll('[data-reveal]:not(.is-revealed)')
    );
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => {
      entry.target.classList.add('is-revealed');
    }, Math.max(0, idx) * 90);
    revealObserver.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -36px 0px',
});

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ── Contact form (demo handler) ──────────────────────────────────
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form && formSuccess) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Validate required fields
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const empty = !field.value.trim();
      field.style.borderColor = empty ? 'rgba(255,80,80,.7)' : '';
      if (empty) {
        valid = false;
        field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
      }
    });
    if (!valid) return;

    const btn = form.querySelector('[type="submit"]');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = 'Enviando…';
    btn.disabled  = true;

    // Simulate async send — replace with real fetch/formspree/etc.
    setTimeout(() => {
      form.reset();
      btn.innerHTML = originalHTML;
      btn.disabled  = false;
      formSuccess.textContent = '✓ Solicitud enviada. Te contactamos en menos de 24 horas.';
      formSuccess.classList.add('is-visible');
      setTimeout(() => formSuccess.classList.remove('is-visible'), 7000);
    }, 1300);
  });
}
