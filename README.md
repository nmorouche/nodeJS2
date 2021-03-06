# API nodeJS2

Ce projet est un projet scolaire et le but est de tester une API en Node.JS.  
Vous aurez donc accès ici, à une application hébergé sur Heroku afin d'effectuer les différents tests.  
En effet, cette application vous servira à situer une ville sur une carte. Vous n'aurez plus qu'à insérer la ville dans le champs ville et valider le formulaire ;)  
Application : https://evening-eyrie-83553.herokuapp.com/

## Comment utiliser

* Remplir le formulaire afin d'accéder à la page suivante ou bien vous pouvez effectuer un POST via curl de cette manière :
```
$ curl -X POST --header "Content-Type: application/json" --data "{\"ville\":\"Paris\",\"description\":\"Paris est la capitale de la France\"}" https://evening-eyrie-83553.herokuapp.com/ville/
```

* Pour utiliser l'application en local :
```
$ cd nodeJS2
```
```
$ npm start
```
Se connecter ensuite à l'addresse suivante : http://localhost:3000/

## Installation

Assurez-vous d'avoir installé Node.JS avant de commencer.

```
$ npm install
```

## Comment tester les fonctionnalités

Afin de lancer les différents tests d'intégrations/fonctionnels lancer la commande suivante à la racine du projet :

```
$ npm run test
```
Cette commande testera les fonctionnalités suivantes :

* Si la page index contient bien un formulaire HTML.
* Si la page /ville contient bien le paramètre fournis lors du POST
* Si la ville entrée n'existe pas
* Test s'il y a bien un message d'erreur lorsque la ville entrée n'existe pas
* Affiche le bon message d'erreur si l'API Geocode nous renvoie une erreur 404.

## Créer avec

* [Express](https://expressjs.com/en/api.html) - The web framework used
* [Express Generator](https://expressjs.com/fr/starter/generator.html) - The application generator used

## Versions

Pour les versions disponibles, se référer [tags on this repository](https://github.com/nmorouche/nodeJS1/tags). 

## Auteurs

* **Nassim MOROUCHE** - [Nassim](https://github.com/nmorouche)
