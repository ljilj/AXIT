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





