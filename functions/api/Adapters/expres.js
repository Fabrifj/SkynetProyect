const  express = require('express');
const bodyParser = require("body-parser");

class Express{
    constructor(puerto){
        this.app = express();
        this.puerto = puerto;
    }
    initialize(){
        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json());
// inicializar definir puerto
        this.app.listen(this.puerto);
        console.log('la aplicacion esta escuchan el puerto  '+ this.puerto);
        //define routers
        this.DefineRoutes();
    }
    DefineRoutes(){
        
    }
}