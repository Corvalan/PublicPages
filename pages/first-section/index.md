[Home](https://Corvalan.github.io/PublicPages/) | [First Section](https://Corvalan.github.io/PublicPages/pages/first-section/) | [Second Section](https://Corvalan.github.io/PublicPages/pages/second-section/) | [Home](https://Corvalan.github.io/PublicPages/pages/home/)

<div class="section-two-panel">

<div class="section-two-panel__sidebar" markdown="block">

## First Section

test dd

### Pages

- [page A in first section hello](./page-A-in-first-sect.html)
- [page B in first section](./page-b-in-first-section.html)

</div>

<div class="section-two-panel__content">
  <iframe
    id="section-page-frame"
    class="section-two-panel__frame"
    src=""
    loading="lazy"
  ></iframe>
</div>

</div>

<style>
  .section-two-panel {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .section-two-panel__sidebar {
    flex: 0 0 260px;
    max-width: 320px;
    font-size: 0.95rem;
  }

  .section-two-panel__sidebar ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0.5rem;
  }

  .section-two-panel__sidebar li {
    margin: 0.15rem 0;
  }

  .section-two-panel__sidebar a {
    text-decoration: none;
    display: block;
    padding: 0.15rem 0.25rem;
    border-radius: 4px;
  }

  .section-two-panel__sidebar a:hover {
    text-decoration: underline;
  }

  .section-two-panel__sidebar a.is-active {
    font-weight: 600;
    outline: 1px solid #ccc;
  }

  .section-two-panel__frame {
    width: 100%;
    min-height: 70vh;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.querySelector('.section-two-panel__sidebar');
  if (!sidebar) return;

  var allLinks = Array.prototype.slice.call(
    sidebar.querySelectorAll('a[href]')
  );

  var links = allLinks.filter(function (a) {
    var href = a.getAttribute('href') || '';
    return !href.startsWith('http') && href.endsWith('.html');
  });

  if (!links.length) return;

  var frame = document.getElementById('section-page-frame');
  if (!frame) return;

  function openLink(link, pushHistory) {
    var href = link.getAttribute('href');
    if (!href) return;

    frame.setAttribute('src', href);

    links.forEach((a) => a.classList.remove('is-active'));
    link.classList.add('is-active');

    if (pushHistory && history.pushState) {
      var u = new URL(window.location.href);
      u.searchParams.set('page', href);
      history.pushState({ page: href }, '', u.toString());
    }
  }

  links.forEach((l) =>
    l.addEventListener('click', (e) => {
      e.preventDefault();
      openLink(l, true);
    })
  );

  var initial = null;
  var params = new URLSearchParams(window.location.search);
  var ph = params.get('page');
  if (ph) initial = links.find((l) => l.getAttribute('href') === ph);

  if (!initial) initial = links[0];
  if (initial) openLink(initial, false);

  window.addEventListener('popstate', (ev) => {
    var href = ev.state && ev.state.page;
    var link = links.find((l) => l.getAttribute('href') === href);
    if (link) openLink(link, false);
  });
});
</script>
