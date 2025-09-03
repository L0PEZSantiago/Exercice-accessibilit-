export class Professeur {
  constructor(nom, prenom, bio, photo, disciplines) {
    this.nom = nom;
    this.prenom = prenom;
    this.bio = bio;
    this.photo = photo;
    this.disciplines = disciplines;
  }

  getFullName() {
    return `${this.prenom} ${this.nom}`;
  }

  getResume() {
    return this.bio.substring(0, 150) + "...";
  }

  getDisciplinesString() {
    return this.disciplines.join(", ");
  }

  showProfesseur() {
    return `<article class="professeur" id="professeur-${this.nom.toLowerCase()}">
    <div class="professeur-content">
        <img src="${this.photo}" alt="Photo de ${this.getFullName()}">
        <h3>${this.getFullName()}</h3>
        <p>${this.getResume()}</p>
        <p>Disciplines : ${this.getDisciplinesString()}</p>
    </div>
    </article>`;
  }
}
