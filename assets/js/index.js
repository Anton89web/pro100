import '../scss/index.scss'
import './swiper'

// Закрытие мобильного меню
function closeMobileMenu() {
    document.querySelector('.header__link-wrapper')
        .classList.remove('show')

    document.querySelector('.header__mobile')
        .classList.add('hidden')
}

// Открытие мобильного меню
function showMobileMenu() {
    document.querySelector('.header__link-wrapper')
        .classList.add('show')

    document.querySelector('.header__mobile')
        .classList.remove('hidden')
}

// Мобильное меню
function mobileMenu() {
    document.querySelector('.header__mobile-burger')
        .addEventListener('click', showMobileMenu)

   document.querySelector('.header__mobile-cross')
       .addEventListener('click', closeMobileMenu)
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
            if (accordion.classList.contains('active')) {
                accordion.classList.remove('active')
            } else {
                document.querySelector('.accordion__item.active')?.classList.remove('active')
                accordion.classList.toggle('active')
            }
        })
    })
}

//Кнопка скрола наверх
function scrollTop() {
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

        window.scrollTo({top: 0, behavior: "smooth"});
    });
}

// Стоп скролла при мобильном меню и модалки
function stopScroll() {
    const body = document.querySelector('body');

    body.classList.add('stop__scroll');
}

// Стоп скролла при мобильном меню и модалки
function removeStopScroll() {
    const body = document.querySelector('body');

    body.classList.remove('stop__scroll');
}

// Модальное окно
function showModal(modalClass, close) {
    const modal = document.querySelector(modalClass);
    const modalClose = document.querySelector(close);

    stopScroll()
    modal.classList.add('show');

    modal.addEventListener('click', e => {
        if (e.target == modal || e.target == modalClose) {
            modal.classList.remove('show');
            removeStopScroll()
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

                function scrollToBlock() {
                    document.querySelector(id).scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }

                //Закрытие меню на мобильных
                if (window.innerWidth < 700) {
                    closeMobileMenu()
                    setTimeout(scrollToBlock, 500)
                } else {
                    scrollToBlock()
                }
            })
        })
    }
}

scrollTo()
mobileMenu()
changeTab();
activeAccordion();
showModalImage()
scrollTop()

setTimeout(() => showModal('.modal', '.modal__close'), 1000);