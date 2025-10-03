<<<<<<< HEAD
Projet JiblyTaw Delivery Admin Dashboard

Ce projet est développé avec Angular 20.0.5 et Bootstrap 5.
Il s’agit d’un projet de tableau de bord d’administration pour la plateforme JiblyTaw Delivery.

🚀 Démarrage du projet

Pour exécuter ce projet, procédez comme suit :

Ouvrir un terminal (bash).

Cloner le dépôt avec la commande :

git clone http://url.git.......com

Accéder au dossier du projet :

cd ....

Installer les dépendances :

npm install

Si cela ne fonctionne pas, utiliser :

npm install --force

Lancer l’application :

npx ng serve

📌 Réalisations dans ce projet

1. Mise en place de la structure globale

Sidebar : responsive avec mode réduit.

Éléments de navigation : icônes spécifiques conformes au design.

Navbar : responsive et fidèle à la maquette.

Bouton de notifications avec popup et menu utilisateur avec popup.

Logo : utilisation des variantes issues de la charte graphique pour assurer l’harmonie visuelle.

2. Tableau de bord (Dashboard)

Intégration de données factices et de composants statiques pour simuler le design.

Création de composants réutilisables pour les graphiques du haut.

Intégration de graphiques avec ApexCharts.

Bonus : ajout d’un graphique supplémentaire pour visualiser les commandes par statut (chart en bas).

3. Page de gestion des commandes

Création du tableau et des fonctionnalités comme dans le design fourni :

Filtres : par statut, par restaurant (vendor), recherche manuelle par ID ou nom du client.

Tri ascendant/descendant des commandes (statut ou vendor) via les boutons associés.

Données factices en JSON simulant une API, avec badges dynamiques pour le statut.

Animation au survol des lignes.

Bouton « Détails » permettant l’expansion de la ligne pour afficher les informations complémentaires.

4. Section détails d’une commande

Mise en page conforme au design, entièrement responsive.

Utilisation d’un composant réutilisable avec data-binding pour afficher les détails.

Ajout d’un select dynamique permettant de changer le statut d’une commande.

🗂️ Structure du projet

components/ : contient les composants principaux (table de gestion des commandes, détails d’une commande, dashboard).

assets/ : ressources statiques (images).

theme/shared/ : composants de base réutilisables (cards, charts, breadcrumbs).

theme/layout/ : mise en page globale (navbar, sidebar) avec un système de navigation dynamique basé sur un fichier JSON (nav items, groupes, icônes, URLs). Ce système rend les modifications et mises à jour plus simples et maintenables.

⏱️ Temps de réalisation

7h30 (de 15h00 à 22h30)

💬 Commentaire

Je m’excuse pour le retard : j’ai ajouté la section détails des commandes, qui n’était pas demandée dans les objectifs initiaux.
=======
# jiblytaw-delivery-dashboard
>>>>>>> 8779434b02b20773da974e9cb61f7d158069ef72
