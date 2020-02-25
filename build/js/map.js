"use strict";

var Map = function Map() {
  var myMap = new ymaps.Map("map", {
    center: [55.780319, 37.632098],
    zoom: 18,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.780406, 37.632287], null, {
    iconLayout: 'default#image',
    iconImageHref: "img/pin.png",
    iconImageSize: [40, 57]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(Map);