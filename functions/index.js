//importamos conexiones
const Express  = require('./api/Adapters/express')
const Firebase = require('./api/Adapters/SDK/FirebaseAdmi')

//inicializamos mongodb y pasamos su direccion
const express = new Express(3007);
const db = firebase = new Firebase();

//inicializamos00
express.initialize();