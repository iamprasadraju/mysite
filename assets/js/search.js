(function () {
  'use strict';

  let searchData = [];
  let searchInput, searchResults, searchOverlay, searchToggle, searchClose;
  let currentFocus = -1;

  // Initialize search when DOM is ready
  function init() {
    searchInput = document.getElementById('search-input');
    searchResults = document.getElementById('search-results');
    searchOverlay = document.getElementById('search-overlay');
    searchToggle = document.getElementById('search-toggle');
    searchClose = document.getElementById('search-close');

    if (!searchInput || !searchResults || !searchOverlay) return;

    // Load search data
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        // Filter out empty objects
        searchData = data.filter(item => item.title);
      })
      .catch(error => console.error('Error loading search data:', error));

    // Event listeners
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    searchInput.addEventListener('keydown', handleKeyDown);
    searchOverlay.addEventListener('click', handleOverlayClick);
  }

  // Open search overlay
  function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  // Close search overlay
  function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    currentFocus = -1;
    document.body.style.overflow = '';
  }

  // Handle overlay click (close when clicking outside)
  function handleOverlayClick(e) {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  }

  // Debounce function for performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handle search input
  function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();
    currentFocus = -1;

    if (query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }

    const results = searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const excerptMatch = item.excerpt.toLowerCase().includes(query);
      const categoryMatch = item.categories.toLowerCase().includes(query);
      return titleMatch || excerptMatch || categoryMatch;
    }).slice(0, 10); // Limit to 10 results

    displayResults(results, query);
  }

  // Display search results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      return;
    }

    const html = results.map((item, index) => {
      const highlightedTitle = highlightText(item.title, query);
      const highlightedExcerpt = highlightText(item.excerpt, query);

      return `
        <a href="${item.url}" class="search-result-item" data-index="${index}">
          <div class="search-result-header">
            <span class="search-result-title">${highlightedTitle}</span>
            <span class="search-result-type">${item.type}</span>
          </div>
          <div class="search-result-excerpt">${highlightedExcerpt}</div>
          ${item.date ? `<div class="search-result-date">${item.date}</div>` : ''}
        </a>
      `;
    }).join('');

    searchResults.innerHTML = html;
  }

  // Highlight matching text
  function highlightText(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Escape regex special characters
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Handle keyboard navigation
  function handleKeyDown(e) {
    const items = searchResults.querySelectorAll('.search-result-item');

    if (e.key === 'Escape') {
      closeSearch();
      return;
    }

    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentFocus++;
      if (currentFocus >= items.length) currentFocus = 0;
      setActive(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentFocus--;
      if (currentFocus < 0) currentFocus = items.length - 1;
      setActive(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFocus > -1 && items[currentFocus]) {
        items[currentFocus].click();
      }
    }
  }

  // Set active result item
  function setActive(items) {
    items.forEach((item, index) => {
      if (index === currentFocus) {
        item.classList.add('active');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
