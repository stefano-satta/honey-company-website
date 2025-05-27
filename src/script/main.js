const btnMobile = document.querySelector("#menu-toggle-mobile");
const offCanvas = document.querySelector("#offcanvas");
const btnCloseOffcanvas = document.querySelector("#btn-close-offcanvas");
const linksOffcanvas = document.querySelectorAll(".links-offcanvas");

btnMobile.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('open')
    offCanvas.classList.add("translate-x-0");
})

btnCloseOffcanvas.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('close');
    offCanvas.classList.remove("translate-x-0");
})

linksOffcanvas.forEach((link) => {
    link.addEventListener("click", (e) => {
        console.log('linksOffcanvas');
        offCanvas.classList.remove("translate-x-0");
    })
})