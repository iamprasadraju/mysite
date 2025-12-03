---
layout: page
title: Private Index
permalink: /private/
---

<div id="login-area">
  <p>This content is password protected.</p>
  <input type="password" id="password-input" placeholder="Enter Password" onkeyup="checkPassword(event)">
  <button onclick="checkPassword()">Unlock</button>
  <p id="error-message" style="color: red; display: none;">Incorrect password</p>
</div>

<div id="private-content" style="display: none;">
  <h2>Notes</h2>
  <ul>
    {% for note in site.notes %}
      <li>
        <a href="{{ note.url | relative_url }}">{{ note.title }}</a>
        {% if note.visibility == 'private' %} 🔒{% endif %}
        <span class="post-meta">{{ note.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>

  <h2>Blogs</h2>
  <ul>
    {% for blog in site.blogs %}
      <li>
        <a href="{{ blog.url | relative_url }}">{{ blog.title }}</a>
        {% if blog.visibility == 'private' %} 🔒{% endif %}
        <span class="post-meta">{{ blog.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>

  <h2>Posts</h2>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% if post.visibility == 'private' %} 🔒{% endif %}
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</div>

<script>
  function checkPassword(event) {
    if (event && event.key !== 'Enter') return;
    
    const input = document.getElementById('password-input');
    const content = document.getElementById('private-content');
    const login = document.getElementById('login-area');
    const error = document.getElementById('error-message');
    
    // CHANGE THIS PASSWORD
    const password = "iamprasadraju";
    
    if (input.value === password) {
      content.style.display = 'block';
      login.style.display = 'none';
    } else {
      error.style.display = 'block';
      input.value = '';
    }
  }
</script>
