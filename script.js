(function() {
  'use strict';

  const footer = document.querySelector('.footer');
  if (!footer) return;

  const currentYear = new Date().getFullYear();
  const copyrightEl = footer.querySelector('.footer__copyright');
  if (copyrightEl) {
    copyrightEl.textContent = copyrightEl.textContent.replace('2026', currentYear);
  }

  const socialLinks = footer.querySelectorAll('.footer__social-link');
  socialLinks.forEach(link => {
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });

  const navLinks = footer.querySelectorAll('.footer__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('focus', () => {
      link.style.outline = '2px solid currentColor';
      link.style.outlineOffset = '2px';
      link.style.borderRadius = '2px';
    });
    link.addEventListener('blur', () => {
      link.style.outline = '';
      link.style.outlineOffset = '';
      link.style.borderRadius = '';
    });
  });
})();