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


