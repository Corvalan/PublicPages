---
title: PublicPages
---

# Public pages

Below is an auto-generated list of all pages under `/pages/`:

<ul>
{% raw %}{% for p in site.pages %}{% endraw %}
  {% raw %}{% if p.path contains 'pages/' %}{% endraw %}
    <li>
      <a href="{% raw %}{{ p.url | relative_url }}{% endraw %}">
        {% raw %}{{ p.title | default: p.name }}{% endraw %}
      </a>
    </li>
  {% raw %}{% endif %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}
</ul>
