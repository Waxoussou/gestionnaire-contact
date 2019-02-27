/* 
Activité : gestion des contacts
*/

let contactTab = [];

class Contact {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
        contactTab.push(this);

    }

    decrire() {
        return `\nNOM : ${this.nom}\nPRENOM : ${this.prenom}`
    }
};

// je créer deux instances du l'objet Contact
let contact1 = new Contact('Levisse', 'Carole');
let contact2 = new Contact('Melodie', 'Nelsonne');

// fonction pour ajouter un contact 
function ajouterContact(nom, prenom) {
    nom = prompt('ajouter nom', 'nom');
    prenom = prompt('ajouter un prenom', 'prenom');
    new Contact(nom, prenom);
    console.log('nouveau contact ajouté');

}

// lister tous les contacts dans le gestionnaire
function listerContact() {
    let contacts= '';
    contactTab.forEach(contact => {
        contacts += `${contact.decrire()}\n---------------------`;

    });
    console.log(`//////contacts//////${contacts}`);
}

// interaction avec l'utilisateur
let accueil = alert ("Bienvenue dans le gestionnaire de contact\nVeuillez Cliquer sur OK pour continuer");
let messageMenu = 'Que souhaitez-vous faire ? \n 1: Lister les contacts \n 2: Ajouter un contact \n 0: Quitter le programme'
let choix;

while (choix != 0) {
    choix = prompt(messageMenu);
    if (choix == 1) {
        listerContact();
    }
    else if (choix == 2) {
        ajouterContact();
    }
    else if (choix == 0){
        console.log(`Au revoir !`);
    }
    else {
        console.log(`je n'ai pas compris`);
    }
    
}


