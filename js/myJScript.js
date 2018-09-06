var linkWriteUs  = document.querySelector(".contacts-btn")           ? document.querySelector(".contacts-btn") : "";
var popupWriteUs = document.querySelector(".modal-write-us")         ? document.querySelector(".contacts-btn") : "";
var formWriteWUs = popupWriteUs.querySelector(".write-us-form")      ? popupWriteUs.querySelector(".write-us-form")      : "";
var userName     = popupWriteUs.querySelector("[id=userNameField]")  ? popupWriteUs.querySelector("[id=userNameField]")  : "";
var userEmail    = popupWriteUs.querySelector("[id=userEmailField]") ? popupWriteUs.querySelector("[id=userEmailField]") : "";
var userText     = popupWriteUs.querySelector("[id=letterField]")    ? popupWriteUs.querySelector("[id=letterField]")    : "";
var closeWriteUs = popupWriteUs.querySelector(".write-us-btn-close") ? popupWriteUs.querySelector(".write-us-btn-close") : "";

var linkMap  = document.querySelector(".contacts-map-link") ? document.querySelector(".contacts-map-link") : "";
var popupMap = document.querySelector(".modal-fullmap")     ? document.querySelector(".modal-fullmap")     : "";
var closeMap = popupMap.querySelector(".fullmap-btn-close") ? popupMap.querySelector(".fullmap-btn-close") : "";

var isStorageSupport = true;
var storage = "";


// Форма обратной связи
try {
  storage = localStorage.getItem(userName);
} catch (error) {
  isStorageSupport = false;
}

linkWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});

formWriteWUs.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    }
  }
});

// Карта
linkMap.addEventListener("click", function (evt) {
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
