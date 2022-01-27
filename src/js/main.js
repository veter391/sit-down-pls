window.addEventListener('DOMContentLoaded', function () {
  new LazyLoad({
    elements_selector: '.lazy' ,
  });

  if (typeof Swiper !== 'undefined') {
    // Swiper hero
    new Swiper('.hero__swiper', {
        // Optional parameters
        direction: 'horizontal',
        effect: 'fade',
        speed: 750,
        fadeEffect: {
          crossFade: true,
        },

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function(index, className) {
              return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="16" height="16" viewBox="0 0 24 24"><circle class="svg__circle" cx="12" cy="12" r="10" fill="#7033AC" stroke-width="3"></circle></svg></span>';
          },
        },

        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
      });

      // Swiper offer
    new Swiper('.offer__swiper', {
        // Optional parameters
        direction: 'horizontal',

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          // when window width is >= 320px
          0: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          701: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          961: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1352: {
            allowTouchMove: false,
            spaceBetween: 32,
            slidesPerView: 'auto',
            slidesPerGroup: 3,
          },
        },
      });

      // Swiper useful
    new Swiper('.useful__swiper', {
        // Optional parameters
        direction: 'horizontal',
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          0: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          701: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          769: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1025: {
            allowTouchMove: false,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 32,
          },
        },
      });
      // Swiper catalog
    new Swiper('.catalog-swiper', {
        // Optional parameters
        direction: 'horizontal',
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },
          breakpoints: {
            // when window width is >= 320px
            0: {
              slidesPerGroup: 2,
              spaceBetween:16,
              slidesPerView: 2,
              grid: {
                rows: 3
              },
            },
            610: {
              slidesPerGroup: 3,
              spaceBetween:16,
              slidesPerView: 3,
              grid: {
                rows: 3
              },
            },
            700: {
              slidesPerGroup: 1,
              spaceBetween:32,
              slidesPerView: 1,
              grid: {
                rows: 3
              }
            },
            752: {
              slidesPerGroup: 2,
              spaceBetween:16,
              slidesPerView: 2,
              grid: {
                rows: 3
              }
            },
            768: {
              slidesPerGroup: 2,
              spaceBetween:32,
              slidesPerView: 2,
              grid: {
                rows: 3
              }
            },
            1000: {
              slidesPerGroup: 3,
              spaceBetween:20,
              slidesPerView: 3,
              grid: {
                rows: 3
              }
            },
            1024: {
              slidesPerGroup: 3,
              spaceBetween:32,
              slidesPerView: 3,
              grid: {
                rows: 3
              }
            },
            1025: {
              slidesPerGroup: 2,
              spaceBetween:32,
              slidesPerView: 2,
              grid: {
                rows: 3
              }
            },
            1420: {
              slidesPerGroup: 3,
              spaceBetween:32,
              slidesPerView: 3,
              grid: {
                rows: 3
              }
            },
          },
      });
      // swiper product
    new Swiper('.product__swiper', {
        // Optional parameters
        direction: 'horizontal',

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          // when window width is >= 320px
          0: {
            allowTouchMove: true,
            spaceBetween: 16,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 3,
            slidesPerGroup:3,
          },
          1352: {
            allowTouchMove: true,
            spaceBetween: 32,
            slidesPerView: 4,
            slidesPerGroup:4,
          },
        },
      });
    new Swiper('.product__left-swiper', {
        // Optional parameters
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
          breakpoints: {
          //   // when window width is >= 320px
            0: {
              slidesPerGroup: 1,
              spaceBetween:78,
              slidesPerView: 1,
            },
            601: {
              slidesPerGroup: 1,
              spaceBetween:78,
              slidesPerView: 2,
            },
            961: {
              slidesPerGroup: 1,
              spaceBetween:78,
              slidesPerView: 3,
            },
            1025: {
              slidesPerGroup: 1,
              spaceBetween:78,
              slidesPerView: 4,
            },
          },
      });
  }
        // Maps
  if (typeof ymaps !== 'undefined') {
    ymaps.ready(init);
    function init(){
      var arr = [
        "<h3 style='margin:0; font-size: 16px;font-style: normal;font-weight: 400;line-height: 22px;'>Москва, SitDownPls на Солянке</h3><small style='display:block;font-size: 12px;font-style: normal;font-weight: 400;line-height: 22px; color:#999999;'>м. Китай-город, ул. Солянка, д.24</small>",
        "<h3 style='margin:0; font-size: 16px;font-style: normal;font-weight: 400;line-height: 22px;'>Москва, SitDownPls на Покровке</h3><small style='display:block;font-size: 12px;font-style: normal;font-weight: 400;line-height: 22px; color:#999999;'>м. Курская, ул. Покровка, д.14</small>"     
        ];
      var arrSearch = [
        { 
          coords: [55.754365, 37.633886],
          textStyle : 'Москва, SitDownPls на Солянке'
        },{ 
          coords: [55.758468, 37.658760], 
          textStyle : 'Москва, SitDownPls на Покровке'     
        }];
        var find = function (arr, find) {
          return arr.filter(function (value) {
              return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
          });
        };
        $('#mapBtn').on('click' , function(e) {
          e.preventDefault();
          if ($('#suggest').val() == arrSearch[0].textStyle) {
            myMap.setCenter(arrSearch[0].coords, 16);
            myPlacemark.balloon.open();
          } else if ($('#suggest').val() == arrSearch[1].textStyle) {
            myMap.setCenter(arrSearch[1].coords, 16);
            myGeoObject.balloon.open();
          }
        });
        var myProvider = {
          suggest: function (request, options) {
              var res = find(arr, request),
                  arrayResult = [],
                  results = Math.min(options.results, res.length);
              for (var i = 0; i < results; i++) {
                  arrayResult.push({displayName: res[i], value: arrSearch[i].textStyle})
              }
              return ymaps.vow.resolve(arrayResult);
          }
        }
        new ymaps.SuggestView('suggest', {provider: myProvider, results: 2});
        var myMap = new ymaps.Map("map", {
          center: [55.756107, 37.622729],
            // center: [55.754365, 37.633886],
            zoom: 14 ,
            controls: []
        }),
        myPlacemark = new ymaps.Placemark([55.754365, 37.633886], {
          // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
          balloonContentHeader: "SitDownPls на Солянке ",
          balloonContentBody: "<div style='margin-bottom:8px;'>м. Китай-город, ул. Солянка, д.24</div><a class='header__phone' style='margin-bottom:13px;' href='tel:+74958854547' aria-label='номер телефона'><svg width='17px' height='17px' class='header__phone-icon' aria-hidden='true'><use xlink:href='img/sprite.svg#phone'></use></svg>+7 (495) 885-45-47</a><div style='height:1px; width:100%; background:#F7F7F7; margin-bottom:12px;'></div><p style='max-width:283px; margin-bottom:12px; font-size: 14px;font-style: normal;font-weight: 400;line-height: 25px;letter-spacing: 0em;text-align: left;'><span  style='color:#999999;'>Часы работы</span>: с 10:00 до 21:00</p><div style='height:1px; width:100%; margin-bottom:9px; background:#F7F7F7;'></div>",
          balloonContentFooter: "<p style='max-width:283px;font-size: 14px;font-style: normal;font-weight: 400;line-height: 25px;letter-spacing: 0em;text-align: left;color:#333333;'><span  style='color:#999999;'>Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>",
          hintContent: "SitDownPls"
      },{
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/no_error.svg',
        // Размеры метки.
        iconImageSize: [32, 22],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-16, -11]
    }),
    myGeoObject = new ymaps.Placemark([55.758468, 37.658760], {
      // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
      balloonContentHeader: "Москва, SitDownPls на Покровке",
      balloonContentBody: "<div style='margin-bottom:8px;'>м. Курская, ул. Покровка, д.14</div><a class='header__phone' style='margin-bottom:13px;' href='tel:+74958854547' aria-label='номер телефона'><svg width='17px' height='17px' class='header__phone-icon' aria-hidden='true'><use xlink:href='img/sprite.svg#phone'></use></svg>+7 (495) 885-45-47</a><div style='height:1px; width:100%; background:#F7F7F7; margin-bottom:12px;'></div><p style='max-width:283px; margin-bottom:12px; font-size: 14px;font-style: normal;font-weight: 400;line-height: 25px;letter-spacing: 0em;text-align: left;'><span  style='color:#999999;'>Часы работы</span>: с 10:00 до 21:00</p><div style='height:1px; width:100%; margin-bottom:9px; background:#F7F7F7;'></div>",
      balloonContentFooter: "<p style='max-width:283px;font-size: 14px;font-style: normal;font-weight: 400;line-height: 25px;letter-spacing: 0em;text-align: left;color:#333333;'><span  style='color:#999999;'>Что здесь:</span>шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p>",
      hintContent: "SitDownPls"
  },{
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/no_error.svg',
    // Размеры метки.
    iconImageSize: [32, 22],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-16, -11]
});
      myMap.geoObjects.add(myPlacemark).add(myGeoObject);
    }
  }


  // Header Dropdown
  $('.header__dropdown').on('click' , function() {
    if ($(this).hasClass( 'dropdown_is_active' )) {
      $('.header__dropdown-list').fadeOut(300);
      $(this).removeClass('dropdown_is_active');
    } else {
      $(this).addClass('dropdown_is_active');
      $('.header__dropdown-list').css("display", "grid").hide().fadeIn(300);
    }
  });

  // add card
  $('.add-card').on('click' , function() {
    if ($(this).hasClass( 'dropdown_is_active' )) {
      $('.card-hidden').fadeOut(300);
    } else {
      $('.calificaciones__last-box').fadeOut(300);
      $('.card-hidden').fadeIn(300);
    }
  });

  //header btn
  $('.hero__btn').on('click' , function () {
    $(this).prop( "disabled", true );
  });

  // Validate form and mask(tel)
  if ($("input").is("input[type='tel']")) {
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999)-999-99-99");

    im.mask(selector);

    new JustValidate('.contacts__form' , {
      rules: {
        checkbox: {
          required: true
        },
        name: {
          required:true,
          minLength: 2,
          maxLenght: 20
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
        email: {
          required: true,
          email: true ,
        },
      },
      messages: {
        checkbox: {
          required: 'Поставьте галочку*',
        },
        name: {
          required: 'Укажите ваше Имя*',
          minLength: '(Min) количество символов 2',
          maxLength: '(Max) количество символов 20',
          },
        tel: {
          required: 'Укажите ваш Телефон*',
          function: 'Введите верный номер',
        },
        email: {
          required: 'Укажите ваш E-mail*',
          email: 'Введите верный E-mail',
        }
      },
      submitHandler: function(form){
        console.log("Отправка запроса");
        $('.form-response').css("display", "flex").hide().fadeIn();
        let formData = new FormData(form);

        let req = new XMLHttpRequest();

        req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        let json = JSON.parse(this.response); // internet explorer 11
            console.log(json);
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
              // Если сообщение отправлено
              console.log("Сообщение отправлено");
              $('.send-form-btn').attr('disabled', true);
              $('.send-form-btn').css({"background-color": "#dfdfdf", "color": "a7a7a7"});
              $('.form-response').css('color', 'rgb(51, 139, 16)');
              $('.form-response').text('Спасибо, мы вам перезвоним!');
              $('.form-response').css('background-image', 'url(img/no_error.svg)');
              $('.form-response').delay(3000).fadeOut(1000);
            } else {
              // Если произошла ошибка
              console.log("Ошибка. Сообщение не отправлено!");
              $('.form-response').css('color', 'red');
              $('.form-response').text('Ошибка. Сообщение не отправлено!');
              $('.form-response').css('background-image', 'url(img/error.svg)');
              $('.form-response').delay(3000).fadeOut(1000);
            }
          // Если не удалось связаться с php файлом
          } else {
            console.log("Ошибка сервера. Номер: " + req.status);
            $('.form-response').css('color', 'red');
            $('.form-response').text("Ошибка сервера. Номер: " + req.status);
            $('.form-response').css('background-image', 'url(img/error.svg)');
            $('.form-response').delay(3000).fadeOut(1000);
          }
        };

        req.open('POST', 'sendmail.php', true);
        req.send(formData);
        req.onerror = function() {
          console.log("Ошибка отправки запроса");
        };

        form.reset();
      }
    });
  }

  $('._my-btn').on('click' , function() {
    $('.my-input-custom').css('border' , '1px solid #B8EC64');
  });

  $('.burger').on('click' , function() {
    if($(this).hasClass( "burger-active" )) {
      $(this).removeClass('burger-active');
      $('.burgerdown').fadeOut(300);
    } else {
      $(this).addClass('burger-active');
      $('.burgerdown').fadeIn(300);
    }
  });

  $('.header__start-page').on('click' , function() {
    window.location.href = 'index.html';
  });
  // prices filter
  if ($('.wrapper').hasClass('wrapper-catalog')) {

  $(".filter__prices-line").slider({
    min: 2000,
    max: 180000,
    values: [2000, 150000],
    step: 500,
    range: true,
    animate: "fast",
    slide : function(event, ui) {
      $(".filter__prices-input-left").val(ui.values[ 0 ].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
      $(".filter__prices-input-right").val(ui.values[ 1 ].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

      $(".catalog__nav-input-left").val(ui.values[ 0 ].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
      $(".catalog__nav-input-right").val(ui.values[ 1 ].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

      $('#catalog__title-price > .catalog__title-info').text('До ' + $(".filter__prices-input-right").val());
    }
  });
  $(".filter__prices-input-left").val($(".filter__prices-line").slider("values", 0).toString().replace(/\B(?=(\d{4})+(?!\d))/g, " "));
  $(".filter__prices-input-right").val($(".filter__prices-line").slider("values", 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

  $(".catalog__nav-input-left").val($(".filter__prices-line").slider("values", 0).toString().replace(/\B(?=(\d{4})+(?!\d))/g, " "));
  $(".catalog__nav-input-right").val($(".filter__prices-line").slider("values", 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

  $('#catalog__title-price > .catalog__title-info').text('До ' + $(".filter__prices-input-right").val());
  $(".filter__prices input").change(function() {
      var input_left = $(".filter__prices-input-left").val().replace(/[^0-9]/g, ''),
      opt_left = $(".filter__prices-line").slider("option", "min"),
      where_right = $(".filter__prices-line").slider("values", 1),
      input_right = $(".filter__prices-input-right").val().replace(/[^0-9]/g, ''),
      opt_right = $(".filter__prices-line").slider("option", "max"),
      where_left = $(".filter__prices-line").slider("values", 0);
      if (input_left > where_right) {
          input_left = where_right;
      }
      if (input_left < opt_left) {
          input_left = opt_left;
      }
      if (input_left == "") {
      input_left = 0;
      }
      if (input_right < where_left) {
          input_right = where_left;
      }
      if (input_right > opt_right) {
          input_right = opt_right;
      }
      if (input_right == "") {
      input_right = 0;
      }
      $(".filter__prices-input-left").val(input_left);
      $(".filter__prices-input-right").val(input_right);
      if (input_left != where_left) {
          $(".filter__prices-line").slider("values", 0, input_left);
      }
      if (input_right != where_right) {
          $(".filter__prices-line").slider("values", 1, input_right);
      }
      $('#catalog__title-price').fadeIn(0)
      $('#catalog__title-price > .catalog__title-info').text('До ' + $(".filter__prices-input-right").val());
    });
  $(".catalog__nav-list input").change(function() {
        var input_left = $(".catalog__nav-input-left").val().replace(/[^0-9]/g, ''),
        opt_left = $(".filter__prices-line").slider("option", "min"),
        where_right = $(".filter__prices-line").slider("values", 1),
        input_right = $(".catalog__nav-input-right").val().replace(/[^0-9]/g, ''),
        opt_right = $(".filter__prices-line").slider("option", "max"),
        where_left = $(".filter__prices-line").slider("values", 0);
        if (input_left > where_right) {
            input_left = where_right;
        }
        if (input_left < opt_left) {
            input_left = opt_left;
        }
        if (input_left == "") {
        input_left = 0;
        }
        if (input_right < where_left) {
            input_right = where_left;
        }
        if (input_right > opt_right) {
            input_right = opt_right;
        }
        if (input_right == "") {
        input_right = 0;
        }
        $(".catalog__nav-input-left").val(input_left);
        $(".catalog__nav-input-right").val(input_right);
        if (input_left != where_left) {
            $(".filter__prices-line").slider("values", 0, input_left);
        }
        if (input_right != where_right) {
            $(".filter__prices-line").slider("values", 1, input_right);
        }
        $('#catalog__title-price > .catalog__title-info').text('До ' + $(".catalog__nav-input-right").val());
    });

    $('.ui-slider-handle').on('click' , function() {
      if ($(this).hasClass('focus-visible')) {
        $('.ui-slider-range').css('background-color' , '#7033AC');
      }
    }).blur(function() {
      $('.ui-slider-range').css('background-color' , '#A65CF0');
    });
    $('.ui-slider-handle').on('focus' , function() {
        $('.ui-slider-range').css('background-color' , '#7033AC');
    }).blur(function() {
      $('.ui-slider-range').css('background-color' , '#A65CF0');
      $('#catalog__title-price').fadeIn(0)
    });
    // catalog btn
    $('.catalog__nav-btn').on('click' , function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).css('border-color' , 'transparent');
        $(this).children('.catalog__nav-btn-icon').css('transform' , 'none')
        $(this).siblings('.catalog__nav-list').slideUp(200);
        // fadeOut(200)
      } else {
        $(this).addClass('active');
        $(this).css('border-color' , '#7033AC');
        $(this).children('.catalog__nav-btn-icon').css('transform' , 'rotate(180deg)')
        $(this).siblings('.catalog__nav-list').slideDown(200);
        // fadeIn(200)
      }
    });

  } else {
    $(".header__scrollTop").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top -30 }, 1500);
    });
  }


  $('.add-category').on('click' , function() {
    if ($(this).hasClass('add-active')) {
      $(this).removeClass('add-active');
      $(this).html('+ ещё 12');
      $('.filter__category-item-hidden').fadeOut(0);
    } else {
      $(this).addClass('add-active');
      $(this).html('Свернуть');
      $('.filter__category-item-hidden').fadeIn(100);
    }
  });

  $('.add-color').on('click' , function() {
    if ($(this).hasClass('add-active')) {
      $(this).removeClass('add-active');
      $(this).html('+ ещё 7');
      $('.filter__color-item-hidden').fadeOut(0);
    } else {
      $(this).addClass('add-active');
      $(this).html('Свернуть');
      $('.filter__color-item-hidden').fadeIn(100);
    }
  });

  // category link
  $('.category__link').on('click' , function() {
    const sendData = $(this).data('category');
    localStorage.setItem("catalogText", sendData);
    localStorage.setItem("linkState", "none");
  });
  // category__nav-link
  $('.category__nav-link').on('click' , function() {
    const sendData = $(this).data('parent');
    const sendSubData = $(this).data('category');
    localStorage.setItem("subCatalogText", sendSubData);
    localStorage.setItem("catalogText", sendData);
    localStorage.setItem("linkState", "flex");
  });

  if ($('.wrapper').hasClass('wrapper-catalog')) {
    const takeData = localStorage.getItem("catalogText");
    const takeSubData = localStorage.getItem("subCatalogText");
    const linkState = localStorage.getItem("linkState");
    $('.breadcrumps__catalog-category').text(takeData);
    $('.breadcrumps__catalog-subcategory').text(takeSubData);
    $('.breadcrumps__catalog-subcategory-hidden').css('display' , linkState);

    if (takeData == null) {
      $( '#catalog__title-category > .catalog__title-info' ).text('Диваны');
      $( '.breadcrumps__catalog-category' ).text('Диваны');
      $( '.breadcrumps__catalog-subcategory-hidden' ).css('display' , 'flex');
      $( '.breadcrumps__catalog-subcategory' ).text('Прямые диваны');
    }
    
  }

  //Breadcrumps
  if ($('.breadcrumps__item:nth-child(2)').css("display") == null) {
    $('.breadcrumps__item:nth-child(1)').css('color' , '#7033AC')
  } else if ($('.breadcrumps__item:nth-child(3)').css("display") == null) {
    $('.breadcrumps__item:nth-child(2)').css('color' , '#7033AC')
  } else if ($('.breadcrumps__item:nth-child(4)').css("display") == null) {
    $('.breadcrumps__item:nth-child(3)').css('color' , '#7033AC')
  } else if ($('.breadcrumps__item:nth-child(5)').css("display") == null) {
    $('.breadcrumps__item:nth-child(4)').css('color' , '#7033AC')
  } else {
    $('.breadcrumps__item:nth-child(5)').css('color' , '#7033AC')
  }



  if(window.matchMedia('(max-width: 1351px)').matches){
    /* the viewport is at least 1024 px */
    $(".calificaciones__list .card:nth-child(7) , .calificaciones__list .card:nth-child(8)").addClass('card-hidden');
  } else if(window.matchMedia('(max-width: 900px)').matches){

  }
  $(window).resize(function() {
    var wSize = $(window).width();
    if (wSize <= 1351) {
      $(".calificaciones__list .card:nth-child(7) , .calificaciones__list .card:nth-child(8)").addClass('card-hidden');
    } else if (wSize >= 1024) {
      $(".calificaciones__list .card:nth-child(7) , .calificaciones__list .card:nth-child(8)").removeClass('card-hidden');
    }
  });
  });
    // checkbox click
  $('.catalog-checkbox').on('click' , function() {
    const coloring          = getRandomColor();
    const myText            = $(this).parent().text();
    const parent_category   = $(this).parent().parent().parent().hasClass('filter__category');
    const parent_offer      = $(this).parent().parent().parent().hasClass('filter__discount');
    const parent_color      = $(this).parent().parent().parent().hasClass('filter__color')


    console.log(myText);
    function getRandomColor() {
      const letters = 'BCDEF'.split('');
      let color     = '#';
      let count = {}

      for (let i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * letters.length)];
      }


      for (let i = 0; i < color.length; i++) {
        if (count[color[i]]) {
          count[color[i]]++;
        } else {
          count[color[i]] = 1;
        }
      }
      for (let x in count) {
        if (count[x] == 3) {
          if (x == 'F' || x == 'E') {
            return getRandomColor();
          }
        }
      }
        return color;
    }

    if ( parent_category ) {
        // filter category
      if ( $( this ).is( ':checked' ) ) {
        $('.catalog__title-list').append("<li class='catalog__title-item' style='background-color :" + coloring + ";'><span class='catalog__title-info'>" + myText + "</span><button class='catalog__title-btn' aria-label='Убрать фильтр'></button></li>")
      } else if ( $(this).hasClass('catalog-checkbox-firstCheck')) {
        $('#catalog__title-category').fadeOut(100).remove();
        $('.catalog__title-info:contains('+ myText +')').parent('.catalog__title-item ').fadeOut(100).remove();
      }
      else {
        $('.catalog__title-info:contains('+ myText +')').parent('.catalog__title-item ').fadeOut(100).remove();
      }
    } else if ( parent_offer ) {
      // filter offer
      $('#catalog__title-offer').fadeIn(0)
      $(".filter__discount .catalog-checkbox").prop('checked', false)
      $(this).prop('checked', true)
      $('#catalog__title-offer ').css('background-color' , coloring );

      if ($( this ).hasClass('_not-discount')) {
        $('#catalog__title-offer > .catalog__title-info').text('Без скидки');
      } else {
        $('#catalog__title-offer > .catalog__title-info').text(myText);
      }

    } else if ( parent_color ) {
          // filter color
      if ( $( this ).is( ':checked' ) ) {
        $('.catalog__title-list').append("<li class='catalog__title-item' style='background-color :" + coloring + ";'><span class='catalog__title-info'>" + myText + "</span><button class='catalog__title-btn' aria-label='Убрать фильтр'></button></li>")
      } 
      else {
        $('.catalog__title-info:contains('+ myText +')').parent('.catalog__title-item ').fadeOut(100).remove();
      }
    }
  });




    // checkbox cancel btn
  $('body').on('click' , '.catalog__title-btn' , function() {
    const delet_text        = $(this).parent('.catalog__title-item').text();

    if ($(this).parent().hasClass('catalog__title-category')) {
      if ($(this).parent().text() == 'Диваны ') {
        $(".filter__label-checkbox:contains(' Диваны') .catalog-checkbox").prop('checked', false);
        $(this).parent('.catalog__title-item').fadeOut(100).remove();
      } else if ($(this).parent().text() == 'Кресла '){
        $(".filter__label-checkbox:contains(' Кресла') .catalog-checkbox").prop('checked', false);
        $(this).parent('.catalog__title-item').fadeOut(100).remove();
      } else if ($(this).parent().text() == 'Кровати '){
        $(".filter__label-checkbox:contains(' Кровати') .catalog-checkbox").prop('checked', false);
        $(this).parent('.catalog__title-item').fadeOut(100).remove();
      } else if ($(this).parent().text() == 'Тумбы '){
        $(".filter__label-checkbox:contains(' Тумбы') .catalog-checkbox").prop('checked', false);
        $(this).parent('.catalog__title-item').fadeOut(100).remove();
      } else if ($(this).parent().text() == 'Комоды '){
        $(".filter__label-checkbox:contains(' Комоды') .catalog-checkbox").prop('checked', false);
        $(this).parent('.catalog__title-item').fadeOut(100).remove();
      } else {
        $(".filter__label-checkbox:contains(' Стулья') .catalog-checkbox").prop('checked', false);
        $(this).parent('.catalog__title-item').fadeOut(100).remove();
      }
    }
    else if ($(this).parent().hasClass('catalog__title-color')) {
      $(".filter__label-checkbox:contains(' Оранжевый') .catalog-checkbox").prop('checked', false);
      $(this).parent('.catalog__title-item').remove();
    } else if ($(this).parent().is("#catalog__title-offer")) {
      $('#catalog__title-offer').fadeOut(100)
      $(".filter__discount .catalog-checkbox").prop('checked', false)
    } else if ($(this).parent().is("#catalog__title-price")) {
      $('#catalog__title-price').fadeOut(100)
    } else {
      $('.filter__label-checkbox:contains('+ delet_text +') .catalog-checkbox').prop('checked', false);
      $(this).parent('.catalog__title-item').fadeOut(100).remove();
    }
  });


  $('.catalog-checkbox-checked').on('click' , function() {
    if ($(this).prop('checked' ) == false) {
      $('#catalog__title-color').remove();
    }
  });

  $(".card-btn").on('click', function(){
    window.location = "product.html";

    let this_stars , this_codeName , this_price , this_title;
    if ($(this).hasClass('card-btn-offer')) {
      this_stars      = '';
      this_codeName   = $(this).data('code');
      this_price      = $(this).parent('.card').children('.card__price-box').children('.card__price_new').text();
      this_title      = $(this).parent('.card').children('.card__title').children('a').text();
    } else {
      this_stars      = $(this).parent('.card').children('.card__star').children('.card__star-counter').text();
      this_codeName   = $(this).data('code');
      this_price      = $(this).parent('.card').children('.card__cnt-box').children('.card__price').text();
      this_title      = $(this).parent('.card').children('.card__cnt-box').children('.card__title').children('a').text();
    }

    localStorage.setItem("stars", this_stars);
    localStorage.setItem("code", this_codeName );
    localStorage.setItem("price", this_price);
    localStorage.setItem("title", this_title);
  });


  // product modal window , slide item click function
  $('.product__left-slide').on('click' , function(){
    const srcset      = $(this).children('picture').children('source').data('srcsetmy');
    const src         = $(this).children('picture').children('img').data('srcmy');
    const srcset_img  = $(this).children('picture').children('img').data('srcsemy');
    

    $('.product__modal-picture').children('source').attr('srcset' , srcset);
    $('.product__modal-picture').children('img').attr('src' , src);
    $('.product__modal-picture').children('img').attr('srcset' , srcset_img);
  });

  $('.product__img-view').on('click' , function() {
    const srcset_view      = $(this).parent().children('source').data('srcsetmy');
    const src_view         = $(this).parent().children('img').data('srcmy');
    const srcset_img_view  = $(this).parent().children('img').data('srcsemy');

    // $('.product__picture-slider').css('display' , 'none')
    $('.product__picture-slider').children('source').attr('srcset' , srcset_view);
    $('.product__picture-slider').children('img').attr('src' , src_view);
    $('.product__picture-slider').children('img').attr('srcset' , srcset_img_view);
  });


  if ($('.wrapper').hasClass('wrapper-products')) {
    const star  = localStorage.getItem("stars");
    const code  = localStorage.getItem("code");
    const price = localStorage.getItem("price");
    const title = localStorage.getItem("title");
    
    if (star == null || code == null || price == null || title == null) {
    }else if (star != '') {
      $('.product__title').text(title);
      $('.product__counter').text(star);
      $('.breadcrumps__product-code').text(code);
      $('.product__price').text(price);
    }else {
      $('.product__title').text(title);
      $('.product__price').text(price);
      $('.breadcrumps__product-code').text(code);
      $('.product__price').css('color' , '#FF862F');
    }

  }

    // product.html modal window
  $('.product__img-slider').on('click' , function() {
    $('.product__modal-box').css("display", "flex").hide().fadeIn(200);
    $('html , body').css('overflow' , 'hidden');
  });
  $('.product__modal-cancel').on('click' , function() {
    $('.product__modal-box').fadeOut(200);
    $('html , body').css('overflow' , 'initial');
  });
  $('.product__left-slide-btn').on('focus' , function() {
    $(this).parent('.product__left-slide').addClass('modal-left-parent-active');
  }).blur(function() {
    $('.product__left-slide').removeClass('modal-left-parent-active');
    if ($(this).parent().is(':last-child'))
        $('.product__modal-cancel').focus();
  });
    // product.html modal window form
  $('.product__btn').on('click' , function() {
    $('.product__modal-buy-box').css("display", "flex").hide().fadeIn(200);
    $('html , body').css('overflow' , 'hidden');
  });
  $('.product__modal-buy-cancel').on('click' , function() {
    $('.product__modal-buy-box').fadeOut(200);
    $('html , body').css('overflow' , 'initial');
  });
  $('.my-checkbox-buy').on('blur' , function() {
    $('.product__modal-buy-cancel').focus()
  });
  // preloader

  var preloader = document.getElementById("preloader_preload");

  function fadeOutnojquery(el){
    el.style.opacity = 1;
    var interpreloader = setInterval(function(){
      el.style.opacity = el.style.opacity - 0.05;
      if (el.style.opacity <=0.05){
        clearInterval(interpreloader);
        preloader.style.display = "none";
      }
    },16);}

    window.onload = function(){setTimeout(function(){
      fadeOutnojquery(preloader);
    },1600);


    const element = document.querySelector('.custom-select');
    new Choices(element, {
      searchEnabled: false
    });
};

