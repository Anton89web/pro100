import '../scss/index.scss'

function showMobileMenu () {
    const menu = document.querySelector('.header__link-wrapper');
    const icons = document.querySelectorAll('.header__mobile-icon');
    const iconsWrapper = document.querySelector('.header__mobile');

    icons.forEach(icon => {
        icon.addEventListener('click', e => {
            menu.classList.toggle('show')
            iconsWrapper.classList.toggle('hidden')
        } )
    })
}

showMobileMenu ();
