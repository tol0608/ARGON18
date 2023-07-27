function createSwiper(container, slidesPerView, spaceBetween, autoplayDelay = 5000, vertical = false, navigation = false) {
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
        navigation: navigation ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        } : false,
        direction: vertical ? 'vertical' : 'horizontal',
        observer: true,
        observeParents: true
    });
}

// 슬라이더 생성
var swiper1 = createSwiper(".mySwiper", 1, 20, 5000, false, false);
var swiper2 = createSwiper(".mySwiper2", 1, 50, 5000, false, true);
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
