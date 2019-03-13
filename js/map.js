    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.850479, 37.537955],
                zoom: 17
            }, {
                searchControlProvider: 'yandex#search'
            }),
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Наш адрес!'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'https://hursevichsergey.github.io/Finally_site-extra//img/footer/pin.png',
                // Размеры метки.
                iconImageSize: [62, 62],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [15, -43]
            }),
            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                //iconImageHref: 'images/ball.png',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
            myMap.behaviors.disable('scrollZoom');
            //myMap.behaviors.disable('multiTouch');
            myMap.behaviors.disable('drag');
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    })
