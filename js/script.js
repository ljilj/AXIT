// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.links__container');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});


// Tab
var tabs = new Tabs({
    elem: "tabs",
    open: 1,
    activeClass: "js-tabs__title-active"
});

tabs.open(0);


// Modal
var modal = document.querySelector(".c-modal");
var trigger = document.querySelector(".js-trigger");
var trigger1 = document.querySelector(".js-trigger1");
var trigger2 = document.querySelector(".js-trigger2");
var trigger3 = document.querySelector(".js-trigger3");
var trigger4 = document.querySelector(".js-trigger4");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
trigger1.addEventListener("click", toggleModal);
trigger2.addEventListener("click", toggleModal);
trigger3.addEventListener("click", toggleModal);
trigger4.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);








