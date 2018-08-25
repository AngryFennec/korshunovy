var burger = document.querySelector(".menu-button");
var menu = document.querySelector(".page-navigation");

menu.classList.add("page-navigation--close");
burger.classList.add("menu-button--close");

burger.addEventListener ("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("page-navigation--close");
  burger.classList.toggle("menu-button--close");
});
