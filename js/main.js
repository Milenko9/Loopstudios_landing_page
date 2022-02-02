let hamMenu = document.querySelector('#ham-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let immerText = document.querySelector('.immersive-text');
let logo = document.querySelector('.logo');
let hamburgerMenuDiv = document.querySelector('.hamburger-menu');
let mainHeader = document.querySelector('.main-header');
let iconClose = document.querySelector('.icon-close');

hamMenu.addEventListener('click', showMobileMenu);
iconClose.addEventListener('click', hideMobileMenu);

function showMobileMenu() {
  mobileMenu.style.display = 'block';
  immerText.style.display = 'none';
  logo.style.display = 'none';
  hamburgerMenuDiv.style.display = 'none';
  mainHeader.style.backgroundImage = 'none';
}

function hideMobileMenu() {
  mobileMenu.style.display = 'none';
  immerText.style.display = 'block';
  logo.style.display = 'block';
  hamburgerMenuDiv.style.display = 'block';
  mainHeader.style.backgroundImage = "url('img/mobile/image-hero.jpg')";
}
