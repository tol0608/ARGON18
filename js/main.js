document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.header');
    header.addEventListener('mouseover', function () {
        this.classList.add('header_on');
    });
    header.addEventListener('mouseout', function () {
        this.classList.remove('header_on');
    });

    var prevScrollPos = window.scrollY;
    window.addEventListener('scroll', function () {
        var mainSection = document.querySelector('.sec2').offsetTop;
        var currentScrollPos = window.scrollY;

        if (mainSection < currentScrollPos) {
            header.classList.toggle('hide', prevScrollPos <= currentScrollPos);
            prevScrollPos = currentScrollPos;
        }
    });

    var searchBox = document.querySelector('.header__search-button');
    searchBox.addEventListener('click', function () {
        document.querySelector('.header__search').classList.add('header__search-on');
    });

    var removeBox = document.querySelector('.header__search-close');
    removeBox.addEventListener('click', function () {
        document.querySelector('.header__search-on').classList.remove('header__search-on');
    });

});
