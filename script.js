// -------------------------Button configuration(nav-toggler)------------------------

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// Close Nav list items when one of items clicked

document.addEventListener("click", function(e) {
    if (e.target.closest(".nav-item")) {
        toggleNav();
    }
})

// Position sticky for scrolling 

window.addEventListener("scroll", function() {
    if (this.pageYOffset > 60) {
        document.querySelector('.header').classList.add("sticky");
    } else {
        document.querySelector('.header').classList.remove("sticky");
    }
})

//-------------------------------- Menu-tabs configuration-----------------------------

//create variable for menu-tabs class aka buttons on UI(Lunch, dinner,...)
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e) {

    //Adding active class on click behaviour 
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }
})