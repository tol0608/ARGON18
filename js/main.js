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

function addOrRemoveResponsiveClass() {
    // 미디어 쿼리를 정의합니다. 원하는 조건에 따라 수정할 수 있습니다.
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // 뷰포트 크기에 따라 클래스를 추가 또는 제거합니다.
    const on = document.querySelector(".sec2__description");
    const off = document.querySelector(".sec2__description--off");

    if (mediaQuery.matches) {
        on.style.display = "none";
        off.style.display = "block";
    } else {
        on.style.display = "block";
        off.style.display = "none";

    }
}

// 페이지 로드 시 클래스를 추가 또는 제거합니다.
addOrRemoveResponsiveClass();

// 뷰포트 크기가 변경될 때마다 클래스를 추가 또는 제거합니다.
window.addEventListener("resize", addOrRemoveResponsiveClass);