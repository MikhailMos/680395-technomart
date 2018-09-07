var ESC_KEY_CODE = 27;

var linkWriteUs  = document.querySelector(".contacts-btn")       ? document.querySelector(".contacts-btn")   : "";
var popupWriteUs = document.querySelector(".modal-write-us")     ? document.querySelector(".modal-write-us") : "";
var formWriteUs = popupWriteUs.querySelector(".write-us-form")   ?     popupWriteUs.querySelector(".write-us-form") : "";
var userName     = popupWriteUs.querySelector("#userNameField")  ? popupWriteUs.querySelector("#userNameField")     : "";
var userEmail    = popupWriteUs.querySelector("#userEmailField") ? popupWriteUs.querySelector("#userEmailField")    : "";
var userText     = popupWriteUs.querySelector("#letterField")    ? popupWriteUs.querySelector("#letterField")       : "";
var closeWriteUs = popupWriteUs.querySelector(".write-us-btn-close") ? popupWriteUs.querySelector(".write-us-btn-close") : "";

var linkMap  = document.querySelector(".contacts-map-link") ? document.querySelector(".contacts-map-link") : "";
var popupMap = document.querySelector(".modal-fullmap")     ? document.querySelector(".modal-fullmap")     : "";
var closeMap = popupMap.querySelector(".fullmap-btn-close") ? popupMap.querySelector(".fullmap-btn-close") : "";

var catalog      = document.querySelector(".goods-list")               ? document.querySelector(".goods-list") : "";
var popupInfoBuy = document.querySelector(".modal-order-info")         ? document.querySelector(".modal-order-info") : "";
var closeInfoBuy = popupInfoBuy.querySelector(".order-info-btn-close") ? popupInfoBuy.querySelector(".order-info-btn-close") : "";


var isStorageSupport = true;
var storage = "";

// Обратная связь
function openFormWriteUs(evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
}

function closeFormWriteUs(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
}

function fillinFormWriteUs(evt) {
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
}

// Карта
function linkToMap(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
}

function closeFormMap(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
}

// Информация о покупке
function openFormInfoBuy(evt) {
  if (evt.target.classList.contains("goods-item-btn-buy")) {
    evt.preventDefault();
    popupInfoBuy.classList.add("modal-show");
  }
}

function closeFormInfoBuy(evt) {
  if (evt.target.classList.contains('order-info-btn-close')) {
    evt.preventDefault();
    popupInfoBuy.classList.remove("modal-show");
  }
}

// Обработка клавиши Esc
function pressESC(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
    if (popupInfoBuy.classList.contains("modal-show")) {
      popupInfoBuy.classList.remove("modal-show");
    }
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
    }
    if (popupWriteUs.classList.contains("modal-error")) {
      popupWriteUs.classList.remove("modal-error");
    }
  }
}


try {
  storage = localStorage.getItem(userName);
} catch (error) {
  isStorageSupport = false;
}

linkWriteUs.addEventListener("click", openFormWriteUs);
formWriteUs.addEventListener("submit", fillinFormWriteUs);
closeWriteUs.addEventListener("click", closeFormWriteUs);

linkMap.addEventListener("click", linkToMap);
closeMap.addEventListener("click", closeFormMap);

catalog.addEventListener("click", openFormInfoBuy);
closeInfoBuy.addEventListener("click", closeFormInfoBuy);

window.addEventListener("keydown", pressESC);
