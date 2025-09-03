import * as db from "./database.js";

if (db) {
    console.log("database chargée");
}

db.evenements.forEach(evenement => (
    document.querySelector("#evenements-list").innerHTML += evenement.showEvenement()
));

db.professeurs.forEach(professeur => (
    document.querySelector("#equipe-list").innerHTML += professeur.showProfesseur()
))

addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");
    nav.classList.toggle("scrolled", window.scrollY > 50);
    navLinks.forEach(link => link.classList.toggle("scrolled", window.scrollY > 50));
});
