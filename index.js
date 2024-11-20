const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    navBtn.classList.toggle("nav-btn--open");
});

nav.addEventListener("click", (e) => {
    if (e.target.matches(".nav__link")) {
        nav.classList.remove("nav--open");
        navBtn.classList.remove("nav-btn--open");
    }
});
