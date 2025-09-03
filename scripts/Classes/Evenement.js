export class Evenement {
  constructor(id, titre, description, image, date, heure) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.image = image;
    this.date = date;
    this.heure = heure;
  }

  getResume() {
    return this.description.substring(0, 1000) + "...";
  }

  getDateString() {
    return this.date.split("-").reverse().join("/");
  }

  getTimeString() {
    return this.heure;
  }

  getDateStringAndTimeString() {
    return `${this.getDateString()} à ${this.getTimeString()}`;
  }

  showEvenement() {
    return `<article class="evenement" id="evenement-${this.id}">
            <img src="${this.image}" alt="Image de l'événement">
            <div class="evenement-infos-and-btn">
                <div class="evenement-infos">
                    <h3>${this.titre}</h3>
                    <p class="evenement-date">Le ${this.getDateStringAndTimeString()}</p>
                    <p class="evenement-description">${this.getResume()}</p>
                </div>
                <a href="/evenement.html?id=${this.id}" class="btn" aria-label="En savoir plus sur l'événement ${this.titre}">En savoir plus</a>
            </div>
        </article>`;
  }
}
