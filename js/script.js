$(document).ready(function () {
    $(".header-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        navText: ''
    });
});
$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show');
});