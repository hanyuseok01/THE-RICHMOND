$(function() {
    /* $(selector).hover(mouseenterFunction, mouseleaveFunction);*/
    $('.depth1 > li').hover(
        function () {
            $('.sub').stop().fadeIn(300);
            $('.bg_gnb').stop().animate({ height: '240px' }, 300);
        },
        function () {
            $('.sub').stop().fadeOut(300);
            $('.bg_gnb').stop().animate({ height: '0' }, 300);
        }
    );
})
