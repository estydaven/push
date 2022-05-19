const button = document.querySelector('.button');
const firstScreen = document.querySelector('.body-wrapper_main');
const secondScreen = document.querySelector('.body-wrapper_login');

function changeScreen () {
    firstScreen.classList.add('hide');
    secondScreen.classList.add('show');
}

button.addEventListener('click', changeScreen);