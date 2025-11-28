// Importation du module nodemailer installé via npm
// Ce module permet d'envoyer des emails depuis Node.js
const nodemailer = require("nodemailer");

// Création d'un objet "transporter" qui gère l'envoi des emails via SMTP
// NOTE: Remplacez les valeurs fictives par vos véritables identifiants email
const transporter = nodemailer.createTransporter({
  service: "gmail", // Service email utilisé (gmail, outlook, etc.)
  auth: {
    user: "mon-email@gmail.com", // Votre adresse email complète
    pass: "mon-app-password", // Votre mot de passe d'application (pas le mot de passe normal)
  },
});

// Configuration des options de l'email à envoyer
const mailOptions = {
  from: "mon-email@gmail.com", // Adresse de l'expéditeur
  to: "destinataire@example.com", // Adresse du destinataire (peut être votre propre email pour tester)
  subject: "Test Email de Node.js", // Sujet de l'email
  text: "Bonjour depuis Node.js ! Ceci est un email de test envoyé via nodemailer.", // Corps de l'email en texte brut
  html: "<h1>Bonjour depuis Node.js !</h1><p>Ceci est un email de test envoyé via <strong>nodemailer</strong>.</p>", // Corps de l'email en HTML
};

// Envoi de l'email en utilisant le transporter configuré
// La fonction callback gère la réponse (succès ou erreur)
transporter.sendMail(mailOptions, (error, info) => {
  // Vérification si une erreur s'est produite lors de l'envoi
  if (error) {
    // Affichage de l'erreur dans la console en cas d'échec
    console.error("Error occurred while sending email:", error);
  } else {
    // Affichage des informations de succès dans la console
    console.log("Email envoyé avec succès!");
    console.log("Message ID:", info.messageId); // Identifiant unique du message
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // URL pour prévisualiser l'email (si disponible)
  }
});

