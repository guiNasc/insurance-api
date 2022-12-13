
# Insurance API

This project is an API that generates a risk profile over provided user personal information.


## Built with

 - [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [NodeJS](https://nodejs.org/en/)
 - [NPM](https://www.npmjs.com/)
 - [Express](https://expressjs.com/)
 - [Jest](https://jestjs.io/)


## Getting Started

### Prerequisites

In order to run this project it is needed to have previously installed NodeJS at version >= 16.13.1 and NPM at version >= 8.1.2

### Installation & Running

Install it by running: 

```
npm install
``` 

Start the application with: 
```
npm run start
``` 
The server should be listening at localhost port 3002

```
http://localhost:3002
``` 

Tests could be running with: 
```
npm run test
``` 

When it's all running the API serves one endpoint at:
```
POST http://localhost:3002/api/insurance/evaluation
``` 
Expecting and returning the following json:
```
Request payload:

{
  "age": 78,
  "dependents": 2,
  "house": {"ownership_status": "mortgaged"},
  "income": 2000,
  "marital_status": "single",
  "risk_questions": [0, 1, 0],
  "vehicle": {"year": 1}
}

Response payload:

{
	"auto": "regular",
	"life": "ineligible",
	"home": "regular",
	"disability": "ineligible"
}
``` 
## Technical decisions

This stack was chosen due to my previous experience, I think it's lightweight and productive.
Jest was a key tool helping running tests during the development.

The application is divided into layers, the controller folder is intended to have all files that work with requests directly, and then call the service layer.
The service layer should apply all the logic necessary to fulfill the request. Despite, in this case, the service file is just calling the core functions I felt more comfortable by separating it this way.

I decided to create a core layer to isolate the whole 'risk algorithm' part, although I know that this could be written in the service layer, it felts more organized by putting it on a specific folder containing all these files.

The risk algorithm was divided into different files, it's managed by insurance.risk.js that provides a function for insurance evaluation.
All the insurance lines were separated in each specific file, in order to be easier to extend and maintain.

Last but not least, I use middleware to validate de json basic structure, in order to avoid a bunch of ifs.

