const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const menuOpen = document.querySelector('.menu-icon');
const menuPopup = document.querySelector('.menu-popup');
const menuIconClose = document.querySelector('.menu-icon-close');
const menuLogIn = document.querySelector('.menu-login');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-btnpopup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-btnpopup');
})


menuOpen.addEventListener('click', () => {
    menuPopup.classList.add('active-menu');
})

menuIconClose.addEventListener('click', () => {
    menuPopup.classList.remove('active-menu');
})

menuLogIn.addEventListener('click', () => {
    wrapper.classList.add('active-btnpopup');
})


