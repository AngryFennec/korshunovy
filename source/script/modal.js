'use strict';

(function () {

  var button=document.querySelectorAll(".callback");
  var priceButton=document.querySelector(".name");
  var modal=document.querySelector(".feadback");
  var modalPrice=document.querySelector(".feadback-name");
  var closeButton=modal.querySelector(".feadback__close-button");
  var closeButton2=modalPrice.querySelector('.feadback__close-button-name');
  var flag=document.querySelector('#all-rooms');
  // калькулятор
  var callbackLegend=modalPrice.querySelector(".feadback__legend");
  var price=modalPrice.querySelector(".feadback__price");
  var priceLegend=modalPrice.querySelector(".feadback__legend--price");

  // калькулятор
  priceButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modalPrice.classList.remove("visually-hidden");
    if (flag.checked) {
      price.classList.add('visually-hidden');
      priceLegend.classList.add('visually-hidden');
      callbackLegend.classList.remove('visually-hidden');
    } else {
      price.classList.remove('visually-hidden');
      priceLegend.classList.remove('visually-hidden');
      callbackLegend.classList.add('visually-hidden');
    }
    modalPrice.querySelector(".feadback__form").submit();
  });

  //прочее
  closeButton2.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPrice.classList.add("visually-hidden");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal.classList.add("visually-hidden");
      modalPrice.classList.add("visually-hidden");
    }
  });

  for (var i = 0; i <= (button.length-1); i++) {
    button[i].addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("visually-hidden");
    });
  }

  closeButton.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("visually-hidden");
  });
})();
