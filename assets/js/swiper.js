import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1.25,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2.1,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    modules: [Navigation],

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})