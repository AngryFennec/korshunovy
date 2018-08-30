var burger = document.querySelector(".menu-button");
var menu = document.querySelector(".nav-container");

var phone=document.querySelector('#phone');
var button=document.querySelectorAll(".callback");
var priceButton=document.querySelector(".name");
var modal=document.querySelector(".feadback");
var modalPrice=document.querySelector(".feadback-name");
var closeButton=modal.querySelector(".feadback__close-button");
var closeButton2=modalPrice.querySelector('.feadback__close-button-name');
var flag=document.querySelector('#all-rooms');
var error=document.querySelector('.error');

var isValid = function(sample) {
  var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
  return regexp.test(sample);
};

var showError = function (e, element) {
  if (!isValid(element.value)) {
    error.classList.remove("visually-hidden");
  } else {
    error.classList.add("visually-hidden");
    show(e, modalPrice);
  }
};

var show = function(e,element) {
  e.preventDefault();
  element.classList.remove("visually-hidden");
}

var hidden = function(e,element) {
  e.preventDefault();
  element.classList.add("visually-hidden");
}

$(document).ready(function(){
  $('#phone').inputmask("+7 (999) 999-99-99");  //static mask
  $('#user-phone').inputmask("+7 (999) 999-99-99");  //static mask
});

$(document).ready(function() {
  $('.price__form').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

menu.classList.add("nav-container--close");
burger.classList.add("menu-button--close");

burger.addEventListener ("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("nav-container--close");
  burger.classList.toggle("menu-button--close");
});

priceButton.addEventListener ("click", function (evt) {
  showError(evt, phone);
});

closeButton2.addEventListener("click", function (evt) {
  hidden(evt, modalPrice);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    hidden(evt, modal);
    hidden(evt, modalPrice);
  }
});

for (var i = 0; i <= (button.length-1); i++) {
  button[i].addEventListener ("click", function (evt) {
    show(evt, modal);
  });
}

closeButton.addEventListener ("click", function (evt) {
  hidden(evt, modal);
});

var moreButton = document.querySelector('.portfolio__button');
var block3 = document.querySelector('.portfolio__block--3');
var block4 = document.querySelector('.portfolio__block--4');

moreButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  block3.classList.toggle('visually-hidden');
  block4.classList.toggle('visually-hidden');
});
