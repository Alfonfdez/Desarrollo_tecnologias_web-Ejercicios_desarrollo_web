$(function () {
    var $title = $('.js-title');
    var copy = '.js-copy';

    $title.click(function () {
        // $(this).next().slideToggle();
        $(this).next(copy).slideToggle();
        $(this).parent().siblings().children(copy).slideUp();
    });

})