# TickIshi

![alt text](https://github.com/MNPCMW6444/TrackIshi/blob/main_react/more/documentation/info/repository-card.png?raw=true)

Enterprise - Custom Human Resource Management Application - Developed using MERN stack

## Designation and Porpose

Managing (air control) profession-oriented data and personal details of crew members:

The profession-oriented data includes proffesional opinions and examinations.

## Architecture
The system's clean architecture:


![alt text](https://github.com/MNPCMW6444/TrackIshi/blob/main_react/more/documentation/architecture/system%20architecture.png?raw=true)

## Environment and Deployment

Develoment environment - localhost

FAT (UnClassified Production for Factory Acceptance Test) environment - free online hosting:
> Database is hosted on MongoDB Atlas<br />
> Backend is hosted on Heroku<br />
> Frontend is hosted on Netlify<br />

## Installation

Use the node package manager [npm] to install server and client.

For development:
> make sure you have installed a MongoDB server locally and updated your URI in the .env file<br />
> Terminal #1:<br />
 ```bash
 cd server
 npm install
 npm run dev
 ```
> Terminal #2: <br />
 ```bash
 cd client
 npm install
 npm start
 ```

For FAT:
> make sure you have  a MongoDB server on MongoDB Atlas updated your URI in the .env file <br />
> make sure you have a git repo connected to heroku account <br />
> Terminal #1: <br />
 ```bash
 cd server
 npm install
 npm run fat
 ```
> Terminal #2: <br />
 ```bash
 cd client
 npm install
 npm run build
 ```
> than drag the build folder to your netlify account to finish deployment<br />

## Versions

Version 0.5 - Features:
1. נכס"ל
2. עדכון פרטים אישיים
3. דיווח תקלות
4. הצעות לשיפור


Version 1 - New Feature:
1. חוות דעת מקצועיות והסמכות (מבחנים)
2. פורטל מפקדים


## License
No license
If you wish for license, contact me and I may add one.