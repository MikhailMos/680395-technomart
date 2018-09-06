var linkWriteUs  = document.querySelector(".contacts-btn");
var popupWriteUs = document.querySelector(".modal-write-us");
var closeWriteUs = popupWriteUs.querySelector(".write-us-btn-close");

var linkMap  = document.querySelector(".contacts-map-link");
var popupMap = document.querySelector(".modal-fullmap");
var closeMap = popupMap.querySelector(".fullmap-btn-close");

// Форма обратной связи
linkWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
});

// Карта
linkMap.addEventListener("click", function (evt)) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});
