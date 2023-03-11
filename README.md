# Frontend_training_rep
A repository just to learn some react features and things.

This repository is made to learn some React + mui features, with ready-to-use backend for learning requets to backend. Here you will build frontend for a simple "Hello React" webapp.


### Stack
- yarn - package manager we will use for this project, so check if it's installed
- express (in backend)
- React
- MUI (is ok to use)
- axios (for making requests, especially POST requests)

## Repository overview

- backend/ - folder that contains everything connected to backend, while learning, you will use it just to start backend server
- frontend/ - folder that contains everything connected to frontend, the place where you will do all the magic.
- frontend/.gitignore - contains what should be ignored by Git
- frontend/README.md - is a standard file generated from (yarn create react-app {app_name})
- frontend/package.json - file that contains all packages that should be installed to run this project
- frontend/yarn.lock - standard generated file by yarn
- frontend/public - folder with static files
    - index.html - html main file
    - logo*, favicon.ico - icons
    - manifest.json - site mainifest file
    - robots.txt
- frontend/src - compiling part of code
    - App.css, index.css - additional styles 
    - App.js - Entrypoint
    - index.js - initialization React
    - setupTest.js - setup of tests
    - App.test.js - test
- TODO.md - file with tasks (all tasks are aimed at frontend directory only)
- REST_API.md - file with all routes to access when making requests


## How to start project

To run this project correctly you need first to install all the dependencies.
- go to backend folder first, execute <code>$ yarn install</code> there
- go to frontend folder, execute <code>$ yarn install</code> there
- when all dependecies are installed, you can start project

TO START BACKEND SERVER:
- go to backend folder and execute <code>$ yarn start </code>

TO START FRONTEND SERVER:
- go to frontend folder and execute <code>$ yarn start </code>

