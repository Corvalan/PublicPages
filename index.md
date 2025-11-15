---
title: Public pages
layout: default
---

# Public pages

Below is an auto-generated list of all pages under `/pages/`:

<ul>
{% for p in site.pages %}
  {% if p.path contains 'pages/' %}
    <li>
      <a href="{{ p.url | relative_url }}">
        {{ p.title | default: p.name }}
      </a>
    </li>
  {% endif %}
{% endfor %}
</ul>
