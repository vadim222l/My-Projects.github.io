$(document).ready(function(){
    $('.toggleMenu').click(function(){
        $('.main-menu-wrap').toggleClass('active');
        $('body').toggleClass('menu_opened');
    });

    

    $('.basic-slider').slick({
        dots:true,
    })
});

$(window).on('load',function(){
    $('.preloader').removeClass('active');
});