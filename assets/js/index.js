import '../scss/index.scss'
import './swiper'

// Закрытие мобильного меню
function closeMobileMenu() {
    const menu = document.querySelector('.header__link-wrapper')
        .classList.toggle('show')
    const iconsWrapper = document.querySelector('.header__mobile')
        .classList.toggle('hidden')
}

// Мобильное меню
function showMobileMenu() {
    const icons = document.querySelectorAll('.header__mobile-icon');

    icons.forEach(icon => {
        icon.addEventListener('click', e => {
            closeMobileMenu()
            stopScroll ()
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
function showModal(modalClass, close) {
    const modal = document.querySelector(modalClass);
    const modalClose = document.querySelector(close);

    stopScroll ()
    modal.classList.add('show');

    modal.addEventListener('click', e => {
        if (e.target == modal || e.target == modalClose) {
            modal.classList.remove('show');
            stopScroll ()
        }
    })
}

// Передача отзыва в модалку
function showModalImage() {
    const modalImage = document.querySelector('.modal__image-img');
    const reviewsImages = document.querySelectorAll('.reviews__img');

    reviewsImages.forEach(image => {
        image.addEventListener('click', e => {
            modalImage.src = e.target.src;
            showModal('.modal__image', '.modal__image-close')
        })
    })
}

// Cкрол с якорных ссылок в header
function scrollTo() {
    const links = document.querySelectorAll('.header__link');
    if (links.length) {
        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault()
                const id = link.hash

                function scrollToTab() {
                    document.querySelector(id).scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }

                //Закрытие меню на мобильных
                if(window.innerWidth < 700) {
                    closeMobileMenu()
                    setTimeout(scrollToTab, 500)
                } else {
                    scrollToTab()
                }
            })
        })
    }
}

scrollTo()
showMobileMenu();
changeTab();
activeAccordion();
showModalImage()
scrollTop()

setTimeout(()=>showModal('.modal', '.modal__close'), 30000);