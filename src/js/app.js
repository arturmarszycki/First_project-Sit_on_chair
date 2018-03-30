$(function () {

    var menu = $('.drop-down-menu');
    $('.drop-parent, .drop-down-menu').hover(
        function() {
            menu.stop().slideDown();
        },
        function() {
            menu.stop().slideUp();
        }
    );

    $('.move-left').click(function() {
        $('.slider-black').toggle('slide');
        $('.slider-red').toggle('slide');
        $('.slider-red').css('display', 'flex');
    });
    $('.move-right').click(function() {
        $('.slider-black').toggle('slide');
        $('.slider-red').toggle('slide');
        $('.slider-red').css('display', 'flex');
    });

    $('.picture').eq(0).mouseover(function() {
        $(this).find('.picture-header').slideUp();
    });
    $('.picture').eq(1).mouseover(function() {
        $(this).find('.picture-header').slideUp();
    });
    $('.picture').eq(0).mouseout(function() {
        $(this).find('.picture-header').slideDown();
    });
    $('.picture').eq(1).mouseout(function() {
        $(this).find('.picture-header').slideDown();
    });

    $('.offert').mouseover(function() {
        $(this).css({'background-color': '#4fd4a9', 'border': '2px solid #4fd4a9'});
        $(this).find('.offert-kind').css('color', '#fff');
        $(this).addClass('change');
        $(this).find('.offert-price').addClass('change-small');
        $(this).find('.offert-price').css({'color': '#4fd4a9', 'border': '2px solid #4fd4a9'});
        $(this).find('button').css({'color': '#4fd4a9', 'background-color': '#fff'});
        $(this).find('ul li').eq(0).css('background-color', '#fff');
        $(this).find('ul li').eq(2).css('background-color', '#fff');
    });
    $('.offert').mouseout(function() {
        $(this).css({'background-color': '#f4f4f4', 'border': '2px solid #aaa'});
        $(this).find('.offert-kind').css('color', '#4fd4a9');
        $(this).removeClass('change');
        $(this).find('.offert-price').removeClass('change-small');
        $(this).find('.offert-price').css({'color': '#888', 'border': '2px solid #999'});
        $(this).find('button').css({'color': '#fff', 'background-color': '#4fd4a9'});
        $(this).find('ul li').eq(0).css('background-color', '#ddd');
        $(this).find('ul li').eq(2).css('background-color', '#ddd');
    });

    $('.agree-img').click(function(){
        $(this).find('img').toggle();
    });

});
