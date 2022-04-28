# (MEAN / MERN) STACK DEV - TEST

## Description
**INFI SHOPIFY** est une application E-commerce développer en ``MEAN (Mongo Express Angular Node)`` ou ``MERN (Mongo Express React Node)``, les principales fonctionnalités de cette application est l'ajout au panier la modification de la quantite et la validation d'une commande

## Prérequis
il vous faut :
- IDE ou éditeur de code (VS Code) :)
- Une connexion internet

## Démarrage
Avant tout vous avez un template front `Angular` et un back `Express & TypeScript` déjà établie pour vous, si vous n'êtes pas alaise avec `Express & TypeScript` vous êtes libre de changer le back en `Express`
seulement.

- *Front (Angular)* 
- *Front (React)*

`cd store`
Cette application front est developper en `Angular`
````console
npm i && npm run start
 ````
Votre application angular est démarrée sur le port [http://localhost:4200](http://localhost:4200)

- *Back (Express & TypeScript)*

`cd api`
````console
npm i && npm run build && npm run start
 ````
Votre api angular est démarrée sur le port [http://localhost:3000](http://localhost:3000)

## A Faire

Vous devez implémenter les tâches suivantes :
### Api (NodeJs - Express - Mongo)

- Une `api` pour la liste des produits.
- Une `api` pour enregistrer une commande, mettre a jour la quantité de chaque article en base.

### Front (Angular / React)
>Pour l'application `Front` vous avez le choix entre `Angular` et `React`, si vous choisissez `Angular`, il existe déjà un boilerplate  dans le repo.

- Affichez la liste des produits sur la page d'accueil comme sur la demo qui peut vous servir d'exemple.
- Gérer l'etat de l'ajout au panier et l'incrémentation du nombre d'article dans le panier.
- Affichez les élements du panier sur une page, possibilité de changer la  quantité de chaque article et cela doit impacter le montant global de la commande
- Mettre une action de validation de la commande et videz le panier après sauvegarde de la commande.

## Bonus
- Ajouter une page de commande pour lister les commandes et une api




