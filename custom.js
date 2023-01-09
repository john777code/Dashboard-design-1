// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    arrows: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
    }, pagination: {
        el: ".custom-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
});


// sidebar into canvas
function sidebarIntoOffcanvas() {
    let sidebarArea = document.querySelector(".sidebar-area");
    let sidebarHtml = sidebarArea.innerHTML;
    let offCanvas = `<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            ${sidebarHtml}
        </div>
    </div>`;
    sidebarArea.innerHTML = offCanvas;


    let offcanvasHeader = sidebarArea.querySelector(".offcanvas-header");
    let siteLogo = sidebarArea.querySelector(".logo-wrap");
    let siteLogoHtml = siteLogo.innerHTML;
    offcanvasHeader.insertAdjacentHTML("afterbegin", siteLogoHtml);
    siteLogo.remove();

    // set button for toggle offcanvas
    let headerActions = document.querySelector(".dashboard-area .header .actions");
    let toggleSidebarBtn = `<button class="toggle-sidebar icon-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <i class="bi bi-list"></i>
    </button>`;
    headerActions.insertAdjacentHTML("afterbegin", toggleSidebarBtn);
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        sidebarIntoOffcanvas();
    } else {
        // document.body.style.backgroundColor = "pink";
    }
}

var x = window.matchMedia("(max-width: 1199px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


// input number with country 
var input = document.querySelector("#phone");
var customFlagContainer = document.querySelector(".custom-flag-container");

var iti = window.intlTelInput(input, {
    dropdownContainer: customFlagContainer,
    utilsScript: "./utils.js",
});