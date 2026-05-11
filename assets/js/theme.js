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
