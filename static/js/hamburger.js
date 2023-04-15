const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLink = document.querySelector('.nav-link');
const hamburgerMenuHeader = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  navLink.classList.toggle('open');
  hamburgerMenuHeader.classList.toggle('open');
});
