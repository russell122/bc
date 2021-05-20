"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  if (!Array.prototype.flat) Array.prototype.flat = function () {
    return function f(arr) {
      return arr.reduce(function (a, v) {
        return Array.isArray(v) ? a.concat(f(v)) : a.concat(v);
      }, []);
    }(this);
  }; // Вызовы модалок

  var modalElem;
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-btn-modal]')) {
      e.preventDefault();
      var datTarget = e.target.closest('[data-btn-modal]').dataset.btnModal;

      switch (datTarget) {
        case 'modalFive':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '100%',
            content: $globalHtmlElements.modalFive
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'modalAutoriz':
          modalElem = $plugins.modal({
            title: ' ',
            closable: true,
            width: '100%',
            content: $globalHtmlElements.modalAutoriz
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        default:
          return;
      }
    }
  });
  var $globalHtmlElements = {};
  window.$globalHtmlElements = $globalHtmlElements; // Модальное окно нужное

  $globalHtmlElements.modalFive = "\n\t\t<div class=\"\"></div>\n\t\t<form class=\"modal__form\">\n\t\t\t<div class=\"form__block\">\n\t\t\t\t<h1 class=\"title-1\">\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F</h1>\n\t\t\t\t<div class=\"form__inputs\">\n\t\t\t\t\t<input type=\"text\" class=\"g-input\" placeholder=\"\u0418\u043C\u044F\" required name=\"name\">\n\t\t\t\t\t<input type=\"tel\" class=\"g-input\" placeholder=\"+7 (...) ...  ..  ..\" required name=\"mob\">\n\t\t\t\t\t<input type=\"email\" class=\"g-input\" placeholder=\"E-mail\" required name=\"mail\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form__btns\">\n\t\t\t\t\t<button type='submit' class=\"button\" data-btn-modal=\"modalAutoriz\">\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t"; // Модальное окно нужное

  $globalHtmlElements.modalAutoriz = "\n\t\t<div class=\"\"></div>\n\t\t<form class=\"modal__form2\">\n\t\t\t<div class=\"form__block2\">\n\t\t\t\t<h1 class=\"title-1\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0437\u0430\u044F\u0432\u043A\u0443!</h1>\n\t\t\t\t<div class=\"form__btns\">\n\t\t\t\t\t<a href=\"#\" class=\"button ex\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t"; // end modal
});
$(document).ready(function () {
  // Мобильное меню
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__right').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(".js-scroll-to-form").click(function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault(); //забираем идентификатор бока с атрибута href

    var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top; //анимируем переход на расстояние - top за 1000 мс

    $('body,html').animate({
      scrollTop: top
    }, 1000);
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});