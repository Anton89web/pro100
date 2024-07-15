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

showMobileMenu();
changeTab();
activeAccordion();
scrollTop()
