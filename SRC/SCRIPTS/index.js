const btn = document.querySelector(".menu_mob");
const nav = document.querySelector("nav ul");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
});