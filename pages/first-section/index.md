[Home](https://Corvalan.github.io/PublicPages/) | [First Section](https://Corvalan.github.io/PublicPages/pages/first-section/) | [Second Section](https://Corvalan.github.io/PublicPages/pages/second-section/) | [Home](https://Corvalan.github.io/PublicPages/pages/home/)

<div class="layout-two-panel">
  <aside class="layout-two-panel__sidebar">
    <h2>First Section</h2>

    <div class="layout-two-panel__intro">
test dd
    </div>

    <h3>Pages</h3>
    <div id="section-pages" class="layout-two-panel__pages">
- [page A in first section hello](./page-A-in-first-sect.html)
    </div>
  </aside>

  <main class="layout-two-panel__content">
    <iframe
      id="section-page-frame"
      class="layout-two-panel__frame"
      src=""
      loading="lazy"
    ></iframe>
  </main>
</div>

<style>
  .layout-two-panel {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .layout-two-panel__sidebar {
    flex: 0 0 260px;
    max-width: 320px;
    font-size: 0.95rem;
  }

  .layout-two-panel__intro p:last-child {
    margin-bottom: 0.75rem;
  }

  .layout-two-panel__pages ul {
    list-style: none;
    padding-left: 0;
    margin: 0.5rem 0 0 0;
  }

  .layout-two-panel__pages li {
    margin: 0.15rem 0;
  }

  .layout-two-panel__pages a {
    text-decoration: none;
    display: block;
    padding: 0.15rem 0.25rem;
    border-radius: 4px;
  }

  .layout-two-panel__pages a:hover {
    text-decoration: underline;
  }

  .layout-two-panel__pages a.is-active {
    font-weight: 600;
    text-decoration: none;
    outline: 1px solid #ccc;
  }

  .layout-two-panel__content {
    flex: 1 1 auto;
    min-height: 60vh;
  }

  .layout-two-panel__frame {
    width: 100%;
    min-height: 70vh;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
  }

  @media (max-width: 900px) {
    .layout-two-panel {
      flex-direction: column;
    }

    .layout-two-panel__sidebar {
      max-width: none;
      flex: 1 1 auto;
    }

    .layout-two-panel__frame {
      min-height: 60vh;
    }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var pagesContainer = document.getElementById('section-pages');
  if (!pagesContainer) return;

  var links = Array.prototype.slice.call(
    pagesContainer.querySelectorAll('a[href]')
  );
  if (!links.length) return;

  var frame = document.getElementById('section-page-frame');
  if (!frame) return;

  function openLink(link, pushHistory) {
    var href = link.getAttribute('href');
    if (!href) return;

    frame.setAttribute('src', href);

    links.forEach(function (a) {
      a.classList.remove('is-active');
    });
    link.classList.add('is-active');

    if (pushHistory && window.history && window.history.pushState) {
      var url = new URL(window.location.href);
      url.searchParams.set('page', href);
      window.history.pushState({ page: href }, '', url.toString());
    }
  }

  // Intercept clicks on page links
  links.forEach(function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      openLink(link, true);
    });
  });

  // Initial selection: from ?page= param, otherwise first link
  var initialLink = null;
  try {
    var params = new URLSearchParams(window.location.search || '');
    var initialHref = params.get('page');
    if (initialHref) {
      initialLink = links.find(function (l) {
        return l.getAttribute('href') === initialHref;
      }) || null;
    }
  } catch (e) {
    // ignore
  }

  if (!initialLink) {
    initialLink = links[0] || null;
  }
  if (initialLink) {
    openLink(initialLink, false);
  }

  // Handle back/forward navigation
  window.addEventListener('popstate', function (event) {
    var href = event.state && event.state.page;
    if (!href) return;
    var link = links.find(function (l) {
      return l.getAttribute('href') === href;
    }) || null;
    if (link) {
      openLink(link, false);
    }
  });
});
</script>
