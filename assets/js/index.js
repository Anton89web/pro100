import '../scss/index.scss'
import './swiper'

// Мобильное меню
function showMobileMenu() {
    const menu = document.querySelector('.header__link-wrapper');
    const icons = document.querySelectorAll('.header__mobile-icon');
    const iconsWrapper = document.querySelector('.header__mobile');

    icons.forEach(icon => {
        icon.addEventListener('click', e => {
            stopScroll ()
            menu.classList.toggle('show')
            iconsWrapper.classList.toggle('hidden')
        })
    })
}

//Табы
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

//Аккордион
function activeAccordion() {
    const items = document.querySelectorAll('.accordion__item')

    items.forEach((accordion, i) => {
        accordion.addEventListener('click', e => {
            if(accordion.classList.contains('active')) {
                accordion.classList.remove('active')
            } else {
                document.querySelector('.accordion__item.active')?.classList.remove('active')
                accordion.classList.toggle('active')
            }
        })
    })
}

//Кнопка скрола наверх
function scrollTop () {
    const backToTop = document.querySelector(".back-to-top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 2000) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Стоп скролла при мобильном меню и модалки
function stopScroll () {
    const body = document.querySelector('body');

    body.classList.toggle('stop__scroll');
}

// Модальное окно
function showModal() {
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');

    stopScroll ()
    modal.classList.add('show');

    modalClose.addEventListener('click', e => {
        modal.classList.remove('show');
        stopScroll ()
    })
}

showMobileMenu();
changeTab();
activeAccordion();
scrollTop()

setTimeout(showModal, 30000);