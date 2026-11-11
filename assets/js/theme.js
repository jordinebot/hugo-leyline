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
  if (!btn) return;
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  const label = open ? btn.dataset.labelClose : btn.dataset.labelOpen;
  if (label) btn.setAttribute('aria-label', label);
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

/* ---------- Copy article URL ---------- */

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-copy-url]');
  if (!button) return;

  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
      copied = true;
    } else {
      const input = document.createElement('textarea');
      input.value = window.location.href;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.append(input);
      input.select();
      copied = document.execCommand('copy');
      input.remove();
    }
  } catch (_) {}

  const label = button.querySelector('[data-copy-label]');
  const status = document.querySelector('[data-copy-status]');
  const result = copied ? button.dataset.copySuccess : button.dataset.copyError;
  if (label) label.textContent = result;
  if (status) status.textContent = result;
  button.classList.toggle('is-copied', copied);
  window.setTimeout(() => {
    if (label) label.textContent = button.dataset.copyDefault;
    if (status) status.textContent = '';
    button.classList.remove('is-copied');
  }, 2200);
});

/* Reset menu state when crossing the mobile breakpoint */
const breakpoint = window.matchMedia('(min-width: 641px)');
breakpoint.addEventListener('change', (e) => {
  if (!e.matches) return;
  document.querySelectorAll('.site-nav[data-mobile-open="true"]').forEach((nav) => setMenuOpen(nav, false));
});

/* ---------- Language switcher (close on outside click + Escape) ---------- */

document.addEventListener('click', (event) => {
  document.querySelectorAll('[data-lang-switcher][open]').forEach((d) => {
    if (!d.contains(event.target)) d.removeAttribute('open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('[data-lang-switcher][open]').forEach((d) => d.removeAttribute('open'));
});
