const navbar = document.querySelector("nav");
const announcement = document.querySelector(".announcement");

window.addEventListener("scroll", () => {

    if (window.scrollY > 150) {

        navbar.classList.add("sticky");
        announcement.classList.add("hide");

    } else {

        navbar.classList.remove("sticky");
        announcement.classList.remove("hide");

    }

});