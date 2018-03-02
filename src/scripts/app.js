$(function () {

    $('.nav-menu').children().mouseover(function() {
        $(this).find('.drop-down-menu').show();
    });
    $('.nav-menu').children().mouseout(function() {
        $(this).find('.drop-down-menu').hide();
    });


    $('.agree-img').click(function(){
        $(this).find('img').toggle();
    });

});
