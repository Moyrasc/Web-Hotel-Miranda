const swiper = new Swiper(".swiper-menu", {
    direction: "horizontal",
    loop: false,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 4000,
    // },
    breakpointsBase: 'container',
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: '.swiper-menu__button--next',
        prevEl: '.swiper-menu__button--prev',
    },
});