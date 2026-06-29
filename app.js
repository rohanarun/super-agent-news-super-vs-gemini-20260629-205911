/* Subtle motion with GSAP, guarded for CDN failure */
(function () {
  if (!window.gsap) return;
  gsap.from('.hero h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' });
  gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });
  gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.8, delay: 0.4 });
})();