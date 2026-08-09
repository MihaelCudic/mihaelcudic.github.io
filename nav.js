/* nav.js — injects analytics + nav + footer, marks active page */
(function () {

  /* ============================================================
     ANALYTICS — GoatCounter
     ────────────────────────────────────────────────────────────
     TO TURN IT ON:
       1. Create a free account at https://www.goatcounter.com
          and choose a code (your dashboard becomes
          https://<code>.goatcounter.com).
       2. Put that code below, e.g. 'mihaelcudic'.
       3. Done — analytics load on EVERY page automatically,
          because every page includes this nav.js file.

     Until you replace 'YOUR_CODE', nothing loads (so the site is
     safe to keep online while you get set up).
     ============================================================ */
  const GOATCOUNTER_CODE = 'mihaelcudic';

  if (GOATCOUNTER_CODE && GOATCOUNTER_CODE !== 'mihaelcudic') {
    const s = document.createElement('script');
    s.async = true;
    s.src = '//gc.zgo.at/count.js';
    s.setAttribute('data-goatcounter',
      'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
    document.head.appendChild(s);
  }


  /* ============================================================
     NAV + FOOTER
     ============================================================ */
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
