//importamos conexiones
const Express  = require('./api/Adapters/express')
const FirebaseAdmi = require('./api/Adapters/SDK/FirebaseAdmi')
const FireStore   = require('./api/Repositories/FireStore')
const Datarepository  = require("./api/Repositories/databaseRepository");

//inicializamos mongodb y pasamos su direccion
const firestore = new  FireStore();
const databaseRepository = new Datarepository(firestore);
const express = new Express(3007,databaseRepository);


//inicializamos00
express.initialize();