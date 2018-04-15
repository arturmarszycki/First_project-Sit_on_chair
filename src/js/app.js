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



    $('.move-left').on('click', function() {
        $('.slider-content ul').animate({left: '-200%'}, 500, function() {
            $('.slider-content ul').css('left', '-100%');
            $('.slider-content ul li').first().before($('.slider-content ul li').last());
        })
    });
    $('.move-right').on('click', function() {
        $('.slider-content ul').animate({left: '0%'}, 500, function() {
            $('.slider-content ul').css('left', '-100%');
            $('.slider-content ul li').last().after($('.slider-content ul li').first());
        })
    });

    $('.picture').eq(0).on('mouseover', function() {
        $(this).find('.picture-header').slideUp();
    });
    $('.picture').eq(1).on('mouseover', function() {
        $(this).find('.picture-header').slideUp();
    });
    $('.picture').eq(0).on('mouseout', function() {
        $(this).find('.picture-header').slideDown();
    });
    $('.picture').eq(1).on('mouseout', function() {
        $(this).find('.picture-header').slideDown();
    });

    $('.offert').on('mouseover', function() {
        $(this).css({'background-color': '#4fd4a9', 'border': '2px solid #4fd4a9'});
        $(this).find('.offert-kind').css('color', '#fff');
        $(this).addClass('change');
        $(this).find('.offert-price').addClass('change-small');
        $(this).find('.offert-price').css({'color': '#4fd4a9', 'border': '2px solid #4fd4a9'});
        $(this).find('button').css({'color': '#4fd4a9', 'background-color': '#fff'});
        $(this).find('ul li').eq(0).css('background-color', '#fff');
        $(this).find('ul li').eq(2).css('background-color', '#fff');
    });
    $('.offert').on('mouseout', function() {
        $(this).css({'background-color': '#f4f4f4', 'border': '2px solid #aaa'});
        $(this).find('.offert-kind').css('color', '#4fd4a9');
        $(this).removeClass('change');
        $(this).find('.offert-price').removeClass('change-small');
        $(this).find('.offert-price').css({'color': '#888', 'border': '2px solid #999'});
        $(this).find('button').css({'color': '#fff', 'background-color': '#4fd4a9'});
        $(this).find('ul li').eq(0).css('background-color', '#ddd');
        $(this).find('ul li').eq(2).css('background-color', '#ddd');
    });
    $('.price-column h2').on('click', function() {
        $('.price-offerts').slideToggle(1000);
    });
    $('.order-left-header').on('click', function() {
        $('.order-right-header').fadeToggle(1000);
        $('.application').slideToggle(1000);
    });
    var listArrow = $('.list-arrow');
    listArrow.on('click', function() {
        $(this).next().toggle();
    });
    var sum = 0;
    var sumTitle = 0;
    var listOne = $('.panel-title li');
    listOne.on('click', function() {
        $('.label-title').text($(this).text());
        $('.panel-title').hide();
        if($('.label-title').text()==="Clair") {
            $('.image-part img').attr('src', 'images/box1_img.jpg');
            $('.chair-title').text('Twój fotel');
            $('.title-value').text('200');
            sumTitle = 200;
        } else if($('.label-title').text()==="Margarita") {
            $('.image-part img').attr('src', 'images/box2_img.jpg');
            $('.chair-title').text('Twój fotel');
            $('.title-value').text('260');
            sumTitle = 260;
        } else if($('.label-title').text()==="Selena") {
            $('.image-part img').attr('src', 'images/red_chair.png');
            $('.chair-title').text('Twój fotel');
            $('.title-value').text('310');
            sumTitle = 310;
        }
        sum = sumTitle + sumColor + sumPattern + sumTransport;
        $('.sum-value').text(sum);
    });
    var sumColor = 0;
    var listTwo = $('.panel-color li');
    listTwo.on('click', function() {
        $('.label-color').text($(this).text());
        $('.panel-color').hide();
        if($('.label-color').text()==="Czerwony") {
            $('.chair-color').text('czerwony');
            $('.color-value').text('20');
            sumColor = 20;
        } else if($('.label-color').text()==="Czarny") {
            $('.chair-color').text('czarny');
            $('.color-value').text('0');
            sumColor = 0;
        } else if($('.label-color').text()==="Pomarańczowy") {
            $('.chair-color').text('pomarańczowy');
            $('.color-value').text('50');
            sumColor = 50;
        }
        sum = sumTitle + sumColor + sumPattern + sumTransport;
        $('.sum-value').text(sum);
    });
    var sumPattern = 0;
    var listThree = $('.panel-pattern li');
    listThree.on('click', function() {
        $('.label-pattern').text($(this).text());
        $('.panel-pattern').hide();
        if($('.label-pattern').text()==="Tkanina") {
            $('.chair-pattern').text('tkanina');
            $('.pattern-value').text('0');
            sumPattern = 0;
        } else if($('.label-pattern').text()==="Skóra") {
            $('.chair-pattern').text('skóra');
            $('.pattern-value').text('120');
            sumPattern = 120;
        }
        sum = sumTitle + sumColor + sumPattern + sumTransport;
        $('.sum-value').text(sum);
    });
    var sumTransport = 0;
    var transport = $('#transport');
    transport.on('click', function() {
        if($(this).is(':checked')) {
            transport.prop('checked', true);
            $('.chair-transport').text('transport');
            $('.transport-value').text(transport.data('transportPrice'));
            sumTransport = 200;
        } else {
            transport.prop('checked', false);
            $('.chair-transport').text(null);
            $('.transport-value').text(null);
            sumTransport = 0;
        }
        sum = sumTitle + sumColor + sumPattern + sumTransport;
        $('.sum-value').text(sum);
    });

    $('.order-button').on('click', function() {
        location.reload(true);
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var agree = $('#agree').is(':checked');
        var fine = true;
        if(name.length < 2) {
            $('.name-warn').css('visibility', 'visible');
            fine = false;
        } else {
            $('.name-warn').css('visibility', 'hidden');
        }
        if(email.indexOf('@') === -1) {
            $('.email-warn').css('visibility', 'visible');
            fine = false;
        } else {
            $('.email-warn').css('visibility', 'hidden');
        }
        if(message.length < 7) {
            $('.message-warn').css('visibility', 'visible');
            fine = false;
        } else {
            $('.message-warn').css('visibility', 'hidden');
        }
        if(!agree) {
            $('.agree-warn').css('visibility', 'visible');
            fine = false;
        } else {
            $('.agree-warn').css('visibility', 'hidden');
        }
        if(fine) {
            $('.send-info').css('visibility', 'visible');
            $('#name').val("");
            $('#email').val("");
            $('#message').val("");
            $('#agree').prop('checked', false);
        }
    })



});
