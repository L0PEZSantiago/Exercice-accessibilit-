addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");
    nav.classList.toggle("scrolled", window.scrollY > 50);
    navLinks.forEach(link => link.classList.toggle("scrolled", window.scrollY > 50));
});