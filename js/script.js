var contactButton = document.querySelector(".contacts-button");
var contactPopup = document.querySelector(".contact-popup");
var contactCloseButton = contactPopup.querySelector(".close-button");

var input = contactPopup.querySelector(".contact-popup-container");
var name = input.querySelector("#name");
var email = input.querySelector("#email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("hidden");

  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

contactCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("hidden");
  contactPopup.classList.remove("modal-error");
});

input.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!contactPopup.classList.contains("hidden")) {
      contactPopup.classList.add("hidden");
      contactPopup.classList.remove("modal-error");
    }
  }
});

var map = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var mapCloseButton = mapPopup.querySelector(".close-button");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("hidden");
});

mapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!mapPopup.classList.contains("hidden")) {
      mapPopup.classList.add("hidden");
    }
  }
});

// services

var servicesList = document.querySelector(".service-list");
var servicesItem = servicesList.querySelectorAll(".service-item");
var services = document.querySelectorAll(".service-description-item");

servicesList.addEventListener("click", function(evt) {
  evt.preventDefault();
  var target = evt.target;
  if (target.classList.contains("service-item-link")) {
    var targetParent = target.parentElement;
    for (i = 0; i < services.length; i++) {
      services[i].classList.remove("service-description-show");
      servicesItem[i].classList.remove("current-service-item");
    }
    var className = "." + target.id;
    document.querySelector(className).classList.add("service-description-show");
    targetParent.classList.add("current-service-item");
  }
});
