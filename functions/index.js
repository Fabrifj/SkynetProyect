//importamos conexiones
const Express  = require('./Adapters/express')
const Firebase = require('./Adapters/SDK/FirebaseAdmi')

//inicializamos mongodb y pasamos su direccion
const express = new Express(3007);
const firebase = new Firebase();

//inicializamos00
express.initialize();