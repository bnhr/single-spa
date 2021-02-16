# Microfrontend using single-spa
## Installation
```bash
git clone https://github.com/bnhr/single-spa.git
cd single-spa
yarn or npm install
``` 


## Folder Structure and local development
### root-config:
Container for every micro-frontend you have. To start it run:
```bash
cd root-config
yarn start
``` 
### styleguide:
Global style/css for every micro-frontend. To start it run:
```bash
cd styleguide
yarn start --https --port 9001
``` 

### navbar:
If you have mircofrontend that run in different route use this folder. To start it run:
```bash
cd navbar
yarn start --https --port 9002
``` 

### fakestate:
If you want to share function, logic, or anything that used globally use this folder. To start it run:
```bash
cd fakestate
yarn start --https --port 9003
``` 

other folders are microfrontend itself, run it by default command from each frameworks config
