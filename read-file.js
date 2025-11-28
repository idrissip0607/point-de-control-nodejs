// Importation du module File System (fs) intégré à Node.js
// Ce module permet de lire et écrire des fichiers
const fs = require("fs");

// Lecture du contenu du fichier welcome.txt
// 'utf8' spécifie l'encodage du texte
// La fonction callback prend deux paramètres : erreur et données
fs.readFile("welcome.txt", "utf8", (err, data) => {
  // Vérification si une erreur s'est produite lors de la lecture
  if (err) {
    // Affichage de l'erreur dans la console en cas d'échec
    console.error("Error reading file:", err);
    return; // Arrêt de la fonction en cas d'erreur
  }

  // Affichage du contenu du fichier dans la console
  console.log(data);
});
