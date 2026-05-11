/* Pagefind-backed search modal.

   Lazy-loads /pagefind/pagefind.js on first open. Until then the modal
   markup is inert. If the Pagefind bundle is missing (e.g. local
   `hugo server` without the post-build pagefind step), the overlay
   shows a graceful "unavailable" message instead of erroring.
*/

const MAX_RESULTS = 8;
const DEBOUNCE_MS = 80;

let pagefind = null;
let pagefindError = null;
let activeIndex = -1;
let currentResults = [];
let lastFocused = null;
let debounceTimer = null;

const modal     = document.getElementById('search-modal');
const input     = modal?.querySelector('[data-search-input]');
const resultsEl = modal?.querySelector('[data-search-results]');

if (modal && input && resultsEl) initSearch();

function initSearch() {
  document.addEventListener('keydown', onGlobalKeydown);
  document.addEventListener('click', onGlobalClick);
  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onInputKeydown);
}

function isOpen() { return !modal.hidden; }

function openSearch() {
  if (isOpen()) return;
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('is-search-open');
  // Focus after the show frame so the input is interactable.
  requestAnimationFrame(() => input.focus());
  if (input.value) renderResults(currentResults); // restore previous render
}

function closeSearch() {
  if (!isOpen()) return;
  modal.hidden = true;
  document.body.classList.remove('is-search-open');
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}

async function loadPagefind() {
  if (pagefind) return pagefind;
  if (pagefindError) throw pagefindError;
  try {
    const url = modal.dataset.pagefindUrl || '/pagefind/pagefind.js';
    pagefind = await import(/* @vite-ignore */ url);
    if (pagefind.options) {
      await pagefind.options({ excerptLength: 30 });
    }
    return pagefind;
  } catch (err) {
    pagefindError = err;
    throw err;
  }
}

async function runSearch(query) {
  if (!query.trim()) {
    renderResults([]);
    return;
  }
  try {
    const pf = await loadPagefind();
    const search = await pf.search(query);
    const data = await Promise.all(
      search.results.slice(0, MAX_RESULTS).map((r) => r.data()),
    );
    currentResults = data;
    activeIndex = data.length > 0 ? 0 : -1;
    renderResults(data);
  } catch (_) {
    renderUnavailable();
  }
}

function renderResults(results) {
  if (results.length === 0) {
    if (input.value.trim()) {
      resultsEl.innerHTML = `<p class="search-modal__empty">No matches for &ldquo;${escapeHtml(input.value)}&rdquo;.</p>`;
    } else {
      resultsEl.innerHTML = '';
    }
    return;
  }

  resultsEl.innerHTML = results.map((r, i) => `
    <a class="search-modal__result${i === activeIndex ? ' is-active' : ''}"
       href="${r.url}"
       role="option"
       aria-selected="${i === activeIndex}"
       data-index="${i}">
      <div class="search-modal__result-title">${escapeHtml((r.meta && r.meta.title) || r.url)}</div>
      <div class="search-modal__result-excerpt">${r.excerpt || ''}</div>
    </a>
  `).join('');
}

function renderUnavailable() {
  resultsEl.innerHTML = `
    <p class="search-modal__empty">
      Search index isn't available yet. Run <code>pagefind --site public</code>
      after Hugo builds.
    </p>`;
}

function updateActiveResult() {
  const nodes = resultsEl.querySelectorAll('.search-modal__result');
  nodes.forEach((el, i) => {
    const active = i === activeIndex;
    el.classList.toggle('is-active', active);
    el.setAttribute('aria-selected', String(active));
    if (active) el.scrollIntoView({ block: 'nearest' });
  });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ---------- Event handlers ---------- */

function onGlobalKeydown(event) {
  // Cmd/Ctrl+K opens the modal from anywhere.
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
    return;
  }
  if (event.key === 'Escape' && isOpen()) {
    event.preventDefault();
    closeSearch();
  }
}

function onGlobalClick(event) {
  if (event.target.closest('[data-search-trigger]')) {
    event.preventDefault();
    openSearch();
    return;
  }
  if (event.target.closest('[data-search-close]')) {
    event.preventDefault();
    closeSearch();
  }
}

function onInput() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => runSearch(input.value), DEBOUNCE_MS);
}

function onInputKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (currentResults.length === 0) return;
    activeIndex = (activeIndex + 1) % currentResults.length;
    updateActiveResult();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (currentResults.length === 0) return;
    activeIndex = (activeIndex - 1 + currentResults.length) % currentResults.length;
    updateActiveResult();
  } else if (event.key === 'Enter') {
    if (activeIndex >= 0 && currentResults[activeIndex]) {
      event.preventDefault();
      window.location.href = currentResults[activeIndex].url;
    }
  }
}
