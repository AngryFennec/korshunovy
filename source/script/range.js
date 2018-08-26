'use strict';

(function () {
  var toggle = document.querySelector('.range__toggle-block');
  var range = document.querySelector('.range');
  var width = range.clientWidth;
  var track = range.querySelector('.range__before');
  var area = document.querySelector('#area');
  var current = document.querySelector('.range__current');

  toggle.addEventListener('mousedown', function (evt){
    evt.preventDefault();
    width = range.clientWidth;
    var limitMovement = function (axis, min, max) {
      if (axis < min) {
        axis = min;
      }
      if (axis > max) {
        axis = max;
      }
      return axis;
    };

    var startPinPosition = {
      x: 0,
      y: 0
    };
    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onPinMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var offset = {
        x: startCoordinates.x - moveEvt.clientX,
        y: startCoordinates.y - moveEvt.clientY
      };

      startCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var currentY = toggle.offsetTop - offset.y;
      var currentX = toggle.offsetLeft - offset.x;

      currentX = limitMovement(currentX, -15, width-15);
      currentY = limitMovement(currentY, 14, 14);

      toggle.style.top = currentY + 'px';
      toggle.style.left = currentX + 'px';
      startPinPosition.x = currentX;
      startPinPosition.y = currentY;
      track.style.width=currentX + 'px';
      area.value = Math.round((currentX+15)/width*100);
      current.textContent=area.value;
      current.style.left = currentX + 'px';
  }
  var onPinMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onPinMouseMove);
    document.removeEventListener('mouseup', onPinMouseUp);
  };
  document.addEventListener('mousemove', onPinMouseMove);
  document.addEventListener('mouseup', onPinMouseUp);
});
})();
