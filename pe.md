# Permanente evaluatie

## Homepage

 Op de Homepagina worden gebruikers begroet met een overzicht van aankomende evenementen. De pagina bevat een zoekbalk om evenementen op naam of categorie te zoeken en filteropties om evenementen te sorteren op basis van datum, locatie of populariteit. Elk evenement wordt weergegeven in een kaartvormige layout met essentiële informatie zoals titel, datum, en locatie. Door op een evenement te klikken, navigeert de gebruiker naar de Evenementdetails pagina. Deze pagina haalt dynamische data op van een backend database via een API om de lijst van evenementen weer te geven. Er is ook een knop om naar persoonlijke profielen of instellingen te navigeren.

## Event details

## De Evenementdetails pagina biedt uitgebreide informatie over een specifiek evenement, waaronder titel, beschrijving, datum, tijd, en locatie en meer. Deze pagina maakt gebruik van de Geolocatie plugin om de huidige locatie van de gebruiker te tonen en de afstand tot het evenement te berekenen. Gebruikers kunnen zich inschrijven of interesse tonen in het evenement via een knop, waarna ze een bevestiging en herinneringen ontvangen via pushmeldingen. De details van elk evenement worden opgehaald uit een database via een API.

## Profielpagina

## Op de Profielpagina kunnen gebruikers hun persoonlijke informatie bekijken en bewerken, inclusief de lijst met evenementen waaraan ze hebben deelgenomen of interesse in hebben getoond. De pagina integreert gebruikersauthenticatie en toont gepersonaliseerde content. Gebruikers kunnen hun deelname aan evenementen beheren en feedback geven over de evenementen. Alle gebruikersgegevens worden opgeslagen en opgehaald uit een cloud database.

## Event aanmaken

## De Evenementcreatie pagina stelt gebruikers in staat om hun eigen evenementen aan te maken. Ze kunnen details zoals titel, beschrijving, datum, tijd, en locatie invoeren. Deze pagina maakt gebruik van formuliervalidatie om ervoor te zorgen dat alle ingevoerde informatie correct is. Gebruikers kunnen foto's uploaden voor hun evenement, die worden opgeslagen in de cloud storage. Na het aanmaken van een evenement wordt dit toegevoegd aan de database en zichtbaar gemaakt op de Homepagina.



## Gebruikte plug-ins & online services

## Plugins:

## Geolocatie Plugin

## Evenementen in de buurt: Gebruikers kunnen evenementen vinden die dicht bij hun huidige locatie plaatsvinden. Dit kan de gebruikerservaring verbeteren door ze gemakkelijk toegang te geven tot lokale evenementen.
## Routebeschrijvingen naar Evenementen: Geef gebruikers de mogelijkheid om routebeschrijvingen te krijgen van hun huidige locatie naar de evenementlocatie.
## Geolocatie-gebaseerde aanbevelingen: Je kunt de geolocatie gebruiken om gepersonaliseerde evenementaanbevelingen te doen op basis van de locatie van de gebruiker.

## Push Notifications Plugin

## Evenement Herinneringen: Stuur gebruikers herinneringen over evenementen waarvoor ze zich hebben ingeschreven of interesse hebben getoond.
## Nieuwe Evenementmeldingen: Informeer gebruikers over nieuwe evenementen die aan hun voorkeuren voldoen.
## Updates van Evenementen: Stuur updates over evenementen, zoals locatiewijzigingen, tijdstipwijzigingen, of annuleringen.

## Camera Plugin

## Evenementfoto's Uploaden: Gebruikers kunnen foto's van evenementen uploaden, hetzij als onderdeel van het proces van het aanmaken van een evenement, of om hun ervaringen tijdens het evenement te delen.
## Profielfoto's: Gebruikers kunnen hun profielfoto's bijwerken door een nieuwe foto te maken of een bestaande foto uit hun galerij te kiezen.

## Online Services:

## API voor Evenementenbeheer: Voor het ophalen en opslaan van evenementgegevens.
## Authenticatieservice: Bijvoorbeeld Firebase Authentication voor gebruikersaccounts.
## Cloud Database: Voor het opslaan van evenement- en gebruikersgegevens.

# Feedback

Zeer uitgebreide beschrijving. Goed werk!
Let er wel op dat je het jezelf niet te moeilijk maakt en beware the feature creep. Elke feature die je implementeert hoort uiteraard te werken.
Als je gaat werken met geo-locatie en cloud storage bijvoorbeeld, zal je moeten zorgen dat je testdata coordinaten enz. ook bevat. Ga je gebruik maken van een andere app (bv. google maps) om gebruikers door te verwijzen?

Pagina's zien er prima uit. Geen opmerkingen behalve dan dat de homepage niet correct lijkt te werken in dark mode.
2/2
