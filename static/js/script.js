// alert('hello world')
const mobileButton = document.querySelector('button.mobile-button');
const navbar = document.querySelector('header.container nav ul');

mobileButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
