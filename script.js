// Мобильное меню
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');

  function openMenu() {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'var(--bg-cave)';
    nav.style.padding = '1rem';
    nav.style.borderBottom = '4px solid var(--accent-orange)';
  }

  function closeMenu() {
    nav.removeAttribute('style');
  }

  burger.addEventListener('click', function () {
    if (window.getComputedStyle(nav).display === 'none') {
      openMenu();
    } else {
      closeMenu();
    }
  });

  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 640) closeMenu();
  });
})();
