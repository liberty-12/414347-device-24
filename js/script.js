var ESC_KEYCODE = 27;

var contactButton = document.querySelector(".contacts-button");
var contactPopup = document.querySelector(".contact-popup");
var contactCloseButton = contactPopup.querySelector(".close-button");

var map = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");
var mapCloseButton = mapPopup.querySelector(".close-button");

map.addEventListener("click", function(evt) {
  // evt.preventDefault();
  mapPopup.classList.remove("hidden");
});

mapCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("hidden");
});

contactButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.remove("hidden");
});

contactCloseButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.add("hidden");
});
