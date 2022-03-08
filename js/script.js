$(document).ready(function () {

    $('.list-item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 725,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    infinite: true,
                },
            },
        ],
    });
    $('.header-mobile-right-item').click(function (e) {
        e.preventDefault();
        $(this).find('.header-mobile-right-item-text').toggle('show');
        $(this).siblings().toggle('hide');
    });
    $("#nav-icon").click(function (e) {
        e.preventDefault();
        $('.navbar').addClass('active');
    });

    $("#close").click(function (e) {
        e.preventDefault();
        $('.navbar').removeClass('active');
    });







});