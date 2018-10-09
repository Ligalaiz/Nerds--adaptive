"use strict";

$('[data-fancybox]').fancybox({
    smallBtn: "false",
    buttons: [
        "close"
      ],
    touch: {
      vertical: false,
      momentum: false
    }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true
  });
});
