function createSwiper(container, slidesPerView, spaceBetween, autoplayDelay = 5000, vertical = false) {
    return new Swiper(container, {
        slidesPerView: slidesPerView,
        effect: 'slide',
        centeredSlides: true,
        loop: true,
        spaceBetween: spaceBetween,
        autoplay: {
            delay: autoplayDelay,
            disableOnInteraction: false
        },
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        direction: vertical ? 'vertical' : 'horizontal',
    });
}

var swiper1 = createSwiper(".mySwiper", 1, 20);
var swiper2 = createSwiper(".mySwiper2", 1, 50, 5000, false);
var swiper3 = createSwiper(".mySwiper3", 2, 0, 5000, true);
var swiper4 = createSwiper(".mySwiper4", 1, 50, 3000);

// breakpoints를 사용하려면 아래와 같이 추가하면 됩니다.
// swiper1.params.breakpoints = {
//     1600 : {
//         slidesPerView: 5,
//         spaceBetween: 50,
//     },
//     1300 : {
//         slidesPerView: 4,
//         spaceBetween: 40,
//     },
//     1080 : {
//         slidesPerView: 3,
//         spaceBetween: 30,
//     },
//     768 : {
//         slidesPerView: 2,
//         spaceBetween: 20,
//     },
// };

// swiper2.params.breakpoints = {
//     1600 : {
//         slidesPerView: 5,
//         spaceBetween: 50,
//     },
//     1300 : {
//         slidesPerView: 4,
//         spaceBetween: 40,
//     },
//     1080 : {
//         slidesPerView: 3,
//         spaceBetween: 30,
//     },
//     768 : {
//         slidesPerView: 2,
//         spaceBetween: 20,
//     },
// };

// swiper3.params.breakpoints = {
//     1600 : {
//         slidesPerView: 5,
//         spaceBetween: 50,
//     },
//     1300 : {
//         slidesPerView: 4,
//         spaceBetween: 40,
//     },
//     1080 : {
//         slidesPerView: 3,
//         spaceBetween: 30,
//     },
//     768 : {
//         slidesPerView: 2,
//         spaceBetween: 20,
//     },
// };

// swiper4.params.breakpoints = {
//     1600 : {
//         slidesPerView: 5,
//         spaceBetween: 50,
//     },
//     1300 : {
//         slidesPerView: 4,
//         spaceBetween: 40,
//     },
//     1080 : {
//         slidesPerView: 3,
//         spaceBetween: 30,
//     },
//     768 : {
//         slidesPerView: 2,
//         spaceBetween: 20,
//     },
// };
