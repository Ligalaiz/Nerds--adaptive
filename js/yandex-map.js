"use strict";

(function() {

ymaps.ready(init);

function init () {
  var myMap;
  myMap = new ymaps.Map('map', {
    center:[59.939115, 30.321480],
    zoom:17,
    controls: []
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.controls.add("zoomControl", {
    position: {top: 10, right: 15}
  });

  var myPlacemark = new ymaps.Placemark([59.938730, 30.323086] , {},
      { iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        iconImageSize: [367, 190],
        iconImageOffset: [-185, -190]
      });

  myMap.geoObjects.add(myPlacemark);
}
})();




$(document).ready(function () {
  var contacts = document.querySelector(".contacts");
  if (window.innerWidth < 530) {
      contacts.removeAttribute('id');
  }
});

// 
// $(window).addEventListener("resize", function() {
//   var contacts = document.querySelector(".contacts");
//   if (window.innerWidth < 530) {
//       contacts.getAttribute('id');
//     }
// }, false);


// $(window).resize(function() {
// var contacts = document.querySelector(".contacts");
// if (document.documentElement.clientWidth > 530) {
//     contacts.getAttribute('id');
//   }
// });
//
// $(window).resize(function() {
// var contacts = document.querySelector(".contacts");
// if (document.documentElement.clientWidth < 530) {
//     contacts.removeAttribute('id');
// }
// });
