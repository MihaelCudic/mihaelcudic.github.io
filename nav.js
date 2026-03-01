/* nav.js — injects nav + footer, marks active page */
(function () {
  const pages = [
    { href: 'index.html',        label: 'About' },
    { href: 'research.html',     label: 'Research' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'teaching.html',     label: 'Teaching' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  // ── NAV
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a class="nav-logo" href="index.html">Dr. Mihael Cudic</a>
    <ul class="nav-links">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${current === p.href || (current === '' && p.href === 'index.html') ? 'active' : ''}">${p.label}</a></li>
      `).join('')}
    </ul>`;
  document.body.prepend(nav);

  // ── FOOTER
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <span>© ${new Date().getFullYear()} Dr. Mihael Cudic</span>
    <span>mihaelcudic.com</span>`;
  document.body.append(footer);
})();
