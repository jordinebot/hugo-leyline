const STORAGE_KEY = 'leyline-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

document.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-theme-toggle]');
  if (!trigger) return;
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
});

const media = window.matchMedia('(prefers-color-scheme: dark)');
media.addEventListener('change', (e) => {
  let stored;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (_) {}
  if (stored) return;
  applyTheme(e.matches ? 'dark' : 'light');
});

/* ---------- Mobile menu ---------- */

function setMenuOpen(nav, open) {
  nav.setAttribute('data-mobile-open', open ? 'true' : 'false');
  const btn = nav.querySelector('[data-mobile-menu-toggle]');
  if (btn) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
}

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-mobile-menu-toggle]');
  if (toggle) {
    const nav = toggle.closest('.site-nav');
    if (!nav) return;
    const open = nav.getAttribute('data-mobile-open') === 'true';
    setMenuOpen(nav, !open);
    return;
  }

  // Close when a menu link is tapped
  const link = event.target.closest('.site-nav__list a');
  if (link) {
    const nav = link.closest('.site-nav');
    if (nav) setMenuOpen(nav, false);
    return;
  }

  // Close when clicking outside the nav
  const openNav = document.querySelector('.site-nav[data-mobile-open="true"]');
  if (openNav && !event.target.closest('.site-nav')) {
    setMenuOpen(openNav, false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const nav = document.querySelector('.site-nav[data-mobile-open="true"]');
  if (nav) setMenuOpen(nav, false);
});

/* Reset menu state when crossing the mobile breakpoint */
const breakpoint = window.matchMedia('(min-width: 641px)');
breakpoint.addEventListener('change', (e) => {
  if (!e.matches) return;
  document.querySelectorAll('.site-nav[data-mobile-open="true"]').forEach((nav) => setMenuOpen(nav, false));
});
