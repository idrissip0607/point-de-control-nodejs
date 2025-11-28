# Exercices Node.js pour Débutants

Ce dépôt contient une série d'exercices Node.js conçus pour les débutants. Chaque fichier illustre un concept différent de Node.js.

## Contenu

### 1. [hello-world.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/hello-world.js)
Un exemple simple qui affiche "HELLO WORLD" dans la console.
Pour exécuter : `node hello-world.js`

### 2. [server.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/server.js)
Crée un serveur HTTP qui écoute sur le port 3000 et répond avec un message HTML.
Pour exécuter : `node server.js` puis visitez http://localhost:3000

### 3. [welcome.txt](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/welcome.txt) et [read-file.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/read-file.js)
- [welcome.txt](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/welcome.txt) : Un fichier texte simple contenant "Hello Node"
- [read-file.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/read-file.js) : Lit et affiche le contenu de [welcome.txt](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/welcome.txt)
Pour exécuter : `node read-file.js`

### 4. [password-generator.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/password-generator.js)
Utilise le paquet `generate-password` pour créer des mots de passe sécurisés aléatoires.
Pour exécuter : `node password-generator.js`

### 5. [email-sender.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/email-sender.js)
Utilise le paquet `nodemailer` pour envoyer des emails.
Pour exécuter : 
1. Mettez à jour les identifiants email dans le fichier
2. Exécutez avec `node email-sender.js`

## Dépendances

Ce projet utilise les paquets npm suivants :
- `generate-password` : Pour générer des mots de passe sécurisés
- `nodemailer` : Pour envoyer des emails

## Instructions de Configuration

1. Assurez-vous que Node.js est installé sur votre système
2. Exécutez `npm install` pour installer toutes les dépendances
3. Exécutez n'importe quel fichier .js avec la commande `node nom-du-fichier.js`

## Notes de Sécurité

Le fichier [email-sender.js](file:///c:/GOMYCODE/COURS%20FULLSTACK/BACK-END/NodeJs%20&&%20Express/Nodejs/point%20de%20control%20nodejs/email-sender.js) contient des espaces réservés pour les identifiants email. 
N'oubliez jamais de retirer vos véritables identifiants avant de publier du code sur un dépôt public !