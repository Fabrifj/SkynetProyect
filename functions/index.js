//importamos conexiones
const Express  = require('./conexiones/express')
const Firebase = require('./conexiones/SDK/FirebaseAdmi')

//inicializamos mongodb y pasamos su direccion
const express = new Express(3007);
const firebase = new Firebase();

//inicializamos00
express.initialize();