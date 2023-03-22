const crypto = require('crypto');
const argon2 = require('argon2');

// Définir une fonction pour générer des identifiants uniques
function generateId() {
  return crypto.randomBytes(16).toString('hex');
}

// Charger la liste des utilisateurs depuis le fichier users.js
const users = [
    {
      firstname: "Elsa",
      lastname: "Denis",
      email: "elsa.denis@example.com",
      password: "baggins",
    },
    {
      firstname: "Amelia",
      lastname: "Guillot",
      email: "amelia.guillot@example.com",
      password: "cwoui",
    },
    {
      firstname: "Angelina",
      lastname: "Fernandez",
      email: "angelina.fernandez@example.com",
      password: "beastie",
    },
    {
      firstname: "Amelia",
      lastname: "Vincent",
      email: "amelia.vincent@example.com",
      password: "catcat",
    },
    {
      firstname: "Alexia",
      lastname: "Laurent",
      email: "alexia.laurent@example.com",
      password: "premium",
    },
    {
      firstname: "Aymeric",
      lastname: "Leclerc",
      email: "aymeric.leclerc@example.com",
      password: "qwertyui",
    },
    {
      firstname: "Dorian",
      lastname: "Charles",
      email: "dorian.charles@example.com",
      password: "vectra",
    },
    {
      firstname: "Kenzo",
      lastname: "Richard",
      email: "kenzo.richard@example.com",
      password: "1958",
    },
    {
      firstname: "Angèle",
      lastname: "Renaud",
      email: "angele.renaud@example.com",
      password: "taco",
    },
    {
      firstname: "Nina",
      lastname: "Rodriguez",
      email: "nina.rodriguez@example.com",
      password: "jonny",
    },
  ];

// Parcourir la liste des utilisateurs et ajouter un identifiant unique à chacun
users.forEach(user => {
  user.id = generateId();
});

// Parcourir la liste des utilisateurs et sécuriser les mots de passe en utilisant sha256 et Argon2
users.forEach( async user => {
 const password = user.password;

  // Hasher le mot de passe en utilisant sha256 et une clé secrète

  // Hasher le mot de passe en utilisant Argon2
  const argon2Hash = argon2.hash(password);
  try {
    const hash = await argon2.hash(password);
    // $argon2id$v=19$m=65536,t=3,p=4$TxwJ3GFJEBcTaJ6HCZ19RA$oGDFy3xoMl6wuI3bI02IdfFwgLmMaQ89WwbGlLxrNXQ
  } catch (err) {
    // …
  }

  // Remplacer le mot de passe par un objet contenant les deux hash
  user.password = {
    argon2: argon2Hash
  };
});

// Afficher la liste des utilisateurs modifiée
console.log(users);