import '../scss/index.scss'
import './swiper'

function showMobileMenu() {
    const menu = document.querySelector('.header__link-wrapper');
    const icons = document.querySelectorAll('.header__mobile-icon');
    const iconsWrapper = document.querySelector('.header__mobile');

    icons.forEach(icon => {
        icon.addEventListener('click', e => {
            menu.classList.toggle('show')
            iconsWrapper.classList.toggle('hidden')
        })
    })
}

function changeTab() {
    const tabBtns = document.querySelectorAll('.tabs__item-btn')
    const tabs = document.querySelectorAll('.tabs__item-body')

    tabBtns.forEach((btn, i) => {
        btn.addEventListener('click', e => {
            document.querySelector('.tabs__item-btn.active')
                .classList.remove('active')
            document.querySelector('.tabs__item-body.active')
                .classList.remove('active')

            btn.classList.add('active')
            tabs[i].classList.add('active')
        })
    })
}

showMobileMenu();
changeTab();
