// Importation du module generate-password installé via npm
// Ce module permet de générer des mots de passe sécurisés
const generator = require("generate-password");

// Fonction qui génère un mot de passe aléatoire
function generateRandomPassword() {
  // Configuration des options de génération de mot de passe
  const password = generator.generate({
    length: 12, // Longueur du mot de passe : 12 caractères
    numbers: true, // Inclure des chiffres (0-9)
    symbols: true, // Inclure des symboles (!@#$%^&* etc.)
    uppercase: true, // Inclure des lettres majuscules (A-Z)
    lowercase: true, // Inclure des lettres minuscules (a-z)
    strict: true, // Garantir qu'il y aura au moins un caractère de chaque type
  });

  // Retourne le mot de passe généré
  return password;
}

// Génération et affichage de 5 mots de passe aléatoires
console.log("Generated Passwords:"); // Titre pour l'affichage
// Boucle pour générer 5 mots de passe différents
for (let i = 0; i < 5; i++) {
  // Affiche chaque mot de passe avec son numéro
  console.log(`${i + 1}. ${generateRandomPassword()}`);
}
