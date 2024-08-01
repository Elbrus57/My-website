document.addEventListener("DOMContentLoaded", () => {
    let menuicon = document.querySelector("#Menu-icon");
    let navbar = document.querySelector(".navbar");

    menuicon.onclick = () => {
        menuicon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };
});
