const Map = () => {
  const myMap = new ymaps.Map(`map`, {
      center: [55.767473, 37.632682],
      zoom: 18,
      controls: [`zoomControl`]
  });

  const myPlacemark = new ymaps.Placemark([55.767473, 37.632682], null,{
    iconLayout: 'default#image',
    iconImageHref: "img/pin.png",
    iconImageSize: [40, 57],
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(Map);
