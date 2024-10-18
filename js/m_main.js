$(function() {
    $(".btn_mobile").on('click', function() {
       if ($(".btn_sub").is(":visible")) {
          $(".btn_sub").fadeOut(300);
       } else {
          $(".btn_sub").fadeIn(300);
       }
    });
 });