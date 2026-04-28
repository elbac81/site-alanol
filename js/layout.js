(function () {
  var p = window.location.pathname;
  var r = (p.indexOf('/produtos/') !== -1) ? '../' : '';

  /* ── HEADER ── */
  var H = '<nav><div class="nav-inner">'
    + '<button class="menu-toggle" id="menuToggle"><span></span><span></span><span></span></button>'
    + '<a href="' + r + 'index.html" class="logo-link"><img src="https://alanol.pt/img/logo.png" alt="Alanol"></a>'
    + '<ul class="nav-links">'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'furo\')">Furo</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'poco\')">Po\u00e7o</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'superficie\')">Superf\u00edcie</a></li>'
    + '<li><a href="' + r + 'bombagem-solar.html">Bombagem Solar</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'todos\')">Todos os Produtos</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'empresa\')">Empresa</a></li>'
    + '<li><a href="' + r + 'contactos.html">Contactos</a></li>'
    + '<li class="nav-cta-mobile"><button class="nav-cta-btn" onclick="sessionStorage.setItem(\'nav\',\'contacto\');location.href=\'' + r + 'index.html\'">Fale Connosco</button></li>'
    + '</ul>'
    + '<button class="nav-cta" onclick="sessionStorage.setItem(\'nav\',\'contacto\');location.href=\'' + r + 'index.html\'">Fale Connosco</button>'
    + '</div></nav>';

  /* ── FOOTER ── */
  var F = '<footer><div class="footer-inner">'
    + '<div class="footer-top">'
    + '<div class="footer-brand">'
    + '<div class="footer-logo"><img src="https://alanol.pt/img/logo.png" alt="Alanol"></div>'
    + '<div class="footer-contacts">'
    + '<a href="tel:+351253501414">☎ +351 253 501 414 <small>(rede fixa nacional)</small></a>'
    + '<a href="tel:+351914999307">☎ +351 914 999 307 <small>(rede móvel nacional)</small></a>'
    + '<a href="mailto:alanol@alanol.pt">✉ alanol@alanol.pt</a>'
    + '</div>'
    + '<img src="https://alanol.pt/img/pme_alanol.png" alt="PME L\u00edder \u00b7 Desde 1959 \u00b7 Pagamento Pontual" style="max-width:180px;width:100%;margin-top:.75rem;opacity:.85;border-radius:4px">'
    + '</div>'
    + '<div class="footer-col"><h4>Eletrobombas</h4><ul>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'furo\')">Furo F4\u2033 / FTI / VSC</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'poco\')">Po\u00e7o AM/AT Alum\u00ednio</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'poco\')">Po\u00e7o VN/ES INOX</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'superficie\')">Superf\u00edcie EH / EV</a></li>'
    + '<li><a href="' + r + 'bombagem-solar.html">Bombagem Solar</a></li>'
    + '</ul></div>'
    + '<div class="footer-col"><h4>Sistemas</h4><ul>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'superficie\')">Grupos de Press\u00e3o</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'depositos\')">Dep\u00f3sitos INOX</a></li>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'controlo\')">Quadros de Comando</a></li>'
    + '<li><a href="' + r + 'produtos/variadores-de-velocidade-vacon.html">Variadores Vacon\u00ae</a></li>'
    + '<li><a href="' + r + 'produtos/motores-submersiveis-franklin.html">Motores Franklin\u00ae</a></li>'
    + '</ul></div>'
    + '<div class="footer-col"><h4>Empresa</h4><ul>'
    + '<li><a href="' + r + 'index.html" onclick="sessionStorage.setItem(\'nav\',\'empresa\')">Sobre N\u00f3s</a></li>'
    + '<li><a href="' + r + 'contactos.html">Contactos</a></li>'
    + '<li><a href="' + r + 'servicos.html">Servi\u00e7os</a></li>'
    + '<li><a href="' + r + 'faqs.html">Perguntas Frequentes</a></li>'
    + '<li><a href="' + r + 'responsabilidade.html">Responsabilidade</a></li>'
    + '<li><a href="' + r + 'politica-privacidade.html">Pol\u00edtica de Privacidade</a></li>'
    + '</ul></div>'
    + '</div>'
    + '<div class="footer-bottom">'
    + '<p>\u00a9 2026 Alanol Eletrobombas Submerss\u00edveis S.A. \u2014 Fafe, Portugal</p>'
    + '<a href="' + r + 'politica-privacidade.html">Pol\u00edtica de Privacidade</a>'
    + '</div></div></footer>'
    + '<a href="https://wa.me/351910178819?text=Ol%C3%A1%2C%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20vossos%20produtos." target="_blank" rel="noopener" class="wa-badge" aria-label="Contactar via WhatsApp">'
    + '<svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
    + '</a>';

  /* ── INJECT ── */
  function inject(id, html) {
    var el = document.getElementById(id);
    if (!el) return;
    el.insertAdjacentHTML('afterend', html);
    el.parentNode.removeChild(el);
  }

  inject('site-header', H);
  inject('site-footer', F);

})();


// Registar Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW registration failed:', err));
  });
}



// Menu Toggle
(function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Fechar menu ao clicar num link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
})();
