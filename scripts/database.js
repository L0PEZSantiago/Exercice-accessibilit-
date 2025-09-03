import { Evenement } from "./Classes/Evenement.js";
import { Professeur } from "./Classes/Professeur.js";

export const professeurs = [
    new Professeur("Doe", "John", "Bio de John Doe", "/images/professeurs/john.jpg", ["Tango", "Salsa"]),
    new Professeur("Berger", "Cynthia", "Bio de Cynthia Berger", "/images/professeurs/cynthia.jpg", ["Kizomba", "Bachata"]),
    new Professeur("Martin", "Maëlle", "Bio de Maëlle Martin", "/images/professeurs/maëlle.jpg", ["Samba"]),
    new Professeur("Dupont", "Richard", "Bio de Richard Dupont", "/images/professeurs/richard.jpg", ["Bachata", "Salsa"]),
];

export const evenements = [
    new Evenement(1, "Soirée Latino à Amberieu en Bugey au LOUP",
        "Ouvert en terrasse dès 18h, HAPPY HOURS. Animation Bachata par Emilie de @temps-danse-latino-bressolles à 20h, offert et accessible à tous. 20h45 soirée latino, salsa, bachata, kizomba. Salle climatisée. Entrée gratuite.",
        "../images/events/event-1.png",
        "2025-09-01",
        "19:00",
    ),
    new Evenement(2,
        "Les mercredis latino plein air",
        "Gratuit, place limitée, inscription obligatoire. En cas de pluie, évènement annulé",
        "../images/events/event-2.png",
        "2025-09-02",
        "20:00",
    ),
    new Evenement(3,
        "Stage Latino Inclusif – Spécial malvoyants et non-voyants",
        "Envie de bouger, de partager et de vivre un moment de joie autour des rythmes latinos ? Rejoins-nous pour un stage inclusif unique ouvert aux personnes malvoyantes et non-voyantes ! Chaque participant sera accompagné d’un taxi-danseur formé pour guider avec bienveillance, afin que chacun puisse profiter pleinement du plaisir de danser, quel que soit son niveau ou son expérience.",
        "../images/events/event-3.png",
        "2025-09-03",
        "15:00",
    ),
];
