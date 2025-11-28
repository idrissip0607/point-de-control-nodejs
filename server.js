// Importation du module HTTP intégré à Node.js
// Ce module permet de créer des serveurs web
const http = require("http");

// Création d'un serveur HTTP
// La fonction callback est exécutée à chaque requête reçue
const server = http.createServer((req, res) => {
  // Définition du code de statut HTTP et des en-têtes
  res.writeHead(200, { "Content-Type": "text/html" });
  // Envoi de la réponse au client avec un message HTML
  res.end("<h1>Hello Node!!!!</h1>\n");
});

// Démarrage du serveur sur le port 3000
// Le serveur écoutera les requêtes entrantes sur ce port
server.listen(3000, () => {
  // Affichage d'un message dans la console lorsque le serveur démarre
  console.log("Server running at http://localhost:3000/");
});
