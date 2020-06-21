'use strict';

$(function(){
    let winScrollTop;
      $('.modal_btn').each(function(){
        $(this).on('click', function(){
          winScrollTop = $(window).scrollTop();
        let btnindex = $(this).index();
        $('.modal-area').eq(btnindex).fadeIn();
        });
      });
      
      $('.modal-close').on('click', function(){
        $('.modal-area').fadeOut();
        $('body, html').stop().animate({scrollTop: winScrollTop}, 100);
      });

});