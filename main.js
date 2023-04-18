const navToggle = document.getElementById('menu-toggler');

navToggle.addEventListener('click', function() {
  const navUL = navToggle.nextElementSibling;
  navUL.style.display = navToggle.checked ? 'block' : 'none';
});