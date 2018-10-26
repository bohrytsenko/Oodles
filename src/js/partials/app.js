$( document ).ready(function() {

    // Navigation


    $('.header_wrap__icon a').on('click', function () {
        $('.header__over').toggleClass('header_over_active');
        $('.header__navigation').toggleClass('header__fixed');
    });

    $('.header__over').on('click', function () {
        $(this).removeClass('header_over_active');
        $('.header__navigation').removeClass('header__fixed');
    });
});


