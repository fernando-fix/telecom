// initial data
let menu = document.querySelector(".menu");
let menu_list = document.querySelector("#menu-list");
let menu_mobile = document.querySelector("#menu-mobile");

// functions
function openMenu() {
    menu_mobile.classList.remove("hide-menu");
    menu_mobile.classList.add("show-menu");
}
function closeMenu() {
    menu_mobile.classList.remove("show-menu");
    menu_mobile.classList.add("hide-menu");
}

// Events

// smoth scroll
$(document).ready(function () {
    $("a").click(function () {
        var sectionId = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(sectionId).offset().top - $("header").outerHeight()
        }, 500);
    });
});

// ação de click de menu
menu.addEventListener('click', () => {
    if (menu_mobile.classList.contains("show-menu")) {
        closeMenu();
    } else {
        openMenu();
    }
});

// fecha o menu caso a tela seja redimensionada
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu_mobile.classList.remove("show-menu");
        menu_mobile.classList.add("hide-menu");
    }
});


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

// imask
var phoneMask = IMask(
    document.getElementById('phone'), {
    mask: '(00)0 0000-0000'
});